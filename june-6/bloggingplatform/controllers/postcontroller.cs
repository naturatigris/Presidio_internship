using AutoMapper;
using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.DTOs;
using BlogPlatform.Services;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
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

    public PostController(IPostService postService, IMapper mapper, IImageService imageService)
    {
        _postService = postService;
        _mapper = mapper;
        _imageService = imageService;
    }
    [Authorize]
    [HttpPost]
    public async Task<IActionResult> CreatePost([FromForm] Postto dto, [FromQuery] string performedByEmail)
    {
        try
        {    var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
            var role = User.FindFirst(ClaimTypes.Role)?.Value;

            if (role != "Admin" && userEmail != performedByEmail)
                return Forbid();


            var post = _mapper.Map<Post>(dto);
            var created = await _postService.AddPost(post, dto.UserEmail);
            post.Images = await _imageService.SaveImagesAsync(dto.Images, created.Id, performedByEmail);

            return CreatedAtAction(nameof(GetPostById), new { version = "1.0", id = created.Id }, created);
        }
        catch (Exception ex)
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
    public async Task<IActionResult> UpdatePost(Guid id, [FromForm] PostUpdateDto dto, [FromQuery] string performedByEmail)
    {
        try
        {
                var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
                var role = User.FindFirst(ClaimTypes.Role)?.Value;

                if (role != "Admin" && userEmail != performedByEmail)
                    return Forbid();

            var updatedPost = _mapper.Map<Post>(dto);
            updatedPost.Id = id;

            var result = await _postService.UpdatePost(id, performedByEmail, updatedPost, dto.Images);
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
    public async Task<IActionResult> DeletePost(Guid id, [FromQuery] string performedByEmail)
    {
        try
        {
                var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
                var role = User.FindFirst(ClaimTypes.Role)?.Value;

                if (role != "Admin" && userEmail != performedByEmail)
                    return Forbid();

            var result = await _postService.DeletePost(id, performedByEmail);
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
            var posts = await _postService.GetFilteredPosts(
                query.UserEmail, query.Status, query.SearchTerm,
                query.SortOrder, query.PageNumber, query.PageSize);

            if (!posts.Any())
                return NotFound("No posts found.");

            return Ok(posts);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    }
}
