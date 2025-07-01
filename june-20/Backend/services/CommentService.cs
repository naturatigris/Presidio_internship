using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.AuditLogs;
using BlogPlatform.Models.DTOs;
using System.Text.Json;

namespace BlogPlatform.Services
{
    public class CommentService : ICommentService
    {
        private readonly IRepository<Guid, Comment> _commentRepo;
        private readonly ICommentAuditLogRepository _auditRepo;
        private readonly IUserValidationService _userValidationService;

        public CommentService(IRepository<Guid, Comment> commentRepo, ICommentAuditLogRepository auditRepo, IUserValidationService userValidationService)
        {
            _commentRepo = commentRepo;
            _auditRepo = auditRepo;
            _userValidationService = userValidationService;
                    }

        public async Task<Comment> AddComment(Comment comment, string performedBy)
        {
                await _userValidationService.ValidateUserEmail(comment.UserEmail);



            var added = await _commentRepo.Add(comment);

            await _auditRepo.AddAsync(new CommentAuditLog
            {
                Action = "Created",
                CommentId = added.Id,
                PerformedBy = performedBy,
                Changes = JsonSerializer.Serialize(new { added.Content })
            });

            return added;
        }
        public async Task<Comment> GetCommentById(Guid id)
                {
                    var comment = await _commentRepo.Get(id);

                    if (comment == null || comment.IsDeleted)
                        throw new Exception("Comment not found");

                    return comment;
                }


        public async Task<Comment> UpdateComment(Guid id, Comment comment, string performedBy)
        {
            await _userValidationService.ValidateUserEmail(performedBy);


            var existing = await _commentRepo.Get(id);
            var oldContent = existing.Content;

            existing.Content = comment.Content;
            existing.iseditied = true;
            existing.CreatedAt = DateTime.UtcNow;
            var updated = await _commentRepo.Update(id, existing);

            await _auditRepo.AddAsync(new CommentAuditLog
            {
                Action = "Updated",
                CommentId = id,
                PerformedBy = performedBy,
                Changes = JsonSerializer.Serialize(new { OldContent = oldContent, NewContent = comment.Content })
            });

            return updated;
        }

        public async Task<Comment> DeleteComment(Guid id, string performedBy)
        {
            await _userValidationService.ValidateUserEmail(performedBy);

            var comment = await _commentRepo.Get(id);

            if (comment == null)
                throw new Exception("Comment not found");

            if (comment.IsDeleted ==true)
                return comment;

            comment.Status = "Deleted";
            comment.IsDeleted = true;
            await _commentRepo.Update(id, comment);

            await _auditRepo.AddAsync(new CommentAuditLog
            {
                Action = "Deleted",
                CommentId = comment.Id,
                PerformedBy = performedBy,
                PerformedAt = DateTime.UtcNow
            });

            return comment;
        }
        public async Task<(IEnumerable<Comment>, int TotalCount)> GetFilteredComments(Guid? postId,string? userEmail, string? status, string? sortOrder, int? pageNumber, int? pageSize)
                {

                    var comments = await _commentRepo.GetAll();

                    var query = comments
                        .Where(c => !c.IsDeleted)
                        .AsQueryable();
                        if (postId.HasValue)
                            query = query.Where(c => c.PostId == postId.Value);

            if (!string.IsNullOrEmpty(userEmail))
            {
                await _userValidationService.ValidateUserEmail(userEmail);

                query = query.Where(c => c.UserEmail == userEmail);
            }

                    if (!string.IsNullOrEmpty(status))
                        query = query.Where(c => c.Status.Equals(status, StringComparison.OrdinalIgnoreCase));
                    int totalCount = query.Count(); // total before pagination

                    query = sortOrder?.ToLower() == "desc"
                        ? query.OrderByDescending(c => c.CreatedAt)
                        : query.OrderBy(c => c.CreatedAt);

                    if (pageNumber.HasValue && pageSize.HasValue)
                        query = query.Skip((pageNumber.Value - 1) * pageSize.Value).Take(pageSize.Value);

                    return (query, totalCount);
                }

    }
}
