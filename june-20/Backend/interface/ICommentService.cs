using BlogPlatform.Models;
using BlogPlatform.Models.DTOs;

namespace BlogPlatform.Interfaces
{
    public interface ICommentService
    {
        public Task<Comment> AddComment(Comment comment, string performedBy);
        public Task<Comment> UpdateComment(Guid id, Comment comment, string performedBy);
        public Task<Comment> DeleteComment(Guid id, string performedBy);
        public Task<(IEnumerable<Comment>, int TotalCount)> GetFilteredComments(Guid? postId, string? userEmail, string? status, string? sortOrder, int? pageNumber, int? pageSize);
        public Task<Comment> GetCommentById(Guid id);

    }
}
