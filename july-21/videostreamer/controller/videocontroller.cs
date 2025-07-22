using Microsoft.AspNetCore.Mvc;
using TrainingVideoPortal.Models;
using TrainingVideoPortal.Models.Dtos;
using TrainingVideoPortal.Services;

namespace TrainingVideoPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideosController : ControllerBase
    {
        private readonly IVideoService _videoService;

        public VideosController(IVideoService videoService)
        {
            _videoService = videoService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrainingVideo>>> GetAllVideos()
        {
            var videos = await _videoService.GetAllAsync();
            return Ok(videos);
        }
         [HttpGet("{id}/stream")]
        public async Task<IActionResult> StreamVideo(Guid id)
        {
            var (stream, contentType) = await _videoService.GetVideoStreamAsync(id);
            if (stream == null) return NotFound("Video or blob not found.");

            return File(stream, contentType!, enableRangeProcessing: true);
        }

        [HttpPost("upload")]
public async Task<IActionResult> Upload([FromForm] VideoUploadDto dto)
{
    if (dto.File == null || dto.File.Length == 0)
        return BadRequest("File is required.");

    await _videoService.UploadAsync(dto.File, dto.Title, dto.Description);
    return Ok(new { message = "Video uploaded successfully." });
}

    }
}
