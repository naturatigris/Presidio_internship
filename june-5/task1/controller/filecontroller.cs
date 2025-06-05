using FileUploadAPI.Interfaces;
using FileUploadAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace FileUploadAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FileController : ControllerBase
    {
        private readonly IFileService _fileService;

        public FileController(IFileService fileService)
        {
            _fileService = fileService;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> Upload(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("No file selected");

            var result = await _fileService.UploadAsync(file);
            return Ok(new { result.Id, result.FileName });
        }

        [HttpGet("download/{id}")]
        public async Task<IActionResult> Download(int id)
        {
            var file = await _fileService.DownloadAsync(id);
            if (file == null) return NotFound();

            return File(file.Data, file.ContentType, file.FileName);
        }
    }
}
