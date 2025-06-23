using BlogPlatform.Contexts;
using BlogPlatform.Interfaces;
using BlogPlatform.Models.AuditLogs;
using Microsoft.EntityFrameworkCore;

namespace BlogPlatform.Repositories
{
    public class PostAuditLogRepository : IPostAuditLogRepository
    {
        private readonly BlogPlatformContext _context;

        public PostAuditLogRepository(BlogPlatformContext context)
        {
            _context = context;
        }

        public async Task AddAsync(PostAuditLog log)
        {
            await _context.PostAuditLogs.AddAsync(log);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<PostAuditLog>> GetAllAsync()
        {
            return await _context.PostAuditLogs.OrderByDescending(p => p.PerformedAt).ToListAsync();
        }

        public async Task<IEnumerable<PostAuditLog>> GetByIdAsync(Guid Id)
        {
            return await _context.PostAuditLogs
                .Where(p => p.Id == Id)
                .OrderByDescending(p => p.PerformedAt)
                .ToListAsync();
        }
    }
}
