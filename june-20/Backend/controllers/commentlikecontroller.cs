using BlogPlatform.Models;
using BlogPlatform.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BlogPlatform.Controllers
{
    [ApiController]
[Route("api/v{version:apiVersion}/commentlike")]
    public class CommentLikeController : ControllerBase
    {
        private readonly CommentLikeService _commentLikeService;

        public CommentLikeController(CommentLikeService commentLikeService)
        {
            _commentLikeService = commentLikeService;
        }

        [Authorize]
        [HttpPost("like")]
        public async Task<IActionResult> LikeComment([FromQuery] Guid commentId, [FromQuery] string userEmail)
        {
            var result = await _commentLikeService.LikeComment(commentId, userEmail);
            if (!result) return BadRequest("User already liked this comment.");
            return Ok("Comment liked successfully.");
        }
        [Authorize]

        [HttpPost("unlike")]
        public async Task<IActionResult> UnlikeComment([FromQuery] Guid commentId, [FromQuery] string userEmail)
        {
            var result = await _commentLikeService.UnlikeComment(commentId, userEmail);
            if (!result) return NotFound("Like not found.");
            return Ok("Comment unliked successfully.");
        }
        [HttpGet("count")]
        public async Task<IActionResult> GetLikeCount([FromQuery] Guid commentId)
        {
            var count = await _commentLikeService.GetLikeCountForComment(commentId);
            return Ok(count);
        }
        [HttpGet("by-comment")]
        public async Task<IActionResult> GetAllLikesForComment([FromQuery] Guid commentId)
        {
            var likes = await _commentLikeService.GetAllLikesForComment(commentId);
            return Ok(likes);
        }
        [HttpGet("by-user")]
        public async Task<IActionResult> GetAllLikesByUser([FromQuery] string userEmail)
        {
            var likes = await _commentLikeService.GetAllLikesByUser(userEmail);
            return Ok(likes);
        }
    }
}
