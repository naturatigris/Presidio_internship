using System;
using System.Threading.Tasks;
using DocumentSharingSystem.Interfaces;
using DocumentSharingSystem.Misc;
using DocumentSharingSystem.Models;
using DocumentSharingSystem.Models.DTOs;

namespace DocumentSharingSystem.Services;

public class DocumentService
{
    private readonly IRepo<Guid, Document> _docRepo;
    private readonly PaginationContextFns _paginationContextFns;
    public DocumentService(IRepo<Guid, Document> docRepo, PaginationContextFns paginationContextFns)
    {
        _docRepo = docRepo;
        _paginationContextFns = paginationContextFns;
    }
    public async Task<Document> AddDocument(Document dto)
    {
        dto = await _docRepo.Add(dto);
        return dto;
    }
    public async Task<ICollection<Document>> GetAll()
    {
        var docs = await _docRepo.GetAll();
        docs = docs.Where(d => !d.IsDeleted).ToList();
        if (docs == null) throw new Exception("No document found");
        return docs;
    }
    public async Task<Document> GetDocument(Guid id)
    {
        var doc = await _docRepo.Get(id);
        if (doc == null) throw new Exception("No document found");
        return doc;
    }
    public async Task<Document> UpdateDocumentDetails(Guid id, DocumentUploadDTO dto, Guid updatedByUserId)
    {
        var doc = await _docRepo.Get(id);
        doc.Visibility = dto.Visibility;
        doc.TeamId = dto.TeamID;
        doc.Description = dto.Description;
        doc.LastUpdatedByUserId = updatedByUserId;
        doc.LastUpdatedAt = DateTime.UtcNow;
        doc.IsAcessRequested = dto.IsAccessRequested ?? doc.IsAcessRequested;
        doc = await _docRepo.Update(id, doc);
        if (doc == null) throw new Exception("No document found");
        return doc;
    }
    public async Task<ICollection<Document>> GetAll_Admin()
    {
        var docs = await _docRepo.GetAll();
        // docs = docs.Where(d => !d.IsDeleted).ToList();
        if (docs == null) throw new Exception("No document found");
        return docs;
    }
    public async Task<Document> GetDocument_Admin(Guid id)
    {
        var docs = await _docRepo.GetAll();
        var doc = docs.FirstOrDefault(d => d.Id == id);
        if (doc == null) throw new Exception("No document found");
        return doc;
    }
    public async Task<Document> DeleteDocument(Guid id, Guid userId)
    {
        var doc = await _docRepo.Delete(id, userId);
        return doc;
    }

    public async Task<PaginationDataDTO<Document>> DocumentsPagination_Admin(int pageNo, int pageSize)
    {
        return await _paginationContextFns.DocumentsPagination_Admin(pageNo, pageSize);
    }
    public async Task<PaginationDataDTO<Document>> DocumentsPagination(int pageNo, int pageSize)
    {
        return await _paginationContextFns.DocumentsPagination(pageNo, pageSize);
    }

    public async Task<PaginationDataDTO<Document>> Filter(DocumentFilterModel filter,User user)
    {
        var _docs = await _docRepo.GetAll();
        var docs = _docs.ToList();
        if (user.Role != "Admin")
        {
            docs = docs.Where(d => !d.IsDeleted).ToList();
            docs = docs.Where(d => (d.Visibility != "Private" || (d.Visibility == "Private" && d.CreatedByUserId == user.Id))).ToList();
            docs = docs.Where(d => (d.Visibility != "Team" || (d.Visibility == "Team" && d.TeamId == user.TeamId))).ToList();
            docs = docs.Where(d => (d.Visibility != "Archived" || (d.Visibility == "Archived" && d.CreatedByUserId == user.Id))).ToList();
        }

        if (filter.View == "Team")
        {
            docs = docs.Where(d =>  d.TeamId == user.TeamId).ToList();
            docs = docs.Where(d =>  d.Visibility != "Private").ToList();
        }
         if (filter.View == "Archieved")
        {
            docs = docs.Where(d => (d.Visibility == "Archived" && (user.Role=="Admin"||d.CreatedByUserId == user.Id))).ToList();
        }
        if (filter.SearchByOriginalFileName != null)
        {
            docs = docs.Where(d => d.OriginalFileName.Contains(filter.SearchByOriginalFileName, StringComparison.OrdinalIgnoreCase)).ToList();
        }
        if (filter.SearchByCreatedUserEmail != null)
        {
            docs = docs.Where(d => d.CreatedByUser!.Email == filter.SearchByCreatedUserEmail).ToList();
        }
        if (filter.SearchByCreatedTime != null)
        {
            // docs = docs.Where(d => DateOnly.FromDateTime(d.CreatedAt) == DateOnly.FromDateTime((DateTime)filter.SearchByCreatedTime)).ToList();
            var indiaTimeZone = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");
            var targetDate = DateOnly.FromDateTime(TimeZoneInfo.ConvertTimeFromUtc((DateTime)filter.SearchByCreatedTime, indiaTimeZone));
            
            docs = docs.Where(d => 
                                {
                                    var istDateTime = TimeZoneInfo.ConvertTimeFromUtc(d.CreatedAt, indiaTimeZone);
                                    return DateOnly.FromDateTime(istDateTime) == targetDate;
                                }).ToList();
        }
        if (filter.SortBy != null)
        {
            if (filter.SortBy.Equals("Id", StringComparison.OrdinalIgnoreCase))
            {
                docs = docs.OrderBy(d => d.Id).ToList();
            }
            if (filter.SortBy.Equals("StoredFileName", StringComparison.OrdinalIgnoreCase))
            {
                docs = docs.OrderBy(d => d.StoredFileName).ToList();
            }
            if (filter.SortBy.Equals("OriginalFileName", StringComparison.OrdinalIgnoreCase))
            {
                docs = docs.OrderBy(d => d.OriginalFileName).ToList();
            }
            if (filter.SortBy.Equals("CreatedByUserName", StringComparison.OrdinalIgnoreCase))
            {
                docs = docs.OrderBy(d => d.CreatedByUser?.Name).ToList();
            }
            if (filter.SortBy.Equals("CreatedAt", StringComparison.OrdinalIgnoreCase))
            {
                docs = docs.OrderBy(d => d.CreatedAt).ToList();
            }
            if (filter.SortBy.Equals("LastUpdatedByUserName", StringComparison.OrdinalIgnoreCase))
            {
                docs = docs.OrderBy(d => d.LastUpdatedByUser?.Name).ToList();
            }
            if (filter.SortBy.Equals("LastUpdatedAt", StringComparison.OrdinalIgnoreCase))
            {
                docs = docs.OrderBy(d => d.LastUpdatedAt).ToList();
            }
        }
        if (filter.SortOrder != null && filter.SortOrder.Equals("descending", StringComparison.OrdinalIgnoreCase))
        {
            docs.Reverse();
        }
        int totalRecords = docs.Count();
        if (filter.PageNo != null && filter.PageSize != null)
        {
            docs = docs.Skip((int)filter.PageSize * ((int)filter.PageNo - 1)).Take((int)filter.PageSize).ToList();
        }
        if (docs.Count() == 0) throw new Exception("NO documents found under the filter");
        return new PaginationDataDTO<Document> { Data = docs.ToList(), TotalRecords = totalRecords };
    }
}
