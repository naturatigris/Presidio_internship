using NUnit.Framework;
using Moq;
using AutoMapper;
using BlogPlatform.Controllers;
using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace BlogPlatform.Tests
{
    [TestFixture]
    public class CommentControllerTests
    {
        private Mock<ICommentService> _mockCommentService;
        private Mock<IMapper> _mockMapper;
        private CommentController _controller;

        [SetUp]
        public void Setup()
        {
            _mockCommentService = new Mock<ICommentService>();
            _mockMapper = new Mock<IMapper>();
            _controller = new CommentController(_mockCommentService.Object, _mockMapper.Object);

            var user = new ClaimsPrincipal(new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.Email, "test@example.com"),
                new Claim(ClaimTypes.Role, "Admin")
            }, "mock"));

            _controller.ControllerContext = new ControllerContext()
            {
                HttpContext = new DefaultHttpContext() { User = user }
            };
        }

        [Test]
        public async Task AddComment_ReturnsCreatedResult()
        {
            var dto = new CommentDto();
            var comment = new Comment();
            var createdComment = new Comment { Id = Guid.NewGuid() };

            _mockMapper.Setup(m => m.Map<Comment>(dto)).Returns(comment);
            _mockCommentService.Setup(s => s.AddComment(comment, "test@example.com")).ReturnsAsync(createdComment);

            var result = await _controller.AddComment(dto, "test@example.com") as CreatedAtActionResult;

            Assert.That(result, Is.Not.Null);
            Assert.That(result.StatusCode, Is.EqualTo(201));
            Assert.That(((Comment)result.Value).Id, Is.EqualTo(createdComment.Id));
        }

        [Test]
        public async Task GetCommentById_ReturnsComment()
        {
            var commentId = Guid.NewGuid();
            var comment = new Comment { Id = commentId};

            _mockCommentService.Setup(s => s.GetCommentById(commentId)).ReturnsAsync(comment);

            var result = await _controller.GetCommentById(commentId);

    Assert.That(result.Result, Is.TypeOf<OkObjectResult>());
    
    var okResult = result.Result as OkObjectResult;
    Assert.That(okResult?.Value, Is.TypeOf<Comment>());

    var commentval = okResult?.Value as Comment;
            Assert.That(commentval?.Id, Is.EqualTo(commentId));
        }

        [Test]
        public async Task UpdateComment_ReturnsOkResult()
        {
            var commentId = Guid.NewGuid();
            var dto = new UpdateCommentDto();
            var updatedComment = new Comment { Id = commentId };

            _mockMapper.Setup(m => m.Map<Comment>(dto)).Returns(updatedComment);
            _mockCommentService.Setup(s => s.UpdateComment(commentId, updatedComment, "test@example.com")).ReturnsAsync(updatedComment);

            var result = await _controller.UpdateComment(commentId, dto, "test@example.com") as OkObjectResult;

            Assert.That(result, Is.Not.Null);
            Assert.That(((Comment)result.Value).Id, Is.EqualTo(commentId));
        }

        [Test]
        public async Task DeleteComment_ReturnsOkResult()
        {
            var commentId = Guid.NewGuid();
            var deletedComment = new Comment { Id = commentId };

            _mockCommentService.Setup(s => s.DeleteComment(commentId, "test@example.com")).ReturnsAsync(deletedComment);

            var result = await _controller.DeleteComment(commentId, "test@example.com") as OkObjectResult;

            Assert.That(result, Is.Not.Null);
            Assert.That(((Comment)result.Value).Id, Is.EqualTo(commentId));
        }

        [Test]
        public async Task GetFilteredComments_ReturnsFilteredList()
        {
            var query = new CommentQueryParamsDto();
            var comments = new List<Comment> { new Comment { Id = Guid.NewGuid() } };

            _mockCommentService.Setup(s => s.GetFilteredComments(query.PostId, query.UserEmail, query.Status, query.SortOrder, query.PageNumber, query.PageSize)).ReturnsAsync(comments);

            var result = await _controller.GetFilteredComments(query) as OkObjectResult;

            Assert.That(result, Is.Not.Null);
            Assert.That(((List<Comment>)result.Value).Count, Is.EqualTo(1));
        }
    }
}
