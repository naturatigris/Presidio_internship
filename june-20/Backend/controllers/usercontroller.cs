using Microsoft.AspNetCore.Mvc;
using BlogPlatform.Interfaces;
using AutoMapper;
using BlogPlatform.Models.DTOs;
using BlogPlatform.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;


namespace BlogPlatform.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        private readonly IPasswordHasher _passwordHasher;
        private readonly IPostService _postService;




        public UsersController(IUserService userService, IMapper mapper, IPasswordHasher passwordHasher, IPostService postService)
        {
            _userService = userService;
            _mapper = mapper;
            _passwordHasher = passwordHasher;
            _postService = postService;

        }

        [HttpGet("getall")]
        public async Task<IActionResult> GetAll()
        {
            var users = await _userService.GetAll();
            if (users.Count() == 0)
            {
                return NotFound("No users found.");
            }

            return Ok(users);
        }

        [HttpGet("get/{email}")]
        public async Task<IActionResult> GetByEmail(string email)
        {
            var user = await _userService.Get(email);
                if (user== null|| user.IsDeleted)
            {
                return NotFound($"User with email '{email}' not found.");
            }

            return Ok(user);
        }
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserDto dto)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                if (dto.Role.ToLower() == "admin")
                {
                    if (dto.AdminSecret != "secret123")
                        return BadRequest("Invalid admin secret provided.");

                    dto.Role = "Admin";
                }
                var existingUser = await _userService.Get(dto.Email);

                if (existingUser != null)
                {
                    if (existingUser.IsDeleted)
                    {
                        // "Un-delete" and update the existing user
                        _mapper.Map(dto, existingUser);
                        existingUser.IsDeleted = false;
                        existingUser.PasswordHash = _passwordHasher.HashPassword(dto.Password);

                        var reactivatedUser = await _userService.UpdateUser(dto.Email, existingUser, dto.Email);
                        return Ok(new { message = "User was previously deleted. Reactivated and updated.", user = reactivatedUser });
                    }

                    return Conflict($"A user with email '{dto.Email}' already exists.");
                }


                var user = _mapper.Map<User>(dto);

                user.PasswordHash = _passwordHasher.HashPassword(dto.Password);

                var createdUser = await _userService.AddUser(user, user.Email);

                return CreatedAtAction(nameof(GetByEmail), new { version = "1.0", email = createdUser.Email }, createdUser);
            }            catch (Exception ex)
            {
                return StatusCode(500, $"Error creating user: {ex.Message}");
            }

        }
        [Authorize]
        [HttpPut("{email}")]
        [RequestSizeLimit(5 * 1024 * 1024)] 

        public async Task<IActionResult> UpdateUser(string email, [FromForm] UpdateUserDto dto, IFormFile? profileImage)
        {
            try
            {
                var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
                var role = User.FindFirst(ClaimTypes.Role)?.Value;

                if (role != "Admin" && userEmail != email)
                    return Forbid();

                var user = await _userService.Get(email);
                if (user == null || user.IsDeleted)
                    return NotFound("User not found.");
                if (dto.IsSuspended == null)
                    {
                        dto.IsSuspended = user.IsSuspended; // prevent null overwrite
                    }
                if (dto.Status == null) {

                    dto.Status = user.Status;
                }

                _mapper.Map(dto, user);


                
                if (profileImage != null && profileImage.Length > 0)
                {
                    using (var ms = new MemoryStream())
                    {
                        await profileImage.CopyToAsync(ms);
                        user.ProfileImage = ms.ToArray();
                    }
                }


                if (!string.IsNullOrEmpty(dto.Password))
                    user.PasswordHash = _passwordHasher.HashPassword(dto.Password);
                if (role != "Admin")
                {
                    dto.Role = user.Role;
                    dto.IsSuspended = user.IsSuspended;
                    dto.SuspensionReason = user.SuspensionReason;
                    dto.SuspendedUntil = user.SuspendedUntil;
                }


                var updated = await _userService.UpdateUser(email, user, userEmail);
                return Ok(updated);
            }            catch (Exception ex)
            {
    return StatusCode(500, $"Error updating user: {ex.Message} -- Inner: {ex.InnerException?.Message}");
            }

        }
        [Authorize]
        [HttpDelete("delete/{email}")]
        public async Task<IActionResult> DeleteUser(string email)
        {
            try
            {
                var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
                var role = User.FindFirst(ClaimTypes.Role)?.Value;

                if (role != "Admin" && userEmail != email)
                    return Forbid();

                var existingUser = await _userService.Get(email);
                if (existingUser == null || existingUser.IsDeleted)
                    return NotFound("User not found or already deleted");


                var result = await _userService.DeleteUser(email, userEmail);
                return Ok(new { message = $"User {email} marked as deleted." });
            }            catch (Exception ex)
            {
                return StatusCode(500, $"Error deleting user: {ex.Message}");
            }

        }
        [HttpGet("getpostbyser/{email}")]
        public async Task<ActionResult<IEnumerable<Post>>> GetPostsByUser(string email)
        {
            try
            {
             var existingUser = await _userService.Get(email);
            if (existingUser == null || existingUser.IsDeleted)
                return NotFound("User not found or already deleted");

                var posts = await _userService.GetPostByUser(email);

                if (posts == null || !posts.Any())
                    return NotFound($"No posts found for user: {email}");

                return Ok(posts);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error retrieving posts: {ex.Message}");
            }
        }
[HttpGet("getall/filtered")]
public async Task<ActionResult<IEnumerable<User>>> GetFilteredUsers([FromQuery] string? role,[FromQuery] string? status,[FromQuery] string? sortOrder = "asc",
    [FromQuery] int? pageNumber=1,[FromQuery] int? pageSize=10)
{
    try
    {
        var users = await _userService.GetAllFiltereduser(role, status, sortOrder, pageNumber, pageSize);

        if (!users.Any())
            return NotFound("No users found for the given criteria.");

        return Ok(users);
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Error fetching users: {ex.Message}");
    }
}

    }

}
