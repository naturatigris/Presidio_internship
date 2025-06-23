using BlogPlatform.Contexts;
using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace BlogPlatform.Repositories
{
    public class RefreshTokenRepository : IRefreshTokenRepository
    {
        private readonly BlogPlatformContext _context;

        public RefreshTokenRepository(BlogPlatformContext context)
        {
            _context = context;
        }

        public async Task<RefreshToken?> GetByToken(string token)
        {
            return await _context.RefreshTokens
                .FirstOrDefaultAsync(r => r.Token == token);
        }

        public async Task Add(RefreshToken token)
        {
            _context.RefreshTokens.Add(token);
            await _context.SaveChangesAsync();
        }

        public async Task Revoke(string token)
        {
            var existing = await GetByToken(token);
            if (existing != null)
            {
                existing.IsRevoked = true;
                await _context.SaveChangesAsync();
            }
        }
    }
}
