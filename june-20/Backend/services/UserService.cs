using BlogPlatform.Models.DTOs;
using BlogPlatform.Interfaces;
using BlogPlatform.Repositories;
using BlogPlatform.Contexts;
using BlogPlatform.Models;
using BlogPlatform.Models.AuditLogs;
using System.Linq;



namespace BlogPlatform.Services
{
    public class UserService : IUserService
    {
        private readonly BlogPlatformContext _context;
        private readonly IRepository<string, User> _userrepository;
        private readonly IRepository<Guid, Post> _postrepository;
        private readonly IUserAuditLogRepository _auditLogRepository;
        private readonly IUserValidationService _userValidationService;



        public UserService(BlogPlatformContext context, IRepository<string, User> userrepository, IRepository<Guid, Post> postrepository, IUserAuditLogRepository auditLogRepository,IUserValidationService userValidationService)
        {
            _context = context;
            _userrepository = userrepository;
            _postrepository = postrepository;
            _auditLogRepository = auditLogRepository;
            _userValidationService = userValidationService;


        }
        public async Task<User> AddUser(User user, string PerformedByEmail)
        {
            var createdUser = await _userrepository.Add(user);

            await _auditLogRepository.AddAsync(new UserAuditLog
            {
                Action = "Created",
                TargetEmail = createdUser.Email,
                PerformedBy = PerformedByEmail,
                Changes = $"{{ \"Name\": \"{createdUser.Name}\" }}"
            });

            return createdUser;
        }
        public async Task<User> Get(string key)
        {
            return await _userrepository.Get(key);
        }
        public async Task<IEnumerable<User>> GetAll()
        {
            return await _userrepository.GetAll();
        }
        public async Task<User> UpdateUser(string key, User user, string PerformedByEmail)
        {
            var existingUser = await _userrepository.Get(key);
            user.Name ??= existingUser.Name;
            user.Status ??= existingUser.Status;
            user.Role ??= existingUser.Role;
            user.SuspensionReason ??= existingUser.SuspensionReason;
            user.SuspendedUntil ??= existingUser.SuspendedUntil;
            user.Bio ??= existingUser.Bio;
            user.Location ??= existingUser.Location;
            user.Website ??= existingUser.Website;

            var _user = await _userrepository.Update(key, user);

var changes = new Dictionary<string, object>();

if (existingUser.Name != user.Name)
{
    changes["OldName"] = existingUser.Name;
    changes["NewName"] = user.Name;
}

            await _auditLogRepository.AddAsync(new UserAuditLog
            {
                Action = "Updated",
                TargetEmail = _user.Email,
                PerformedBy = PerformedByEmail,
                Changes = System.Text.Json.JsonSerializer.Serialize(changes)
            });

            return user;
        }
        public async Task<User> DeleteUser(string key, string performedByEmail)
        {
            User user = await _userrepository.Get(key);

            if (user == null)
                throw new Exception("User not found");

            if (user.IsDeleted)
                return user;

            user.IsDeleted = true;
            await _userrepository.Update(user.Email, user);

            await _auditLogRepository.AddAsync(new UserAuditLog
            {
                Action = "Deleted",
                TargetEmail = user.Email,
                PerformedBy = performedByEmail,
                PerformedAt = DateTime.UtcNow,
                Changes = $"{{ \"Status\": \"Deleted\", \"DeletedAt\": \"{DateTime.UtcNow}\" }}"
            });

            return user;
        }

        public async Task<IEnumerable<Post>> GetPostByUser(string email)
        {
   
            var posts = await _postrepository.GetAll();
            var final = posts.Where(p => p.UserEmail == email).ToList();
            return final;

        }
public async Task<PaginatedUserResult> GetAllFiltereduser(string? role, string? status, string? sortOrder, int? pageNumber, int? pageSize)
        {
            var query = await _userrepository.GetAll();

            // Filter
            if (!string.IsNullOrEmpty(role))
                query = query.Where(u => u.Role.ToLower() == role.ToLower());

            if (!string.IsNullOrEmpty(status))
                query = query.Where(u => u.Status.ToLower() == status.ToLower());

            // Sort
            if (sortOrder?.ToLower() == "desc")
                query = query.OrderByDescending(u => u.CreatedAt);
            else
                query = query.OrderBy(u => u.CreatedAt);
                var totalItems = query.Count();

                int page = pageNumber ?? 1;
                int size = pageSize ?? 10;

                var paginatedItems = query
                    .Skip((page - 1) * size)
                    .Take(size)
                    .ToList();

    return new PaginatedUserResult
    {
        Items = paginatedItems,
        PageNumber = page,
        PageSize = size,
        TotalItems = totalItems
    };
        }
            



    }
    
}