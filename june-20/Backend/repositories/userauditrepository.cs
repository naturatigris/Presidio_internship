using BlogPlatform.Contexts;
using BlogPlatform.Interfaces;
using BlogPlatform.Models.AuditLogs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogPlatform.Repositories
{
    public class UserAuditLogRepository : IUserAuditLogRepository
    {
        private readonly BlogPlatformContext _context;

        public UserAuditLogRepository(BlogPlatformContext context)
        {
            _context = context;
        }

        public async Task AddAsync(UserAuditLog log)
        {
            await _context.UserAuditLogs.AddAsync(log);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<UserAuditLog>> GetAllAsync()
        {
            return await _context.UserAuditLogs.OrderByDescending(l => l.PerformedAt).ToListAsync();
        }

        public async Task<UserAuditLog> GetByIdAsync(Guid id)
        {
            return await _context.UserAuditLogs.FindAsync(id);
        }

        public async Task<IEnumerable<UserAuditLog>> GetByTargetEmailAsync(string email)
        {
            return await _context.UserAuditLogs
                .Where(l => l.TargetEmail == email)
                .OrderByDescending(l => l.PerformedAt)
                .ToListAsync();
        }
    }
}
