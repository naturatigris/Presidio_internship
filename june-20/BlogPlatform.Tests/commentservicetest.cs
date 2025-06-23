using BlogPlatform.Contexts;
using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.AuditLogs;
using BlogPlatform.Repositories;
using BlogPlatform.Services;
using Microsoft.EntityFrameworkCore;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogPlatform.Tests.Services
{
    [TestFixture]
    public class CommentServiceTests
    {
        private BlogPlatformContext _context = null!;
        private IRepository<Guid, Comment> _commentRepository = null!;
        private Mock<ICommentAuditLogRepository> _auditRepoMock = null!;
        private Mock<IUserValidationService> _userValidationServiceMock = null!;
        private CommentService _service = null!;

        [SetUp]
        public void Setup()
        {
            // Setup in-memory EF Core context
            var options = new DbContextOptionsBuilder<BlogPlatformContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;
            _context = new BlogPlatformContext(options);

            // Use the real repository (not mocked)
            _commentRepository = new CommentRepository(_context);

            // Keep audit log and user validation mocked for simplicity
            _auditRepoMock = new Mock<ICommentAuditLogRepository>();
            _userValidationServiceMock = new Mock<IUserValidationService>();

            _service = new CommentService(
                _commentRepository,
                _auditRepoMock.Object,
                _userValidationServiceMock.Object
            );
        }

        [TearDown]
        public void TearDown()
        {
            _context.Database.EnsureDeleted();
            _context.Dispose();
        }

        [Test]
        public async Task AddComment_ShouldAddCommentAndAudit()
        {
            var comment = new Comment
            {
                Id = Guid.NewGuid(),
                UserEmail = "user@example.com",
                Content = "Nice!",
                PostId = Guid.NewGuid()
            };
            var performedBy = "admin@example.com";

            _auditRepoMock.Setup(a => a.AddAsync(It.IsAny<CommentAuditLog>())).Returns(Task.CompletedTask);

            var result = await _service.AddComment(comment, performedBy);

            _auditRepoMock.Verify(a => a.AddAsync(It.Is<CommentAuditLog>(log =>
                log.Action == "Created" &&
                log.CommentId == comment.Id &&
                log.PerformedBy == performedBy
            )), Times.Once);

            Assert.That(result.Id, Is.EqualTo(comment.Id));
            Assert.That(result.Content, Is.EqualTo(comment.Content));
            Assert.That(result.UserEmail, Is.EqualTo(comment.UserEmail));
        }

        [Test]
        public void GetCommentById_ThrowsException_WhenCommentIsNull()
        {
            Assert.ThrowsAsync<Exception>(() => _service.GetCommentById(Guid.NewGuid()));
        }

        [Test]
        public async Task UpdateComment_ShouldUpdateContentAndAudit()
        {
            var id = Guid.NewGuid();
            var oldComment = new Comment
            {
                Id = id,
                Content = "Old content",
                UserEmail = "user@example.com",
                PostId = Guid.NewGuid()
            };
            await _commentRepository.Add(oldComment);

            var newComment = new Comment { Content = "Updated content" };
            var performedBy = "admin@example.com";

            _userValidationServiceMock.Setup(v => v.ValidateUserEmail(performedBy)).Returns(Task.CompletedTask);
            _auditRepoMock.Setup(a => a.AddAsync(It.IsAny<CommentAuditLog>())).Returns(Task.CompletedTask);

            var result = await _service.UpdateComment(id, newComment, performedBy);

            _userValidationServiceMock.Verify(v => v.ValidateUserEmail(performedBy), Times.Once);

            Assert.That(result.Content, Is.EqualTo("Updated content"));
        }

        [Test]
        public async Task DeleteComment_ShouldMarkAsDeletedAndAudit()
        {
            var id = Guid.NewGuid();
            var comment = new Comment
            {
                Id = id,
                IsDeleted = false,
                Status = "Active",
                UserEmail = "user@example.com",
                PostId = Guid.NewGuid(),
                Content="Hello"

            };
            await _commentRepository.Add(comment);

            var performedBy = "admin@example.com";

            _userValidationServiceMock.Setup(v => v.ValidateUserEmail(performedBy)).Returns(Task.CompletedTask);
            _auditRepoMock.Setup(a => a.AddAsync(It.IsAny<CommentAuditLog>())).Returns(Task.CompletedTask);

            var result = await _service.DeleteComment(id, performedBy);

            Assert.That(result.IsDeleted, Is.True);
            _auditRepoMock.Verify(a => a.AddAsync(It.IsAny<CommentAuditLog>()), Times.Once);
        }

        [Test]
        public async Task GetFilteredComments_ShouldFilterByPostIdAndStatus()
        {
            var postId1 = Guid.NewGuid();
            var postId2 = Guid.NewGuid();

            var comments = new List<Comment>
            {
                new Comment { Id = Guid.NewGuid(), PostId = postId1, Status = "Approved", IsDeleted = false, UserEmail = "u1@example.com", Content = "C1" },
                new Comment { Id = Guid.NewGuid(), PostId = postId2, Status = "Deleted", IsDeleted = true, UserEmail = "u2@example.com", Content = "C2" },
                new Comment { Id = Guid.NewGuid(), PostId = postId1, Status = "Approved", IsDeleted = false, UserEmail = "u3@example.com", Content = "C3" }
            };

            foreach (var c in comments)
                await _commentRepository.Add(c);

            var result = await _service.GetFilteredComments(
                postId1,
                null, "Approved", "asc", 1, 10);

            Assert.That(result.Count(), Is.EqualTo(2));
            Assert.That(result.All(c => c.Status == "Approved" && !c.IsDeleted), Is.True);
        }
    }
}
