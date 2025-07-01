using BlogPlatform.Contexts;
using BlogPlatform.Models;
using Microsoft.EntityFrameworkCore;

namespace BlogPlatform.Services
{
    public class CommentLikeService
    {
        private readonly BlogPlatformContext _context;

        public CommentLikeService(BlogPlatformContext context)
        {
            _context = context;
        }

        public async Task<bool> LikeComment(Guid commentId, string userEmail)
        {
            var exists = await _context.CommentLikes
                .AnyAsync(c => c.CommentId == commentId && c.UserEmail == userEmail);

            if (exists) return false;

            var like = new CommentLike
            {
                CommentId = commentId,
                UserEmail = userEmail
            };

            _context.CommentLikes.Add(like);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> UnlikeComment(Guid commentId, string userEmail)
        {
            var like = await _context.CommentLikes
                .FirstOrDefaultAsync(c => c.CommentId == commentId && c.UserEmail == userEmail);

            if (like == null) return false;

            _context.CommentLikes.Remove(like);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<int> GetLikeCountForComment(Guid commentId)
        {
            return await _context.CommentLikes
                .CountAsync(c => c.CommentId == commentId);
        }
    public async Task<List<CommentLike>> GetAllLikesForComment(Guid commentId)
{
    return await _context.CommentLikes
        .Where(c => c.CommentId == commentId)
        .Include(c => c.User) 
        .ToListAsync();
}
public async Task<List<CommentLike>> GetAllLikesByUser(string userEmail)
{
    return await _context.CommentLikes
        .Where(c => c.UserEmail == userEmail)
        .Include(c => c.Comment)
        .ToListAsync();
}



    }
}