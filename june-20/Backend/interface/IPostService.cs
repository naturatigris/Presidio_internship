using BlogPlatform.Models;
using BlogPlatform.Models.Dtos;

namespace BlogPlatform.Interfaces
{
    public interface IPostService
    {
        public Task<Post> AddPost(Post post, string PerformedByEmail);
        public Task<Post> GetPostByID(Guid id);
        public Task<IEnumerable<Post>> GetAll();
        public Task<Post> UpdatePost(Guid id, string PerformedByEmail, Post post, List<IFormFile> newImages,Boolean deleteimages);
        public Task<IEnumerable<Comment>> GetCommentSByPost(Guid id);
        public Task<Post> DeletePost(Guid id, string PerformedByEmail);
        public Task<List<Image>> GetImagesByPostId(Guid id);
        public Task<PaginatedPostResult> GetFilteredPosts(string? userEmail, string? status, string? searchTerm, string? sortOrder, int? pageNumber, int? pageSize,List<string>? categories,string? viewOrder);

    }
}
