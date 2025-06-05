using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Organization.Interfaces;
using Organization.Models.DTOs;
using Organization.Models;
using Organization.Hubs;
using Microsoft.AspNetCore.SignalR;


namespace Organization.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FileController : ControllerBase
    {
        private readonly IFileService _fileService;
        private readonly IGenericEmployeeRepository<Employee> _employeeRepository;
        private readonly IHubContext<NotificationHub> _hubContext;


        public FileController(IFileService fileService, IGenericEmployeeRepository<Employee> employeeRepository,
        IHubContext<NotificationHub> hubContext)
        {
            _fileService = fileService;
            _employeeRepository = employeeRepository;
            _hubContext = hubContext;
        }

[HttpPost("upload")]
[Authorize(Roles = "Admin")]
public async Task<IActionResult> Upload([FromForm] FileUploadForm form)
{
    if (form.File == null || form.File.Length == 0)
        return BadRequest("File is missing.");

    var employee = await _employeeRepository.GetByEmailAsync(form.Email);
    if (employee == null)
        return BadRequest("No such employee.");

    using var ms = new MemoryStream();
    await form.File.CopyToAsync(ms);
    var dto = new FileUploadDto
    {
        FileName = form.File.FileName,
        ContentType = form.File.ContentType,
        Data = ms.ToArray(),
        Email = form.Email
    };

    var result = await _fileService.UploadAsync(dto);
            Console.WriteLine(result.Email, result.Id, result.FileName);
    await _hubContext.Clients.All.SendAsync("ReceiveFileUploadNotification", new
            {
                Id = result.Id,
                FileName = result.FileName,
                Email = result.Email,
                DownloadUrl = $"http://localhost:5209/api/file/download/{result.Id}"

            });

    return Ok(new { result.Id, result.FileName, result.Email });
}
        [HttpGet("download/{id:guid}")]
        public async Task<IActionResult> Download(Guid id)
        {
            var file = await _fileService.DownloadAsync(id);
            if (file == null) return NotFound();

            return File(file.Data, file.ContentType, file.FileName);
        }
    }
}
