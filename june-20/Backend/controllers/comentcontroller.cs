using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using System.Security.Claims;
using BlogPlatform.Hubs;
using Microsoft.AspNetCore.SignalR;


namespace BlogPlatform.Controllers
{
    [ApiController]
    [Route("api/v{version:apiVersion}/comments")]
    [ApiVersion("1.0")]
    public class CommentController : ControllerBase
    {
        private readonly ICommentService _commentService;
        private readonly IMapper _mapper;
        private readonly IHubContext<PostHub> _hubContext;

        public CommentController(ICommentService commentService, IMapper mapper, IHubContext<PostHub> hubContext)
        {
            _commentService = commentService;
            _mapper = mapper;
            _hubContext = hubContext;
        }

        
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddComment([FromBody] CommentDto dto)
        {
            try
            {
                var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
                var role = User.FindFirst(ClaimTypes.Role)?.Value;
                if (role != "Admin" && userEmail != dto.UserEmail)
                    return Forbid();



                var comment = _mapper.Map<Comment>(dto);
                await _hubContext.Clients.All.SendAsync("ReceiveComment", comment);

                var created = await _commentService.AddComment(comment, userEmail);
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
        public async Task<IActionResult> UpdateComment(Guid id, [FromBody] UpdateCommentDto dto)
        {
            try
            {
                var existing = await _commentService.GetCommentById(id);
                if (existing == null||existing.IsDeleted) {
                    return NotFound("no such comment");
                }

                 var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
                var role = User.FindFirst(ClaimTypes.Role)?.Value;
                if (role != "Admin" && userEmail != existing.UserEmail)
                    return Forbid();

                var comment = _mapper.Map<Comment>(dto);
                var updated = await _commentService.UpdateComment(id, comment, userEmail);
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
                var (comments, totalCount) = await _commentService.GetFilteredComments(query.PostId, query.UserEmail, query.Status, query.SortOrder, query.PageNumber??1, query.PageSize??10);
                if (comments.Count() == 0)
                {
                    return NotFound("no comments in the gven category");
                }
                return Ok(new
                {
                    items = comments,
                    totalCount = totalCount
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error fetching comments: {ex.Message}");
            }
        }
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComment(Guid id)
        {
            try
            {
                var existing = await _commentService.GetCommentById(id);
                if (existing == null||existing.IsDeleted) {
                    return NotFound("no such comment");
                }

                var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
                var role = User.FindFirst(ClaimTypes.Role)?.Value;

                if (role != "Admin" && userEmail != existing.UserEmail)
                    return Forbid();

                var deleted = await _commentService.DeleteComment(id, userEmail);
                return Ok(deleted);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error deleting comment: {ex.Message}");
            }
        }

    }
}
