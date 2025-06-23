using BlogPlatform.Models.AuditLogs;

namespace BlogPlatform.Interfaces
{
    public interface IImageAuditLogRepository
    {
        Task AddAsync(ImageAuditLog log);
        Task<IEnumerable<ImageAuditLog>> GetAllAsync();
    }
}
