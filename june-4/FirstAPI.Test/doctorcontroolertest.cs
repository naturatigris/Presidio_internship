using FirstAPI.Controllers;
using FirstAPI.Interfaces;
using FirstAPI.Models;
using FirstAPI.Models.DTOs.DoctorSpecialities;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstAPI.Test
{
    public class DoctorControllerTest
    {
        private Mock<IDoctorService> _doctorServiceMock = null!;
        private DoctorController _doctorController = null!;

        [SetUp]
        public void Setup()
        {
            _doctorServiceMock = new Mock<IDoctorService>();
            _doctorController = new DoctorController(_doctorServiceMock.Object);
        }

        [Test]
        public async Task GetDoctors_ShouldReturnDoctorsList()
        {
            // Arrange
            var speciality = "Cardiology";
            var mockDoctors = new List<DoctorsBySpecialityResponseDto>
            {
                new DoctorsBySpecialityResponseDto { Id = 1, Dname = "Dr. A", Yoe = 5 }
            };

            _doctorServiceMock.Setup(s => s.GetDoctorsBySpeciality(speciality))
                              .ReturnsAsync(mockDoctors);

            // Act
            var result = await _doctorController.GetDoctors(speciality);

            // Assert
            Assert.IsInstanceOf<OkObjectResult>(result.Result);
            var okResult = result.Result as OkObjectResult;
            Assert.IsNotNull(okResult);
            Assert.That((okResult.Value as IEnumerable<DoctorsBySpecialityResponseDto>)?.ToList().Count, Is.EqualTo(1));
        }

        [Test]
        public async Task PostDoctor_ShouldReturnCreatedResult()
        {
            // Arrange
            var dto = new DoctorAddRequestDto
            {
                Name = "Dr. Test",
                Specialities = new List<SpecialityAddRequestDto>
                {
                    new SpecialityAddRequestDto { Name = "Neuro" }
                },
                YearsOfExperience = 4,
                Email = "test@doc.com",
                Password = "secret123"
            };

            var expectedDoctor = new Doctor
            {
                Id = 1,
                Name = dto.Name,
                YearsOfExperience = dto.YearsOfExperience,
                Email = dto.Email
            };

            _doctorServiceMock.Setup(s => s.AddDoctor(dto))
                              .ReturnsAsync(expectedDoctor);

            // Act
            var result = await _doctorController.PostDoctor(dto);

            // Assert
            Assert.IsInstanceOf<CreatedResult>(result.Result);
            var createdResult = result.Result as CreatedResult;
            Assert.That((createdResult?.Value as Doctor)?.Name, Is.EqualTo("Dr. Test"));
        }

        [Test]
        public async Task PostDoctor_ShouldReturnBadRequest_OnNull()
        {
            // Arrange
            var dto = new DoctorAddRequestDto
            {
                Name = "Dr. Null",
                YearsOfExperience = 35,
                Email = "null@doc.com",
            Specialities = new List<SpecialityAddRequestDto>
            {
                new SpecialityAddRequestDto { Name = "Neuro" }
            },
                Password = "123"
            };

            _doctorServiceMock.Setup(s => s.AddDoctor(dto))
                              .ReturnsAsync((Doctor?)null);

            // Act
            var result = await _doctorController.PostDoctor(dto);

            // Assert
            Assert.IsInstanceOf<BadRequestObjectResult>(result.Result);
            var badResult = result.Result as BadRequestObjectResult;
            Assert.That(badResult?.Value?.ToString(), Is.EqualTo("Unable to process request at this moment"));
        }

        [Test]
        public async Task PostDoctor_ShouldReturnBadRequest_OnException()
        {
            // Arrange
            var dto = new DoctorAddRequestDto
            {
                Name = "Dr. Ex",
                YearsOfExperience = 4,
                Email = "ex@doc.com",
                Specialities = new List<SpecialityAddRequestDto>
                {
                    new SpecialityAddRequestDto { Name = "Neuro" }
                },
                Password = "pass"
            };

            _doctorServiceMock.Setup(s => s.AddDoctor(dto))
                              .ThrowsAsync(new Exception("Something went wrong"));

            // Act
            var result = await _doctorController.PostDoctor(dto);

            // Assert
            Assert.IsInstanceOf<BadRequestObjectResult>(result.Result);
            var badRequest = result.Result as BadRequestObjectResult;
            Assert.That(badRequest?.Value?.ToString(), Is.EqualTo("Something went wrong"));
        }
    }
}
