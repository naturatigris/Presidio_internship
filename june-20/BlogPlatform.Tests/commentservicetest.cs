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
    private Mock<IRepository<Guid, Comment>> _commentRepoMock = null!;
    private Mock<ICommentAuditLogRepository> _auditRepoMock = null!;
    private Mock<IUserValidationService> _userValidationServiceMock = null!;
    private CommentService _service = null!;
    private List<Comment> _dbComments;

    [SetUp]
    public void Setup()
    {
        _commentRepoMock = new Mock<IRepository<Guid, Comment>>();
        _auditRepoMock = new Mock<ICommentAuditLogRepository>();
        _userValidationServiceMock = new Mock<IUserValidationService>();

        _dbComments = new List<Comment>();

        _commentRepoMock.Setup(r => r.Add(It.IsAny<Comment>()))
            .ReturnsAsync((Comment c) => {
                _dbComments.Add(c);
                return c;
            });

        _commentRepoMock.Setup(r => r.Get(It.IsAny<Guid>()))
            .ReturnsAsync((Guid id) => _dbComments.FirstOrDefault(c => c.Id == id));

        _commentRepoMock.Setup(r => r.Update(It.IsAny<Guid>(), It.IsAny<Comment>()))
            .ReturnsAsync((Guid id, Comment updated) =>
            {
                var index = _dbComments.FindIndex(c => c.Id == id);
                if (index >= 0) _dbComments[index] = updated;
                return updated;
            });

        _commentRepoMock.Setup(r => r.GetAll())
            .ReturnsAsync(() => _dbComments.AsEnumerable());

        _auditRepoMock.Setup(a => a.AddAsync(It.IsAny<CommentAuditLog>()))
            .Returns(Task.CompletedTask);

        _userValidationServiceMock.Setup(v => v.ValidateUserEmail(It.IsAny<string>()))
            .Returns(Task.CompletedTask);

        _service = new CommentService(
            _commentRepoMock.Object,
            _auditRepoMock.Object,
            _userValidationServiceMock.Object
        );
    }

    [Test]
    public async Task AddComment_ShouldAddCommentAndAudit()
    {
        var comment = new Comment { Id = Guid.NewGuid(), UserEmail = "user@example.com", Content = "Nice!", PostId = Guid.NewGuid() };
        var performedBy = "admin@example.com";

        var result = await _service.AddComment(comment, performedBy);

        _auditRepoMock.Verify(a => a.AddAsync(It.Is<CommentAuditLog>(log =>
            log.Action == "Created" &&
            log.CommentId == comment.Id &&
            log.PerformedBy == performedBy
        )), Times.Once);

        Assert.That(result, Is.EqualTo(comment));
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
        var original = new Comment { Id = id, Content = "Old", UserEmail = "u@example.com", PostId = Guid.NewGuid() };
        _dbComments.Add(original);

        var updated = new Comment { Content = "New" };
        var performedBy = "admin@example.com";

        var result = await _service.UpdateComment(id, updated, performedBy);

        Assert.That(result.Content, Is.EqualTo("New"));
    }

    [Test]
    public async Task DeleteComment_ShouldMarkAsDeletedAndAudit()
    {
        var id = Guid.NewGuid();
        var comment = new Comment { Id = id, IsDeleted = false, UserEmail = "user@example.com", PostId = Guid.NewGuid(), Content = "Test" };
        _dbComments.Add(comment);

        var result = await _service.DeleteComment(id, "admin@example.com");

        Assert.That(result.IsDeleted, Is.True);
        _auditRepoMock.Verify(a => a.AddAsync(It.IsAny<CommentAuditLog>()), Times.Once);
    }

    [Test]
    public async Task GetFilteredComments_ShouldFilterByPostIdAndStatus()
    {
        var postId1 = Guid.NewGuid();
        var postId2 = Guid.NewGuid();

        _dbComments.AddRange(new[]
        {
            new Comment { Id = Guid.NewGuid(), PostId = postId1, Status = "Active", IsDeleted = false, UserEmail = "u1@example.com", Content = "C1", CreatedAt = DateTime.UtcNow.AddMinutes(-2) },
            new Comment { Id = Guid.NewGuid(), PostId = postId2, Status = "Deleted", IsDeleted = true, UserEmail = "u2@example.com", Content = "C2", CreatedAt = DateTime.UtcNow.AddMinutes(-1) },
            new Comment { Id = Guid.NewGuid(), PostId = postId1, Status = "Active", IsDeleted = false, UserEmail = "u3@example.com", Content = "C3", CreatedAt = DateTime.UtcNow }
        });

        var (results, count) = await _service.GetFilteredComments(postId1, "u1@example.com", "Active", "desc", 1, 10);

        Assert.That(results.Count(), Is.EqualTo(1));
        Assert.That(results.First().Content, Is.EqualTo("C1"));
    }
}

}
