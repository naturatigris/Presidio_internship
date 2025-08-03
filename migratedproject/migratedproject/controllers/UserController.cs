using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChienVHShopOnline.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ILogger<UserController> _logger;

        public UserController(IUserService userService, ILogger<UserController> logger)
        {
            _userService = userService;
            _logger = logger;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        {
            try
            {
                var users = await _userService.GetAll();
                return Ok(users);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error while retrieving all users.");
                return StatusCode(500, new { error = "Internal server error. Please try again later." });
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            try
            {
                var user = await _userService.Get(id);
                if (user == null)
                    return NotFound(new { message = $"User with id {id} not found." });

                return Ok(user);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error retrieving user with ID {id}");
                return StatusCode(500, new { error = "Internal server error." });
            }
        }

        // POST: api/user
        [HttpPost]
        public async Task<ActionResult<User>> CreateUser([FromBody] UserCreateDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var user = new User
                {
                    Username = dto.Username,
                    Password = dto.Password
                };
                var createdUser = await _userService.AddUser(user);
                return CreatedAtAction(nameof(GetUser), new { id = createdUser.UserId }, createdUser);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error while creating user.");
                return StatusCode(500, new { error = "Internal server error." });
            }
        }

       
        [HttpPut("{id}")]
        public async Task<ActionResult<User>> UpdateUser(int id, [FromBody] UserCreateDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var existingUser = await _userService.Get(id);
                var updatedUser = new User
                {
                    UserId=id,
                    Username = dto.Username??existingUser.Username,
                    Password = dto.Password??existingUser.Password
                };
                if (existingUser == null)
                    return NotFound(new { message = $"User with id {id} not found." });

                var result = await _userService.UpdateUser(id, updatedUser);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error updating user with ID {id}");
                return StatusCode(500, new { error = "Internal server error." });
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            try
            {
                var existingUser = await _userService.Get(id);
                if (existingUser == null)
                    return NotFound(new { message = $"User with id {id} not found." });

                var deletedUser = await _userService.DeleteUser(id);
                return Ok(deletedUser);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error deleting user with ID {id}");
                return StatusCode(500, new { error = "Internal server error." });
            }
        }
    }
}
