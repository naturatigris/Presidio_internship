using BlogPlatform.Contexts;
using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.AuditLogs;
using Microsoft.AspNetCore.Http;
using System.Text.Json;

namespace BlogPlatform.Services
{
    public class PostService : IPostService
    {
        private readonly IRepository<Guid, Post> _postRepository;
        private readonly IPostAuditLogRepository _auditLogRepository;
        private readonly IRepository<Guid, Comment> _commentRepository;

        private readonly IRepository<Guid, Image> _imagerepository;
        private readonly IImageService _imageService;
        private readonly BlogPlatformContext _context;
        private readonly IRepository<string, User> _userRepository;
        private readonly IUserValidationService _userValidationService;



        public PostService(IRepository<Guid, Post> postRepo, IPostAuditLogRepository auditRepo, IRepository<Guid, Comment> commentRepository
        , IRepository<Guid, Image> imagerepository, IRepository<string, User> userRepository,
IImageService imageService, BlogPlatformContext context,IUserValidationService userValidationService)
        {
            _postRepository = postRepo;
            _auditLogRepository = auditRepo;
            _commentRepository = commentRepository;
            _imagerepository = imagerepository;
            _imageService = imageService;
            _context = context;
            _userRepository = userRepository;
                _userValidationService = userValidationService;

        }


        public async Task<Post> AddPost(Post post, string PerformedByEmail)
        {
            await _userValidationService.ValidateUserEmail(PerformedByEmail);
            await _userValidationService.ValidateUserEmail(post.UserEmail);

            var created = await _postRepository.Add(post);


            await _auditLogRepository.AddAsync(new PostAuditLog
            {
                Action = "Created",
                PostId = created.Id,
                PerformedBy = PerformedByEmail,
                Changes = JsonSerializer.Serialize(new { created.Title, created.Content })
            });

            return created;
        }

        public async Task<Post> UpdatePost(Guid id, string PerformedByEmail, Post updatedPost, List<IFormFile> newImages)
        {
            await _userValidationService.ValidateUserEmail(PerformedByEmail);

            var old = await _postRepository.Get(id);
            if (old == null)
                throw new Exception("Post not found.");

            if (!string.IsNullOrWhiteSpace(updatedPost.Title))
                old.Title = updatedPost.Title;

            if (!string.IsNullOrWhiteSpace(updatedPost.Content))
                old.Content = updatedPost.Content;

            if (!string.IsNullOrWhiteSpace(updatedPost.Slug))
                old.Slug = updatedPost.Slug;
            if (!string.IsNullOrWhiteSpace(updatedPost.Status))
                old.Status = updatedPost.Status;


            await _context.SaveChangesAsync(); // assumes this calls _context.SaveChangesAsync()

            // Update images only if provided
            if (newImages != null && newImages.Count > 0)
            {
                old.Images = await _imageService.UpdateImagesAsync(newImages, id, PerformedByEmail);
            }


            await _auditLogRepository.AddAsync(new PostAuditLog
            {
                Action = "Updated",
                PostId = old.Id,
                PerformedBy = PerformedByEmail,
                Changes = JsonSerializer.Serialize(new
                {
                    OldTitle = old.Title,
                    NewTitle = old.Title
                })
            });

            return old;
        }

        public async Task<Post> DeletePost(Guid id, string PerformedByEmail)
        {
            await _userValidationService.ValidateUserEmail(PerformedByEmail);

            var post = await _postRepository.Get(id);

            if (post == null)
                throw new Exception("No post found with the given ID.");

            if (post.IsDeleted)
                throw new Exception("Post is already deleted.");

            post.IsDeleted = true;
            await _imageService.DeleteImagesByPostIdAsync(id, PerformedByEmail);

            await _postRepository.Update(id, post);

            await _auditLogRepository.AddAsync(new PostAuditLog
            {
                Action = "Deleted",
                PostId = post.Id,
                PerformedBy = PerformedByEmail
            });

            return post;
        }

        public async Task<Post> GetPostByID(Guid id) => await _postRepository.Get(id);

        public async Task<IEnumerable<Comment>> GetCommentSByPost(Guid id)
        {
            var comments = await _commentRepository.GetAll();
            var final = comments.Where(c => c.PostId == id).ToList();
            return final;
        }
        public async Task<List<Image>> GetImagesByPostId(Guid id)
        {
            var images = await _imagerepository.GetAll();
            var final = images.Where(c => c.PostId == id).ToList();
            return final;
        }
        public async Task<IEnumerable<Post>> GetFilteredPosts(string? userEmail, string? status, string? searchTerm, string? sortOrder, int? pageNumber, int? pageSize)
        {
            await _userValidationService.ValidateUserEmail(userEmail);

            var posts = await _postRepository.GetAll();

            var query = posts
                .Where(p => !p.IsDeleted)
                .AsQueryable();

            if (!string.IsNullOrEmpty(userEmail))
                query = query.Where(p => p.UserEmail == userEmail);

            if (!string.IsNullOrEmpty(status))
                query = query.Where(p => p.Status.Equals(status, StringComparison.OrdinalIgnoreCase));

            if (!string.IsNullOrEmpty(searchTerm))
                query = query.Where(p => p.Title.Contains(searchTerm, StringComparison.OrdinalIgnoreCase) ||
                                        p.Content.Contains(searchTerm, StringComparison.OrdinalIgnoreCase));

            query = sortOrder?.ToLower() == "desc"
                ? query.OrderByDescending(p => p.Id)
                : query.OrderBy(p => p.Id);

            if (pageNumber.HasValue && pageSize.HasValue)
                query = query.Skip((pageNumber.Value - 1) * pageSize.Value).Take(pageSize.Value);

            return query.ToList();
        }
    }
}
