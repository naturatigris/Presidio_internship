using FirstAPI.Controllers;
using FirstAPI.Interfaces;
using FirstAPI.Models;
using FirstAPI.Models.DTOs.DoctorSpecialities;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace FirstAPI.Test
{
    public class PatientControllerTest
    {
        private Mock<IPatientService> _patientServiceMock = null!;
        private PatientController _patientController = null!;

        [SetUp]
        public void Setup()
        {
            _patientServiceMock = new Mock<IPatientService>();
            _patientController = new PatientController(_patientServiceMock.Object);
        }

[Test]
public async Task PostPatient_ShouldReturnCreatedResult()
{
    // Arrange
    var dto = new PatientAddRequestDto
    {
        Name = "Jane Doe",
        Age = 28,
        Phone = "9999999999",
        Email = "jane@doe.com",
        Password = "pass123"
    };

    var expectedPatient = new Patient
    {
        Id = 1,
        Name = "Jane Doe",
        Age = 28,
        Email = "jane@doe.com",
        Phone = "9999999999"
    };

    _patientServiceMock.Setup(s => s.AddPatient(dto))
                       .ReturnsAsync((expectedPatient, "jwt_token_string"));

    // Act
    var result = await _patientController.PostPatient(dto);

    // Assert
    Assert.IsInstanceOf<CreatedResult>(result.Result);
    var createdResult = result.Result as CreatedResult;

    // Use dictionary-style access
    var response = createdResult?.Value?.GetType().GetProperty("patient")?.GetValue(createdResult.Value);
    var token = createdResult?.Value?.GetType().GetProperty("token")?.GetValue(createdResult.Value);

    Assert.That((response as Patient)?.Name, Is.EqualTo("Jane Doe"));
    Assert.That(token?.ToString(), Is.EqualTo("jwt_token_string"));
}

        [Test]
        public async Task PostPatient_ShouldReturnBadRequest_WhenPatientIsNull()
        {
            // Arrange
            var dto = new PatientAddRequestDto
            {
                Name = "John",
                Age = 40,
                Email = "john@example.com",
                Phone = "9876543210",
                Password = "abc123"
            };

            _patientServiceMock.Setup(p => p.AddPatient(dto))
                               .ReturnsAsync(((Patient?)null, "token123"));

            // Act
            var result = await _patientController.PostPatient(dto);

            // Assert
            Assert.IsInstanceOf<BadRequestObjectResult>(result.Result);
            var badRequest = result.Result as BadRequestObjectResult;
            Assert.That(badRequest?.Value?.ToString(), Is.EqualTo("Unable to add patient"));
        }

        [Test]
        public async Task PostPatient_ShouldReturnBadRequest_OnException()
        {
            // Arrange
            var dto = new PatientAddRequestDto
            {
                Name = "Crash User",
                Age = 50,
                Email = "crash@example.com",
                Phone = "0000000000",
                Password = "crash"
            };

            _patientServiceMock.Setup(p => p.AddPatient(dto))
                               .ThrowsAsync(new Exception("Service error"));

            // Act
            var result = await _patientController.PostPatient(dto);

            // Assert
            Assert.IsInstanceOf<BadRequestObjectResult>(result.Result);
            var badRequest = result.Result as BadRequestObjectResult;
            Assert.That(badRequest?.Value?.ToString(), Is.EqualTo("Service error"));
        }
    }
}
