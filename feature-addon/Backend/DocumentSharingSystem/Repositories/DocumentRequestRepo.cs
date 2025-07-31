using System;
using Microsoft.EntityFrameworkCore;
using DocumentSharingSystem.Contexts;
using DocumentSharingSystem.Models;

namespace DocumentSharingSystem.Repositories;

public class DocumentRequestRepo : Repo<Guid, DocumentRestoreRequest>
{
    public DocumentRequestRepo(DocumentSharingSystemContext DocumentSharingSystemContext) : base(DocumentSharingSystemContext)
    {
    }
    public override async Task<ICollection<DocumentRestoreRequest>> GetAll()
    {
        return await _context.DocumentRestoreRequests
            .Include(r => r.Document)
            .Include(r => r.RequestedByUser)
            .ToListAsync();
    }

    public override async Task<DocumentRestoreRequest> Get(Guid id)
    {
        return await _context.DocumentRestoreRequests.FindAsync(id);
    }



}
