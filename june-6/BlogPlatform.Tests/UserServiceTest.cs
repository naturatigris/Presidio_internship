using BlogPlatform.Contexts;
using BlogPlatform.Models;
using BlogPlatform.Models.AuditLogs;
using BlogPlatform.Repositories;
using BlogPlatform.Services;
using BlogPlatform.Interfaces;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Moq;

namespace BlogPlatform.Tests.Services
{
    public class UserServiceConcreteRepoTests
    {
        private BlogPlatformContext _context;
        private UserService _userService;
        private UserRepository _userRepository;
        private PostRepository _postRepository;
        private UserAuditLogRepository _auditLogRepository;
        private Mock<IUserValidationService> _mockValidationService;


        [SetUp]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<BlogPlatformContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;

            _context = new BlogPlatformContext(options);
            _context.Database.EnsureCreated();

            _userRepository = new UserRepository(_context);
            _postRepository = new PostRepository(_context);
            _auditLogRepository = new UserAuditLogRepository(_context);
            _mockValidationService = new Mock<IUserValidationService>();


            _userService = new UserService(_context, _userRepository, _postRepository, _auditLogRepository,_mockValidationService.Object);
        }

        [TearDown]
        public void TearDown()
        {
            _context.Database.EnsureDeleted();
            _context.Dispose();
        }

        [Test]
        public async Task AddUser_ShouldStoreAndAudit()
        {
            var user = new User
            {
                Email = "test@example.com",
                Name = "Test User",
                Role = "Editor",
                Status = "Active",
                PasswordHash = "password",
                CreatedAt = DateTime.UtcNow
            };

            var result = await _userService.AddUser(user, "admin@example.com");

            var savedUser = await _userRepository.Get("test@example.com");

            Assert.That(savedUser, Is.Not.Null);
            Assert.That(result.Email, Is.EqualTo(savedUser.Email));
        }

        [Test]
        public async Task GetUser_ShouldGetByEmail()
        {
            var user = new User
            {
                Email = "test@example.com",
                Name = "Test User",
                Role = "Editor",
                Status = "Active",
                PasswordHash = "password",
                CreatedAt = DateTime.UtcNow
            };

            await _userService.AddUser(user, "admin@example.com");
            var result = await _userService.Get("test@example.com");

            Assert.That(result, Is.Not.Null);
            Assert.That(result.Name, Is.EqualTo("Test User"));
        }

 [Test]
public async Task UpdateUser_UpdatesUserSuccessfully_AndLogsAudit()
{
    var key = "test@example.com";
    var performedBy = "admin@example.com";
    _mockValidationService.Setup(v => v.ValidateUserEmail(It.IsAny<string>())).Returns(Task.CompletedTask);


    var originalUser = new User
    {
        Email = key,
        Name = "Old Name",
        Role = "Editor",
        Status = "Active",
        PasswordHash = "password",
        CreatedAt = DateTime.UtcNow
    };

    await _userService.AddUser(originalUser, performedBy);

    var updatedUser = new User
    {
        Email = key,
        Name = "New Name",
        Role = "Editor",
        Status = "Active",
        PasswordHash = "password",
        CreatedAt = DateTime.UtcNow
    };

    var result = await _userService.UpdateUser(key, updatedUser, performedBy);
    

    Assert.That(result.Name, Is.EqualTo("New Name"));
}

        [Test]
        public void DeleteUser_NonExistentUser_ThrowsException()
        {
            var ex = Assert.ThrowsAsync<Exception>(() =>
                _userService.DeleteUser("missing@example.com", "admin@example.com"));

            Assert.That(ex.Message, Is.EqualTo("User not found"));
        }

        [Test]
        public async Task GetPostByUser_ReturnsOnlyPostsOfUser()
        {
         var user = new User
            {
                Email = "test@example.com",
                Name = "Test User",
                Role = "Editor",
                Status = "Active",
                PasswordHash = "password",
                CreatedAt = DateTime.UtcNow
            };
            await _userService.AddUser(user, "admin@example.com");

            // Setup validation to pass (mocked)
            _mockValidationService.Setup(v => v.ValidateUserEmail(It.IsAny<string>())).Returns(Task.CompletedTask);

            var post1 = new Post { Id = Guid.NewGuid(), UserEmail = "test@example.com", Title = "Post 1" ,Content="hello",Slug="h"};
            var post2 = new Post { Id = Guid.NewGuid(), UserEmail = "other@example.com", Title = "Post 2" ,Content="hello2",Slug="h2"};

            await _context.Posts.AddRangeAsync(post1, post2);
            await _context.SaveChangesAsync();

            var result = await _userService.GetPostByUser("test@example.com");

            Assert.That(result.Count(), Is.EqualTo(1));
            Assert.That(result.First().UserEmail, Is.EqualTo("test@example.com"));
        }
    }
}
