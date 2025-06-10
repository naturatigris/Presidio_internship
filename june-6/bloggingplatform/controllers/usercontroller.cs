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
                if (user== null)
    {
        return NotFound($"User with email '{email}' not found.");
    }

            return Ok(user);
        }
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserDto dto)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (dto.Role.ToLower() == "admin")
            {
                if (dto.AdminSecret != "secret123")
                    return BadRequest("Invalid admin secret provided.");

                dto.Role = "Admin";
            }

            var user = _mapper.Map<User>(dto);

            user.PasswordHash = _passwordHasher.HashPassword(dto.Password);

            var createdUser = await _userService.AddUser(user, user.Email);

            return CreatedAtAction(nameof(GetByEmail), new { version = "1.0", email = createdUser.Email }, createdUser);
        }
        [Authorize]
        [HttpPut("{email}")]
        public async Task<IActionResult> UpdateUser(string email, [FromBody] UpdateUserDto dto, [FromQuery] string performedByEmail)
        {
                var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
                var role = User.FindFirst(ClaimTypes.Role)?.Value;

                if (role != "Admin" && userEmail != performedByEmail)
                    return Forbid();

            var performer = await _userService.Get(performedByEmail);
            if (performer == null || performer.IsDeleted)
                return NotFound("Performing user not found.");

            var user = await _userService.Get(email);
            if (user == null)
                return NotFound("User not found.");

            _mapper.Map(dto, user);

            if (!string.IsNullOrEmpty(dto.Password))
                user.PasswordHash =  _passwordHasher.HashPassword(dto.Password);

            var updated = await _userService.UpdateUser(email, user, performedByEmail);
            return Ok(updated);
        }
        [Authorize]

        [HttpPut("admin/{email}")]
        public async Task<IActionResult> UpdateUserAsAdmin(string email, [FromBody] AdminUpdateUserDto dto, [FromQuery] string performedByEmail)
        {
                var role = User.FindFirst(ClaimTypes.Role)?.Value;

                if (role != "Admin")
                    return Forbid("Only admins or the comment author can perform this action.");

            var user = await _userService.Get(email);
            if (user == null)
                return NotFound("User not found.");

            _mapper.Map(dto, user);

            if (!string.IsNullOrEmpty(dto.Password))
                user.PasswordHash =  _passwordHasher.HashPassword(dto.Password);

            var updated = await _userService.UpdateUser(email, user, performedByEmail);
            return Ok(updated);
        }
        [Authorize]
        [HttpDelete("delete/{email}")]
        public async Task<IActionResult> DeleteUser(string email,[FromQuery] string performedByEmail)
        {    var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
            var role = User.FindFirst(ClaimTypes.Role)?.Value;

            if (role != "Admin" && userEmail != performedByEmail)
            return Forbid();

            var existingUser = await _userService.Get(email);
            if (existingUser == null || existingUser.IsDeleted)
                return NotFound("User not found or already deleted");


            var result = await _userService.DeleteUser(email, email);
            return Ok(new { message = $"User {email} marked as deleted." });
        }
        [HttpGet("getpostbyser/{email}")]
        public async Task<ActionResult<IEnumerable<Post>>> GetPostsByUser(string email)
        {
            try
            {
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
