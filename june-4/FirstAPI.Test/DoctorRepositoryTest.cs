using FirstAPI.Contexts;
using FirstAPI.Models;
using FirstAPI.Repositories;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System;
using System.Threading.Tasks;
using System.Linq;

namespace FirstAPI.Test
{
    public class DoctorRepositoryTest
    {
        private ClinicContext _context = null!;
        private DoctorRepository _doctorRepository = null!;

        [SetUp]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<ClinicContext>()
                            .UseInMemoryDatabase("TestDb_DoctorRepository")
                            .Options;

            _context = new ClinicContext(options);

            // Clear previous data to avoid cross-test pollution
            _context.Doctors.RemoveRange(_context.Doctors);
            _context.SaveChanges();

            // Seed data
            _context.Doctors.AddRange(
                new Doctor { Id = 1, Name = "Dr. Smith" },
                new Doctor { Id = 2, Name = "Dr. Jones" }
            );
            _context.SaveChanges();

            _doctorRepository = new DoctorRepository(_context);
        }

        [Test]
        public async Task Get_ExistingDoctorId_ReturnsDoctor()
        {
            var doctor = await _doctorRepository.Get(1);

            Assert.IsNotNull(doctor);
            Assert.AreEqual("Dr. Smith", doctor.Name);
        }

        [Test]
        public void Get_NonExistingDoctorId_ThrowsException()
        {
            Assert.ThrowsAsync<Exception>(async () => await _doctorRepository.Get(999));
        }

        [Test]
        public async Task GetAll_WhenDoctorsExist_ReturnsAllDoctors()
        {
            var doctors = await _doctorRepository.GetAll();

            Assert.IsNotNull(doctors);
            Assert.AreEqual(2, doctors.Count());
        }

        [Test]
        public void GetAll_WhenNoDoctors_ThrowsException()
        {
            // Remove all doctors from in-memory db
            _context.Doctors.RemoveRange(_context.Doctors);
            _context.SaveChanges();

            Assert.ThrowsAsync<Exception>(async () => await _doctorRepository.GetAll());
        }

        [TearDown]
        public void TearDown()
        {
            _context.Dispose();
        }
    }
}
