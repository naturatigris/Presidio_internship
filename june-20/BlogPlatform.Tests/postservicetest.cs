using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.AuditLogs;
using BlogPlatform.Services;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[TestFixture]
public class PostServiceTests
{
    private Mock<IRepository<Guid, Post>> _postRepositoryMock;
    private Mock<IRepository<Guid, Comment>> _commentRepositoryMock;
    private Mock<IRepository<Guid, Image>> _imageRepositoryMock;
    private Mock<IRepository<string, User>> _userRepositoryMock;
    private Mock<IImageService> _imageServiceMock;
    private Mock<IPostAuditLogRepository> _auditLogRepositoryMock;
    private Mock<IUserValidationService> _userValidationServiceMock;

    private PostService _postService;

    [SetUp]
    public void SetUp()
    {
        _postRepositoryMock = new Mock<IRepository<Guid, Post>>();
        _commentRepositoryMock = new Mock<IRepository<Guid, Comment>>();
        _imageRepositoryMock = new Mock<IRepository<Guid, Image>>();
        _userRepositoryMock = new Mock<IRepository<string, User>>();
        _imageServiceMock = new Mock<IImageService>();
        _auditLogRepositoryMock = new Mock<IPostAuditLogRepository>();
        _userValidationServiceMock = new Mock<IUserValidationService>();

        _userValidationServiceMock
            .Setup(s => s.ValidateUserEmail(It.IsAny<string>()))
            .Returns(Task.CompletedTask);

        _auditLogRepositoryMock
            .Setup(r => r.AddAsync(It.IsAny<PostAuditLog>()))
            .Returns(Task.CompletedTask);

        _postService = new PostService(
            _postRepositoryMock.Object,
            _auditLogRepositoryMock.Object,
            _commentRepositoryMock.Object,
            _imageRepositoryMock.Object,
            _userRepositoryMock.Object,
            _imageServiceMock.Object,
            null, // DbContext is no longer needed
            _userValidationServiceMock.Object
        );
    }

    [Test]
    public async Task AddPost_ShouldAddPostAndAuditLog()
    {
        // Arrange
        var post = new Post
        {
            Id = Guid.NewGuid(),
            Title = "Test Post",
            Content = "Some content",
            UserEmail = "user@example.com",
            Slug = "test-post"
        };

        _postRepositoryMock.Setup(r => r.Add(It.IsAny<Post>())).ReturnsAsync((Post p) => p);
        _postRepositoryMock.Setup(r => r.Get(post.Id)).ReturnsAsync(post);

        // Act
        var result = await _postService.AddPost(post, "admin@example.com");

        // Assert
        Assert.That(result, Is.Not.Null);
        Assert.That(result.Title, Is.EqualTo("Test Post"));

        _auditLogRepositoryMock.Verify(x => x.AddAsync(It.Is<PostAuditLog>(a =>
            a.Action == "Created" &&
            a.PerformedBy == "admin@example.com" &&
            a.PostId == post.Id
        )), Times.Once);
    }

    [Test]
    public async Task DeletePost_ShouldMarkPostAsDeleted_AndLogAudit()
    {
        // Arrange
        var postId = Guid.NewGuid();
        var post = new Post { Id = postId, IsDeleted = false, UserEmail = "user@test.com", Title = "hello", Slug = "H", Content = "hello this is a post" };

        _postRepositoryMock.Setup(r => r.Get(postId)).ReturnsAsync(post);
        _postRepositoryMock.Setup(r => r.Update(postId, It.IsAny<Post>())).ReturnsAsync((Guid postId, Post post) => post);
        // Act
        var result = await _postService.DeletePost(postId, "admin@test.com");

        // Assert
        Assert.That(result.IsDeleted, Is.True);
        _postRepositoryMock.Verify(r => r.Update(postId, It.Is<Post>(p => p.IsDeleted)), Times.Once);
        _auditLogRepositoryMock.Verify(x => x.AddAsync(It.Is<PostAuditLog>(a =>
            a.Action == "Deleted" &&
            a.PerformedBy == "admin@test.com" &&
            a.PostId == postId
        )), Times.Once);
    }

    [Test]
    public async Task GetPostById_ShouldReturnPost()
    {
        // Arrange
        var postId = Guid.NewGuid();
        var post = new Post { Id = postId, Title = "Sample Title", UserEmail = "user@test.com", Slug = "h", Content = "hello this is a post" };

        _postRepositoryMock.Setup(r => r.Get(postId)).ReturnsAsync(post);

        // Act
        var result = await _postService.GetPostByID(postId);

        // Assert
        Assert.That(result, Is.Not.Null);
        Assert.That(result.Id, Is.EqualTo(postId));
        Assert.That(result.Title, Is.EqualTo("Sample Title"));
    }

    [Test]
    public async Task UpdatePost_ShouldReturnUpdatedValue()
    {
        // Arrange
        var postId = Guid.NewGuid();
        var originalPost = new Post { Id = postId, Content = "hello", UserEmail = "user@test.com", Title = "Post", Slug = "p" };

        _postRepositoryMock.Setup(r => r.Get(postId)).ReturnsAsync(originalPost);
        _postRepositoryMock.Setup(r => r.Update(postId, It.IsAny<Post>())).ReturnsAsync((Guid postId , Post post) => post);

        // Act
        var postToUpdate = await _postService.GetPostByID(postId);
        postToUpdate.Content = "changed";

        await _postRepositoryMock.Object.Update(postId, postToUpdate);
        _postRepositoryMock.Setup(r => r.Get(postId)).ReturnsAsync(postToUpdate);

        var updatedPost = await _postService.GetPostByID(postId);

        // Assert
        Assert.That(updatedPost.Content, Is.EqualTo("changed"));
    }
}
