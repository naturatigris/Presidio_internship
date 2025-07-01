using BlogPlatform.Models;
using BlogPlatform.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


namespace BlogPlatform.Controllers
{
    [ApiController]
[Route("api/v{version:apiVersion}/postlike")]
    public class PostLikeController : ControllerBase
    {
        private readonly PostLikeService _postLikeService;

        public PostLikeController(PostLikeService postLikeService)
        {
            _postLikeService = postLikeService;
        }
        [Authorize]
        [HttpPost("like")]
        public async Task<IActionResult> LikePost([FromQuery] Guid postId, [FromQuery] string userEmail)
        {
            var result = await _postLikeService.LikePost(postId, userEmail);
            if (!result) return BadRequest("User already liked this post.");
            return Ok("Post liked successfully.");
        }
        [Authorize]
        [HttpPost("unlike")]
        public async Task<IActionResult> UnlikePost([FromQuery] Guid postId, [FromQuery] string userEmail)
        {
            var result = await _postLikeService.UnlikePost(postId, userEmail);
            if (!result) return NotFound("Like not found.");
            return Ok("Post unliked successfully.");
        }
        [HttpGet("count")]
        public async Task<IActionResult> GetLikeCount([FromQuery] Guid postId)
        {
            var count = await _postLikeService.GetLikeCountForPost(postId);
            return Ok(count);
        }
        [HttpGet("by-post")]
        public async Task<IActionResult> GetAllLikesForPost([FromQuery] Guid postId)
        {
            var likes = await _postLikeService.GetAllLikesForPost(postId);
            return Ok(likes);
        }

        [HttpGet("by-user")]
        public async Task<IActionResult> GetAllLikesByUser([FromQuery] string userEmail)
        {
            var likes = await _postLikeService.GetAllLikesByUser(userEmail);
            return Ok(likes);
        }
    }
}
