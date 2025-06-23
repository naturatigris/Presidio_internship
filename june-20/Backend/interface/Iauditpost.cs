using BlogPlatform.Models.AuditLogs;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlogPlatform.Interfaces
{
    public interface IPostAuditLogRepository
    {
        Task AddAsync(PostAuditLog log);
        Task<IEnumerable<PostAuditLog>> GetAllAsync();
        Task<IEnumerable<PostAuditLog>> GetByIdAsync(Guid Id);
    }
}
