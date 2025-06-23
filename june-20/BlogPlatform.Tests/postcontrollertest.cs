using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using BlogPlatform.Controllers.v1;
using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.DTOs;
using BlogPlatform.Hubs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using Microsoft.AspNetCore.SignalR;

namespace BlogPlatform.Tests.Controllers
{
    [TestFixture]
    public class PostControllerTests
    {
        private Mock<IPostService> _mockPostService;
        private Mock<IImageService> _mockImageService;
        private Mock<IMapper> _mockMapper;
        private PostController _controller;
        private Mock<IHubContext<PostHub>> _mockHubContext;


        [SetUp]
        public void Setup()
        {
            _mockPostService = new Mock<IPostService>();
            _mockImageService = new Mock<IImageService>();
            _mockMapper = new Mock<IMapper>();
            _mockHubContext = new Mock<IHubContext<PostHub>>();


            _controller = new PostController(_mockPostService.Object, _mockMapper.Object, _mockImageService.Object,    _mockHubContext.Object
);
        }

        [Test]
        public async Task GetPostById_ReturnsOk_WhenPostExists()
        {
            var postId = Guid.NewGuid();
            var post = new Post { Id = postId };

            _mockPostService.Setup(s => s.GetPostByID(postId)).ReturnsAsync(post);

            var result = await _controller.GetPostById(postId);

            Assert.That(result, Is.TypeOf<OkObjectResult>());
            var okResult = result as OkObjectResult;
            Assert.That(okResult.Value, Is.EqualTo(post));
        }

        [Test]
        public async Task GetPostById_ReturnsNotFound_WhenPostIsNull()
        {
            var postId = Guid.NewGuid();
            _mockPostService.Setup(s => s.GetPostByID(postId)).ReturnsAsync((Post)null);

            var result = await _controller.GetPostById(postId);

            Assert.That(result, Is.TypeOf<NotFoundObjectResult>());
        }

        [Test]
        public async Task DeletePost_ReturnsOk_WhenDeletedSuccessfully()
        {
            var postId = Guid.NewGuid();
            var email = "user@example.com";
            Post p = new Post{ Id=postId,UserEmail=email};

            SetupUserWithClaims(email, "Admin");
            _mockPostService.Setup(s => s.GetPostByID(postId)).ReturnsAsync(p); // If needed

            _mockPostService.Setup(s => s.DeletePost(postId,email)).ReturnsAsync(p);

            var result = await _controller.DeletePost(postId);

            Assert.That(result, Is.TypeOf<OkObjectResult>());
        }

        [Test]
        public async Task UpdatePost_ReturnsOk_WhenUpdatedSuccessfully()
        {
            var postId = Guid.NewGuid();
            var dto = new PostUpdateDto();
            var updatedPost = new Post { Id = postId };
            var email = "admin@example.com";

            SetupUserWithClaims(email, "Admin");
    _mockPostService.Setup(s => s.GetPostByID(postId)).ReturnsAsync(updatedPost); // If needed

    _mockMapper.Setup(m => m.Map<Post>(dto)).Returns(updatedPost);
    _mockPostService.Setup(s => s.UpdatePost(postId, email, updatedPost, dto.Images)).ReturnsAsync(updatedPost);

            var result = await _controller.UpdatePost(postId, dto);

            Assert.That(result, Is.TypeOf<OkObjectResult>());
            var okResult = result as OkObjectResult;
            Assert.That(okResult.Value, Is.EqualTo(updatedPost));
        }

        private void SetupUserWithClaims(string email, string role)
        {
            var user = new ClaimsPrincipal(new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Email, email),
                new Claim(ClaimTypes.Role, role)
            }, "mock"));

            _controller.ControllerContext = new ControllerContext
            {
                HttpContext = new DefaultHttpContext { User = user }
            };
        }
    }
}
