using System;
using System.Threading.Tasks;
using System.Xml.Serialization;
using AutoMapper;
using DocumentSharingSystem.Contexts;
using DocumentSharingSystem.Interfaces;
using DocumentSharingSystem.Misc;
using DocumentSharingSystem.Models;
using DocumentSharingSystem.Models.Dtos;
using DocumentSharingSystem.Models.DTOs;
using DocumentSharingSystem.Repositories;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace DocumentSharingSystem.Services;

public class DocumentRestoreService
{
    private readonly IRepo<Guid, DocumentRestoreRequest> _repository;
    private readonly IRepo<Guid, Document> _documentRepository;
    private readonly DocumentSharingSystemContext _context;
    private readonly IMapper _mapper;
    private readonly IHubContext<NotificationHub> _notificationHub;
    private readonly UserService _userService;



    public DocumentRestoreService(IRepo<Guid, DocumentRestoreRequest> repository, IRepo<Guid, Document> documentRepository, DocumentSharingSystemContext context, IMapper mapper, IHubContext<NotificationHub> notificationHub, UserService userService)
    {
        _repository = repository;
        _documentRepository = documentRepository;
        _context = context;
        _mapper = mapper;
        _notificationHub = notificationHub;
        _userService = userService;
    }

    public async Task RequestRestoreAsync(Guid documentId, Guid userId, string reason)
    {
        var user = await _userService.GetUser(userId);

        var request = new DocumentRestoreRequest
        {
            Id = Guid.NewGuid(),
            DocumentId = documentId,
            RequestedByUserId = userId,
            Reason = reason
        };
        await _repository.Add(request);
        await _notificationHub.Clients.All.SendAsync("RecieveMessage", user.Name, $"Uploaded Document : ({documentId})");
        await _notificationHub.Clients.All.SendAsync("ReceiveAdminMessage","New Requests added please check it out");


    }

    public async Task<List<DocumentRestoreRequest>> GetAllRequest()
    {
        var requests = await _repository.GetAll();
        return requests.ToList();
    }
    public async Task<ICollection<DocumentRestoreRequest>> GetDocumentRequestbyUser(Guid UserId)
    {
        return await _context.DocumentRestoreRequests
                 .Include(r => r.Document)
                 .Include(r => r.RequestedByUser)
                 .Include(r => r.ReviewedByUser)
                 .Where(r => r.RequestedByUserId == UserId).ToListAsync();
    }
    public async Task<DocumentRestoreRequest?> GetDocumentById(Guid Id)
    {
        return await _context.DocumentRestoreRequests
                .Include(r => r.Document)
                .Include(r => r.RequestedByUser)
                .Include(r => r.ReviewedByUser)
                .OrderByDescending(r => r.RequestedAt) 
                .FirstOrDefaultAsync(r => r.DocumentId == Id);
    }

    public async Task ApproveRequestAsync(Guid requestId, Guid adminId)
    {

        var request = await _repository.Get(requestId);

        if (request == null) throw new Exception("Request not found");
        var user = await _userService.GetUser(request.RequestedByUserId);


        request.Status = "Approved";
        request.ReviewedAt = DateTime.UtcNow;
        request.ReviewedByUserId = adminId;

        var document = await _documentRepository.Get(request.DocumentId);
        document.Visibility = "Private";
        document.IsAcessRequested = false;

        await _repository.Update(requestId, request);
        await _documentRepository.Update(request.DocumentId, document);
        await _notificationHub.Clients.All.SendAsync("RecieveMessage", user.Name, $"Your Document Access request was Approved by Admin : ({request.Document.OriginalFileName})");

    }
    public async Task MarkAsReadUser(Guid requestId)
    {
        var request = await _repository.Get(requestId);
        if (request == null) throw new Exception("Request not found");


        request.IsUserRead = true;
        await _repository.Update(requestId, request);

    }
    public async Task MarkAsReadAdmin(Guid requestId)
        {
            var request = await _repository.Get(requestId);
            if (request == null) throw new Exception("Request not found");

            request.IsAdminRead = true;
            await _repository.Update(requestId, request);
        }
    public async Task RejectRequestAsync(Guid requestId, Guid adminId)
    {
        var request = await _repository.Get(requestId);
        if (request == null) throw new Exception("Request not found");
        var user = await _userService.GetUser(request.RequestedByUserId);


        request.Status = "Rejected";
        request.ReviewedAt = DateTime.UtcNow;
        request.ReviewedByUserId = adminId;
        var document = await _documentRepository.Get(request.DocumentId);
        document.IsAcessRequested = false;

        await _repository.Update(requestId, request);
        await _documentRepository.Update(request.DocumentId, document);
       await _notificationHub.Clients.All.SendAsync("RecieveMessage", user.Name, $"Your Document Access request was Rejected by Admin : ({request.Document.OriginalFileName})");


    }

    public async Task<PaginationDataDTO<DocumentRestoreRequestDto>> GetFilteredRequestsAsync(
     string? type, 
     int page = 1,
     int pageSize = 6)
    {
        var allRequests = await _repository.GetAll();

        List<DocumentRestoreRequest> filtered;

        if (type?.ToLower() == "pending")
        {
            filtered = allRequests
                .Where(r => r.Status.Equals("Pending", StringComparison.OrdinalIgnoreCase))
                .ToList();
        }
        else if (type?.ToLower() == "closed")
        {
            filtered = allRequests
                .Where(r =>
                    r.Status.Equals("Approved", StringComparison.OrdinalIgnoreCase) ||
                    r.Status.Equals("Rejected", StringComparison.OrdinalIgnoreCase))
                .ToList();
        }
        else
        {
            filtered = allRequests.ToList(); 
        }

        int totalRecords = filtered.Count;
        var final = _mapper.Map<List<DocumentRestoreRequestDto>>(filtered);


        var paginated = final
            .OrderByDescending(r => r.RequestedAt)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToList();
        

        return new PaginationDataDTO<DocumentRestoreRequestDto>
        {
            Data = paginated,
            TotalRecords = totalRecords
        };
    }
}
