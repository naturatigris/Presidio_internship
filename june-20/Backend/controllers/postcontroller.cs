using AutoMapper;
using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using BlogPlatform.Hubs;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.Authorization;

namespace BlogPlatform.Controllers.v1
{
[ApiController]
[Route("api/v{version:apiVersion}/posts")]
[ApiVersion("1.0")]
public class PostController : ControllerBase
{
    private readonly IPostService _postService;
    private readonly IMapper _mapper;
    private readonly IImageService _imageService;
        private readonly IHubContext<PostHub> _hubContext;
        private readonly ICategoryService _categoryservice;


        public PostController(IPostService postService, IMapper mapper, IImageService imageService, IHubContext<PostHub> hubContext, ICategoryService categoryservice
)
        {
            _postService = postService;
            _mapper = mapper;
            _imageService = imageService;
            _hubContext = hubContext;
            _categoryservice = categoryservice;
        }
    [Authorize]
    [HttpPost]
    public async Task<IActionResult> CreatePost([FromForm] Postto dto)
    {
        try
        {    var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
            var role = User.FindFirst(ClaimTypes.Role)?.Value;

            if (role != "Admin" && userEmail != dto.UserEmail)
                return Forbid();

            var post = _mapper.Map<Post>(dto);
            var normalizedNames = dto.CategoryNames
                    .Where(name => !string.IsNullOrWhiteSpace(name))
                    .Select(name => name.Trim().ToLower())
                    .Distinct()
                    .ToList();
            var categoryEntities = new List<Category>();

                foreach (var name in normalizedNames)
                {
                    var category = await _categoryservice.GetCategoryByName(name);

                    if (category == null)
                    {
                        category = new Category { Name = name };
                        _categoryservice.AddCategory(category);
                    }

                    categoryEntities.Add(category);
                }
                post.Categories = categoryEntities;


            var created = await _postService.AddPost(post, dto.UserEmail);
            post.Images = await _imageService.SaveImagesAsync(dto.Images, created.Id, userEmail);
            await _hubContext.Clients.All.SendAsync("ReceivePost", post);



            return CreatedAtAction(nameof(GetPostById), new { version = "1.0", id = created.Id }, created);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAllpost()
        {try
            {
                var result = await _postService.GetAll();
                return Ok(result);
            }        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }

    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetPostById(Guid id)
    {
        try
        {
            var post = await _postService.GetPostByID(id);
            if (post == null || post.IsDeleted)
                return NotFound("Post not found");

            return Ok(post);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }
    [Authorize]
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatePost(Guid id, [FromForm] PostUpdateDto dto)
    {
        try
        {
                var post = await _postService.GetPostByID(id);
                if (post == null || post.IsDeleted)
                    return NotFound("Post not found");


                var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
                var role = User.FindFirst(ClaimTypes.Role)?.Value;

                if (role != "Admin" && userEmail != post.UserEmail)
                    return Forbid();

            var updatedPost = _mapper.Map<Post>(dto);

            updatedPost.Id = id;
            await _hubContext.Clients.All.SendAsync("EditedPost", updatedPost);

            var result = await _postService.UpdatePost(id, userEmail, updatedPost, dto.Images,dto.deleteImages);
            if (result == null)
                return NotFound($"Post with ID {id} not found");

            return Ok(result);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }
    [Authorize]
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePost(Guid id)
    {
        try
        {
            var post = await _postService.GetPostByID(id);
            if (post == null || post.IsDeleted)
                return NotFound("Post already deleted");

                var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
                var role = User.FindFirst(ClaimTypes.Role)?.Value;

                if (role != "Admin" && userEmail != post.UserEmail)
                    return Forbid();

            var result = await _postService.DeletePost(id, post.UserEmail);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpGet("{id}/comments")]
    public async Task<IActionResult> GetCommentsByPost(Guid id)
    {
        try
        {
            var postExists = await _postService.GetPostByID(id);
            if (postExists == null|| postExists.IsDeleted)
                return NotFound("No such post in the database");

            var comments = await _postService.GetCommentSByPost(id);
            if (!comments.Any())
                return NotFound("No comments in the database");

            return Ok(comments);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpGet("{id}/images")]
    public async Task<IActionResult> GetImagesByPost(Guid id)
    {
        try
        {
            var postExists = await _postService.GetPostByID(id);
            if (postExists == null||postExists.IsDeleted)
                return NotFound("No such post in the database");

            var images = await _postService.GetImagesByPostId(id);
            return Ok(images);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpGet("filter")]
    public async Task<IActionResult> GetFilteredPosts([FromQuery] PostQueryParamsDto query)
    {
        try
        {
            var result = await _postService.GetFilteredPosts(
                query.UserEmail, query.Status, query.SearchTerm,
                query.SortOrder, query.PageNumber, query.PageSize,query.Categories,query.viewOrder);

        if (!result.Items.Any())
            return NotFound("No posts found.");

        var totalPages = (int)Math.Ceiling(result.TotalItems / (double)query.PageSize);

        return Ok(new
        {
            items = result.Items,
            totalItems = result.TotalItems,
            totalPages = totalPages,
            currentPage = query.PageNumber,
            pageSize = query.PageSize
        });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    }
}
