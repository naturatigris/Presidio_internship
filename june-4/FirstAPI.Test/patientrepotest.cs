using FirstAPI.Contexts;
using FirstAPI.Models;
using FirstAPI.Repositories;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAPI.Test
{
    public class PatinetRepoTest
    {
        private ClinicContext _context = null!;
        private PatinetRepo _repo = null!;

        [SetUp]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<ClinicContext>()
                .UseInMemoryDatabase(databaseName: "PatientRepoTestDb_" + System.Guid.NewGuid())
                .Options;

            _context = new ClinicContext(options);
            _repo = new PatinetRepo(_context);
        }

        [Test]
        public async Task Add_And_Get_Patient_Should_Work()
        {
            // Arrange
            var patient = new Patient
            {
                Name = "Test Patient",
                Age = 35,
                Email = "test@patient.com",
                Phone = "1234567890"
            };

            // Act
            var added = await _repo.Add(patient);
            var fetched = await _repo.Get(added.Id);

            // Assert
            Assert.IsNotNull(fetched);
            Assert.AreEqual("Test Patient", fetched.Name);
        }

        [Test]
        public async Task GetAll_ShouldReturnAllPatients()
        {
            // Arrange
            await _repo.Add(new Patient { Name = "A", Age = 20, Email = "a@example.com", Phone = "111" });
            await _repo.Add(new Patient { Name = "B", Age = 25, Email = "b@example.com", Phone = "222" });

            // Act
            var allPatients = await _repo.GetAll();

            // Assert
            Assert.That(allPatients.Count(), Is.EqualTo(2));
        }

        [Test]
        public void Get_InvalidId_ShouldThrowException()
        {
            // Act & Assert
            var ex = Assert.ThrowsAsync<Exception>(async () => await _repo.Get(999));
            Assert.That(ex!.Message, Does.Contain("No patient with teh given ID"));
        }

        [Test]
        public void GetAll_EmptyTable_ShouldThrowException()
        {
            // Act & Assert
            var ex = Assert.ThrowsAsync<Exception>(async () => await _repo.GetAll());
            Assert.That(ex!.Message, Is.EqualTo("No Patients in the database"));
        }

        [TearDown]
        public void TearDown()
        {
            _context.Dispose();
        }
    }
}
