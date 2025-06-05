using Microsoft.AspNetCore.Mvc;
using Organization.Models.DTOs;
using Organization.Services;

namespace Organization.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly EmployeeAuthenticationService _authService;

        public AuthController(EmployeeAuthenticationService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<EmployeeLoginResponse>> Login([FromBody] EmployeeLoginRequest request)
        {
            try
            {
                var result = await _authService.LoginAsync(request);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return Unauthorized(new { Message = ex.Message });
            }
        }
    }
}
