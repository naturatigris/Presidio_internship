using FirstAPI.Contexts;
using FirstAPI.Interfaces;
using FirstAPI.Models;
using FirstAPI.Models.DTOs.DoctorSpecialities;
using FirstAPI.Services;
using Microsoft.EntityFrameworkCore;
using Moq;
using NUnit.Framework;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace FirstAPI.Test
{
    public class PatientServiceTest
    {
        private ClinicContext _context = null!;
        private Mock<IRepository<int, Patient>> _patientRepositoryMock = null!;
        private Mock<IRepository<string, User>> _userRepositoryMock = null!;
        private Mock<IEncryptionService> _encryptionServiceMock = null!;
        private Mock<ITokenService> _tokenServiceMock = null!;
        private PatientService _patientService = null!;

        [SetUp]
        public void Setup()
        {
            // Setup in-memory database context
            var options = new DbContextOptionsBuilder<ClinicContext>()
                .UseInMemoryDatabase("TestDb_PatientService_Mocked")
                .Options;
            _context = new ClinicContext(options);

            // Initialize mocks
            _patientRepositoryMock = new Mock<IRepository<int, Patient>>();
            _userRepositoryMock = new Mock<IRepository<string, User>>();
            _encryptionServiceMock = new Mock<IEncryptionService>();
            _tokenServiceMock = new Mock<ITokenService>();

            // Setup encryption service
_encryptionServiceMock.Setup(es => es.EncryptData(It.IsAny<EncryptModel>()))
    .ReturnsAsync(new EncryptModel
    {
        EncryptedData = System.Text.Encoding.UTF8.GetBytes("encrypted_password"),
        HashKey = System.Text.Encoding.UTF8.GetBytes("hashkey")
    });

            // Setup token service
            _tokenServiceMock.Setup(ts => ts.GenerateToken(It.IsAny<User>()))
                .ReturnsAsync("fake-jwt-token");

            // Setup repository mocks for Add
            _userRepositoryMock.Setup(r => r.Add(It.IsAny<User>()))
                .ReturnsAsync((User u) => u);

            _patientRepositoryMock.Setup(r => r.Add(It.IsAny<Patient>()))
                .ReturnsAsync((Patient p) => p);

            // Create service with mocks
            _patientService = new PatientService(
                _patientRepositoryMock.Object,
                _userRepositoryMock.Object,
                _encryptionServiceMock.Object,
                _tokenServiceMock.Object,
                mapper: null! // not using IMapper
            );
        }

        [Test]
        public async Task AddPatient_ShouldEncryptPassword_SaveUserAndPatient_ReturnToken()
        {
            // Arrange
            var dto = new PatientAddRequestDto
            {
                Name = "John Doe",
                Age = 30,
                Email = "john@example.com",
                Phone = "1234567890",
                Password = "securepassword"
            };

            // Act
            var (patient, token) = await _patientService.AddPatient(dto);

            // Assert
            Assert.IsNotNull(patient);
            Assert.AreEqual(dto.Name, patient.Name);
            Assert.AreEqual(dto.Email, patient.Email);
            Assert.AreEqual("fake-jwt-token", token);

            _encryptionServiceMock.Verify(e => e.EncryptData(It.Is<EncryptModel>(m => m.Data == dto.Password)), Times.Once);
            _userRepositoryMock.Verify(r => r.Add(It.Is<User>(u => u.Username == dto.Email)), Times.Once);
            _patientRepositoryMock.Verify(r => r.Add(It.Is<Patient>(p => p.Email == dto.Email && p.Name == dto.Name)), Times.Once);
            _tokenServiceMock.Verify(t => t.GenerateToken(It.IsAny<User>()), Times.Once);
        }

        [TearDown]
        public void TearDown()
        {
            _context.Dispose();
        }
    }
}
