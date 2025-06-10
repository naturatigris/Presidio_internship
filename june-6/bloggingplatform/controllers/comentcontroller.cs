using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using System.Security.Claims;


namespace BlogPlatform.Controllers
{
    [ApiController]
    [Route("api/v{version:apiVersion}/comments")]
    [ApiVersion("1.0")]
    public class CommentController : ControllerBase
    {
        private readonly ICommentService _commentService;
        private readonly IMapper _mapper;

        public CommentController(ICommentService commentService, IMapper mapper)
        {
            _commentService = commentService;
            _mapper = mapper;
        }
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddComment([FromBody] CommentDto dto, string performedBy)
        {
            try
            {
                var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
                var role = User.FindFirst(ClaimTypes.Role)?.Value;
                if (role != "Admin" && userEmail != performedBy)
                    return Forbid();


                var comment = _mapper.Map<Comment>(dto);
                var created = await _commentService.AddComment(comment, performedBy);
                return CreatedAtAction(nameof(AddComment), new { id = created.Id }, created);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error adding comment: {ex.Message}");
            }
        }
        [HttpGet("{id}")]
            public async Task<ActionResult<Comment>> GetCommentById(Guid id)
            {
                try
                {
                    var comment = await _commentService.GetCommentById(id);
                    return Ok(comment);
                }
                catch (Exception ex)
                {
                    return NotFound(ex.Message);
                }
            }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateComment(Guid id, [FromBody] UpdateCommentDto dto,string performedByEmail)
        {
            try
            {
                 var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
                var role = User.FindFirst(ClaimTypes.Role)?.Value;
                if (role != "Admin" && userEmail != performedByEmail)
                    return Forbid();

                var comment = _mapper.Map<Comment>(dto);
                var updated = await _commentService.UpdateComment(id, comment, performedByEmail);
                return Ok(updated);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error updating comment: {ex.Message}");
            }
        }

        [HttpGet("filter")]
        public async Task<IActionResult> GetFilteredComments([FromQuery] CommentQueryParamsDto query)
        {
            try
            {
                var comments = await _commentService.GetFilteredComments(query.PostId,query.UserEmail, query.Status, query.SortOrder, query.PageNumber, query.PageSize);
                if (comments.Count()== 0)
                {
                    return NotFound("no comments in the gven category");
                }
                return Ok(comments);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error fetching comments: {ex.Message}");
            }
        }
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComment(Guid id,string performedByEmail)
        {
            try
            {
                var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
                var role = User.FindFirst(ClaimTypes.Role)?.Value;

                if (role != "Admin" && userEmail != performedByEmail)
                    return Forbid();

                var deleted = await _commentService.DeleteComment(id, performedByEmail);
                return Ok(deleted);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error deleting comment: {ex.Message}");
            }
        }

    }
}
