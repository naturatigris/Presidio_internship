using BlogPlatform.Controllers.v1;
using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;


namespace BlogPlatform.Tests
{
    [TestFixture]
    public class UsersControllerTests
    {
        private UsersController _controller = null!;
        private Mock<IUserService> _userServiceMock = null!;
        private Mock<IMapper> _mapperMock = null!;
        private Mock<IPasswordHasher> _passwordHasherMock = null!;
        private Mock<IPostService> _postServiceMock = null!;

        [SetUp]
        public void Setup()
        {
            _userServiceMock = new Mock<IUserService>();
            _mapperMock = new Mock<IMapper>();
            _passwordHasherMock = new Mock<IPasswordHasher>();
            _postServiceMock = new Mock<IPostService>();

            _controller = new UsersController(
                _userServiceMock.Object,
                _mapperMock.Object,
                _passwordHasherMock.Object,
                _postServiceMock.Object
            );
        }

        [Test]
        public async Task GetAll_ReturnsOk_WhenUsersExist()
        {
            var users = new List<User> { new User { Email = "test@example.com" } };
            _userServiceMock.Setup(s => s.GetAll()).ReturnsAsync(users);

            var result = await _controller.GetAll();

            Assert.That(result, Is.TypeOf<OkObjectResult>());
            Assert.That(((OkObjectResult)result).Value, Is.EqualTo(users));
        }

        [Test]
        public async Task GetByEmail_ReturnsNotFound_WhenUserDoesNotExist()
        {
            _userServiceMock.Setup(s => s.Get(It.IsAny<string>())).ReturnsAsync((User)null!);

            var result = await _controller.GetByEmail("invalid@example.com");

            Assert.That(result, Is.TypeOf<NotFoundObjectResult>());
        }

        [Test]
        public async Task CreateUser_ReturnsBadRequest_WhenAdminSecretIsWrong()
        {
            var dto = new UserDto { Role = "admin", AdminSecret = "wrong-secret" };

            var result = await _controller.CreateUser(dto);

            Assert.That(result, Is.TypeOf<BadRequestObjectResult>());
        }

        [Test]
        public async Task CreateUser_ReturnsCreatedAt_WhenUserIsValid()
        {
            var dto = new UserDto { Email = "test@example.com", Password = "123", Role = "admin", AdminSecret = "secret123" };
            var user = new User { Email = dto.Email };
            _mapperMock.Setup(m => m.Map<User>(dto)).Returns(user);
            _passwordHasherMock.Setup(p => p.HashPassword(dto.Password)).Returns("hashed");
            _userServiceMock.Setup(u => u.AddUser(user, user.Email)).ReturnsAsync(user);

            var result = await _controller.CreateUser(dto);

            Assert.That(result, Is.TypeOf<CreatedAtActionResult>());
        }
        [Test]
public async Task UpdateUser_ReturnsOk_WhenUserIsUpdated()
{
    var email = "user@example.com";
    var performerEmail = "admin@example.com";
    var dto = new UpdateUserDto { Name = "Updated User", Password = "newpass" };
    var user = new User { Email = email };
    var performer = new User { Email = performerEmail, Role = "Admin" };

    var claims = new List<Claim>
    {
        new Claim(ClaimTypes.Email, performerEmail),
        new Claim(ClaimTypes.Role, "Admin")
    };
    var identity = new ClaimsIdentity(claims);
    var claimsPrincipal = new ClaimsPrincipal(identity);
    _controller.ControllerContext.HttpContext = new DefaultHttpContext { User = claimsPrincipal };

    _userServiceMock.Setup(s => s.Get(performerEmail)).ReturnsAsync(performer);
    _userServiceMock.Setup(s => s.Get(email)).ReturnsAsync(user);
    _userServiceMock.Setup(s => s.UpdateUser(email, user, performerEmail)).ReturnsAsync(user);
    _mapperMock.Setup(m => m.Map(dto, user));
    _passwordHasherMock.Setup(h => h.HashPassword(dto.Password)).Returns("hashed-pass");

    var result = await _controller.UpdateUser(email, dto, performerEmail);

    Assert.That(result, Is.TypeOf<OkObjectResult>());
    Assert.That(((OkObjectResult)result).Value, Is.EqualTo(user));
}

        [Test]
        public async Task UpdateUserAsAdmin_ReturnsForbidden_WhenUserIsNotAdmin()
        {
            var email = "user@example.com";
            var performerEmail = "user@example.com";
            var dto = new AdminUpdateUserDto();

            var claims = new List<Claim>
    {
        new Claim(ClaimTypes.Email, performerEmail),
        new Claim(ClaimTypes.Role, "User")
    };
            var identity = new ClaimsIdentity(claims);
            var claimsPrincipal = new ClaimsPrincipal(identity);
            _controller.ControllerContext.HttpContext = new DefaultHttpContext { User = claimsPrincipal };

            var result = await _controller.UpdateUserAsAdmin(email, dto, performerEmail);

            Assert.That(result, Is.TypeOf<ForbidResult>());
        }
        [Test]
        public async Task DeleteUser_ReturnsOk_WhenUserIsDeleted()
        {
            var email = "user@example.com";
            var performerEmail = "admin@example.com";
            var user = new User { Email = email };

            var claims = new List<Claim>
    {
        new Claim(ClaimTypes.Email, performerEmail),
        new Claim(ClaimTypes.Role, "Admin")
    };
            var identity = new ClaimsIdentity(claims);
            var claimsPrincipal = new ClaimsPrincipal(identity);
            _controller.ControllerContext.HttpContext = new DefaultHttpContext { User = claimsPrincipal };

            _userServiceMock.Setup(s => s.Get(email)).ReturnsAsync(user);
            _userServiceMock.Setup(s => s.DeleteUser(email, email)).ReturnsAsync(user);

            var result = await _controller.DeleteUser(email, performerEmail);

            Assert.That(result, Is.TypeOf<OkObjectResult>());
            var message = ((OkObjectResult)result).Value?.ToString();
            Assert.That(message, Does.Contain("marked as deleted"));
        }
[Test]
public async Task GetPostsByUser_ReturnsOk_WhenPostsExist()
{
    // Arrange
    var email = "test@example.com";
    var posts = new List<Post>
    {
        new Post { Id = Guid.NewGuid(), Title = "Post 1", Content = "Content 1", UserEmail = email },
        new Post { Id = Guid.NewGuid(), Title = "Post 2", Content = "Content 2", UserEmail = email }
    };

    _userServiceMock.Setup(s => s.GetPostByUser(email)).ReturnsAsync(posts);

    // Act
    var result = await _controller.GetPostsByUser(email);

    // Assert
    Assert.That(result.Result, Is.InstanceOf<OkObjectResult>());
    var okResult = result.Result as OkObjectResult;
    Assert.That(okResult!.Value, Is.EqualTo(posts));
}
[Test]
public async Task GetPostsByUser_ReturnsNotFound_WhenNoPostsExist()
{
    // Arrange
    var email = "empty@example.com";
    _userServiceMock.Setup(s => s.GetPostByUser(email)).ReturnsAsync(new List<Post>());

    // Act
    var result = await _controller.GetPostsByUser(email);

    // Assert
    Assert.That(result.Result, Is.InstanceOf<NotFoundObjectResult>());
}



    }
}
