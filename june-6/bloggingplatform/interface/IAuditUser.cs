using BlogPlatform.Models.AuditLogs;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlogPlatform.Interfaces
{
    public interface IUserAuditLogRepository
    {
        Task AddAsync(UserAuditLog log);
        Task<IEnumerable<UserAuditLog>> GetAllAsync();
        Task<UserAuditLog> GetByIdAsync(Guid id);
        Task<IEnumerable<UserAuditLog>> GetByTargetEmailAsync(string email);
    }
}
