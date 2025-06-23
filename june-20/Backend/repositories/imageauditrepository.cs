using BlogPlatform.Contexts;
using BlogPlatform.Interfaces;
using BlogPlatform.Models.AuditLogs;
using Microsoft.EntityFrameworkCore;

namespace BlogPlatform.Repositories
{
    public class ImageAuditLogRepository : IImageAuditLogRepository
    {
        private readonly BlogPlatformContext _context;

        public ImageAuditLogRepository(BlogPlatformContext context)
        {
            _context = context;
        }

        public async Task AddAsync(ImageAuditLog log)
        {
            _context.ImageAuditLogs.Add(log);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<ImageAuditLog>> GetAllAsync()
        {
            return await _context.ImageAuditLogs.ToListAsync();
        }
    }
}
