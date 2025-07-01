using BlogPlatform.Contexts;
using BlogPlatform.Models;
using Microsoft.EntityFrameworkCore;

namespace BlogPlatform.Services
{
    public class PostLikeService
    {
        private readonly BlogPlatformContext _context;

        public PostLikeService(BlogPlatformContext context)
        {
            _context = context;
        }

        public async Task<bool> LikePost(Guid postId, string userEmail)
        {
            var exists = await _context.PostLikes
                .AnyAsync(p => p.PostId == postId && p.UserEmail == userEmail);

            if (exists) return false;

            var like = new PostLike
            {
                PostId = postId,
                UserEmail = userEmail
            };

            _context.PostLikes.Add(like);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> UnlikePost(Guid postId, string userEmail)
        {
            var like = await _context.PostLikes
                .FirstOrDefaultAsync(p => p.PostId == postId && p.UserEmail == userEmail);

            if (like == null) return false;

            _context.PostLikes.Remove(like);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<int> GetLikeCountForPost(Guid postId)
        {
            return await _context.PostLikes
                .CountAsync(p => p.PostId == postId);
        }

        public async Task<List<PostLike>> GetAllLikesForPost(Guid postId)
        {
            return await _context.PostLikes
                .Where(p => p.PostId == postId)
                .Include(p => p.User)
                .ToListAsync();
        }

        public async Task<List<PostLike>> GetAllLikesByUser(string userEmail)
        {
            return await _context.PostLikes
                .Where(p => p.UserEmail == userEmail)
                .Include(p => p.Post)
                .ToListAsync();
        }
    }
}
