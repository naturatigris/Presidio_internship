using BlogPlatform.Contexts;
using BlogPlatform.Interfaces;
using BlogPlatform.Models.AuditLogs;
using Microsoft.EntityFrameworkCore;

namespace BlogPlatform.Repositories
{
    public class CommentAuditLogRepository : ICommentAuditLogRepository
    {
        private readonly BlogPlatformContext _context;

        public CommentAuditLogRepository(BlogPlatformContext context)
        {
            _context = context;
        }

        public async Task AddAsync(CommentAuditLog log)
        {
            _context.CommentAuditLogs.Add(log);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<CommentAuditLog>> GetAllAsync()
        {
            return await _context.CommentAuditLogs.ToListAsync();
        }

        public async Task<IEnumerable<CommentAuditLog>> GetByCommentIdAsync(Guid commentId)
        {
            return await _context.CommentAuditLogs
                .Where(log => log.CommentId == commentId)
                .ToListAsync();
        }
    }
}
