using BlogPlatform.Models;

namespace BlogPlatform.Interfaces
{
    public interface IPostService
    {
        public Task<Post> AddPost(Post post, string PerformedByEmail);
        public Task<Post> GetPostByID(Guid id);
        public Task<Post> UpdatePost(Guid id, string PerformedByEmail, Post post, List<IFormFile> newImages);
        public Task<IEnumerable<Comment>> GetCommentSByPost(Guid id);
        public Task<Post> DeletePost(Guid id, string PerformedByEmail);
        public Task<List<Image>> GetImagesByPostId(Guid id);
        public Task<IEnumerable<Post>> GetFilteredPosts(string? userEmail, string? status, string? searchTerm, string? sortOrder, int? pageNumber, int? pageSize);

    }
}
