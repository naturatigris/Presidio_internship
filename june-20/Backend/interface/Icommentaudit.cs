// Interfaces/ICommentAuditLogRepository.cs
using BlogPlatform.Models.AuditLogs;

namespace BlogPlatform.Interfaces
{
    public interface ICommentAuditLogRepository
    {
        public Task AddAsync(CommentAuditLog log);
    }
}
