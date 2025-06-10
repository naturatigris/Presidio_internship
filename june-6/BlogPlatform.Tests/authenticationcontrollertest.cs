using BlogPlatform.Controllers;
using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.DTOs;
using BlogPlatform.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using NUnit.Framework;
using System.Threading.Tasks;

namespace BlogPlatform.Tests.Controllers
{
    public class AuthenticationControllerTests
    {
        private Mock<IAuthenticationService> _authServiceMock = null!;
        private Mock<ILogger<AuthenticationController>> _loggerMock = null!;
        private Mock<IRepository<string, User>> _userRepositoryMock = null!;
        private Mock<RefreshTokenService> _refreshTokenServiceMock = null!;
        private Mock<ITokenService> _tokenServiceMock = null!;
        private AuthenticationController _controller = null!;

        [SetUp]
        public void Setup()
        {
            _authServiceMock = new Mock<IAuthenticationService>();
            _loggerMock = new Mock<ILogger<AuthenticationController>>();
            _userRepositoryMock = new Mock<IRepository<string, User>>();
            _refreshTokenServiceMock = new Mock<RefreshTokenService>(Mock.Of<IRefreshTokenRepository>()) { CallBase = true };
            _tokenServiceMock = new Mock<ITokenService>();

            _controller = new AuthenticationController(
                _authServiceMock.Object,
                _loggerMock.Object,
                _userRepositoryMock.Object,
                _tokenServiceMock.Object,
                _refreshTokenServiceMock.Object
            );
        }

        [Test]
        public async Task UserLogin_ValidCredentials_ReturnsOkResult()
        {
            // Arrange
            var request = new UserLoginRequest
            {
                Email = "user@example.com",
                Password = "password"
            };

            var response = new UserLoginResponse
            {
                Email = "user@example.com",
                Token = "jwt-token",
                RefreshToken = "refresh-token"
            };

            _authServiceMock.Setup(x => x.Login(request)).ReturnsAsync(response);

            // Act
            var actionResult = await _controller.UserLogin(request);
            //Assert
            Assert.That(actionResult.Result, Is.TypeOf<OkObjectResult>());

            var okResult = actionResult.Result as OkObjectResult;
            var value = okResult!.Value as UserLoginResponse;

            Assert.That(value!.Email, Is.EqualTo("user@example.com"));
            Assert.That(value.Token, Is.EqualTo("jwt-token"));
        }

        [Test]
        public async Task RefreshToken_ValidToken_ReturnsNewToken()
        {
            var refreshTokenStr = "valid-token";
            var userEmail = "user@example.com";

            var refreshToken = new RefreshToken
            {
                Token = refreshTokenStr,
                UserEmail = userEmail,
                Expires = DateTime.UtcNow.AddDays(1),
                IsRevoked = false
            };

            var user = new User
            {
                Email = userEmail,
                Name = "Test User",
                Role = "User"
            };

            var request = new RefreshTokenRequest
            {
                RefreshToken = refreshTokenStr
            };

            _refreshTokenServiceMock.Setup(r => r.Validate(refreshTokenStr)).ReturnsAsync(refreshToken);
            _userRepositoryMock.Setup(r => r.Get(userEmail)).ReturnsAsync(user);
            _tokenServiceMock.Setup(t => t.GenerateToken(user)).ReturnsAsync("new-access-token");
            _refreshTokenServiceMock.Setup(r => r.GenerateToken()).Returns("new-refresh-token");
            _refreshTokenServiceMock.Setup(r => r.Revoke(refreshTokenStr)).Returns(Task.CompletedTask);
            _refreshTokenServiceMock.Setup(r => r.SaveToken("new-refresh-token", userEmail)).Returns(Task.CompletedTask);

            // Act
            var actionResult = await _controller.RefreshToken(request);

            // Assert

                Assert.That(actionResult.Result, Is.TypeOf<OkObjectResult>());

                var okResult = actionResult.Result as OkObjectResult;
                var value = okResult!.Value as UserLoginResponse;

            Assert.That(value!.Token, Is.EqualTo("new-access-token"));
            Assert.That(value.RefreshToken, Is.EqualTo("new-refresh-token"));
        }
    }
}
