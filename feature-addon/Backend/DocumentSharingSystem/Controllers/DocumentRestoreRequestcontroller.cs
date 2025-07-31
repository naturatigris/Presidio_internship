using System.Security.Claims;
using AutoMapper;
using DocumentSharingSystem.Misc;
using DocumentSharingSystem.Models;
using DocumentSharingSystem.Models.Dtos;
using DocumentSharingSystem.Models.DTOs;
using DocumentSharingSystem.Models.DTOs.CustomResponseDTOs;
using DocumentSharingSystem.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace DocumentSharingSystem.Controllers
{
    [Route("api/v1/Documentrestore")]
    [ApiController]
    [Authorize]
    public class DocumentRestoreController : ControllerBase
    {
        private readonly DocumentRestoreService _service;
                private readonly IMapper _mapper;
                private readonly IHubContext<NotificationHub> _notificationHub;



        public DocumentRestoreController(DocumentRestoreService service, IMapper mapper, IHubContext<NotificationHub> notificationHub)
        {
            _service = service;
            _mapper = mapper;
            _notificationHub = notificationHub;
            
        }

        [HttpPost("request")]
        public async Task<IActionResult> RequestRestore([FromBody] RestoreRequestDto dto)
        {
            await _service.RequestRestoreAsync(dto.DocumentId, dto.UserId, dto.Reason);
            return Ok(new { message = "Restore request submitted" });
        }

        [HttpGet("getall")]
        public async Task<IActionResult> GetAllRequests()
        {
            var requests = await _service.GetAllRequest();
            return Ok(requests);
        }

        [HttpPost("approve/{id}")]
        public async Task<IActionResult> Approve(Guid id, [FromQuery] Guid adminId)
        {
            await _service.ApproveRequestAsync(id, adminId);
            return Ok(new { message = "Request approved and document restored" });
        }

        [HttpPost("reject/{id}")]
        public async Task<IActionResult> Reject(Guid id, [FromQuery] Guid adminId)
        {
            await _service.RejectRequestAsync(id, adminId);
            return Ok(new { message = "Request rejected" });
        }
        [HttpGet("bydocument/{documentId}")]
        public async Task<IActionResult> GetByDocumentId(Guid documentId)
        {
            var request = await _service.GetDocumentById(documentId);
            if (request == null)
            {
                return NotFound(new { message = "Restore request not found for the given document ID." });
            }
            var final = _mapper.Map<DocumentRestoreRequest, DocumentRestoreRequestDto>(request);

            return Ok(final);
        }
        [HttpGet("byuser/{userid}")]
        public async Task<IActionResult> GetDocumentbyUserId(Guid userid)
        {
            var requests = await _service.GetDocumentRequestbyUser(userid);
            var final = _mapper.Map<List<DocumentRestoreRequestDto>>(requests);
            return Ok(final);

        }
        [HttpPut("UserRead/{DocumentId}")]
        public async Task<IActionResult> MarkUserRead(Guid DocumentId)
        {
             await _service.MarkAsReadUser(DocumentId);
            return Ok(new { message = "User Marked As Read" });

        }
        [HttpPut("AdminRead/{DocumentId}")]
        public async Task<IActionResult> MarkUserAdmin(Guid DocumentId)
        {
             await _service.MarkAsReadUser(DocumentId);
            return Ok(new { message = "User Marked As Read" });

        }

        [HttpGet("filtered")]
        public async Task<ActionResult<PaginationDataDTO<DocumentRestoreRequest>>> GetFilteredRequests(
            [FromQuery] string? type,    
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 6)
        {
            var result = await _service.GetFilteredRequestsAsync(type, page, pageSize);
            
            return Ok(result);
        }
    
}
}
