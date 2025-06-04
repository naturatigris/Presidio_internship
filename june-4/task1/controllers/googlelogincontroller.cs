using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;
using FirstAPI.Interfaces;
using FirstAPI.Models;
using FirstAPI.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace FirstAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ITokenService _tokenService;
        private readonly IRepository<string, User> _userRepository;

        public AuthController(IConfiguration configuration, ITokenService tokenService, IRepository<string, User> userRepository)
        {
            _configuration = configuration;
            _tokenService = tokenService;
            _userRepository = userRepository;
        }

        [HttpGet("google-login-url")]
        public IActionResult GetGoogleLoginUrl()
        {
            var clientId = _configuration["Authentication:Google:ClientId"];
            var redirectUri = _configuration["Authentication:Google:RedirectUri"];
            var scope = "openid email profile";
            var state = "random_state_string"; 
            var url =
                $"https://accounts.google.com/o/oauth2/v2/auth?" +
                $"client_id={clientId}&" +
                $"redirect_uri=http://localhost:5025/api/auth/google-callback&" +
                $"response_type=code&" +
                $"scope={scope}&" +
                $"state={state}&" +
                $"access_type=offline&" +    
                $"prompt=consent";           

            return Ok(new { url });
        }

        [HttpGet("google-callback")]
        public async Task<IActionResult> GoogleCallback([FromQuery] string code, [FromQuery] string state)
        {
            try
            {
                if (string.IsNullOrEmpty(code))
                    return BadRequest("Authorization code not found");

                Console.WriteLine(code);
                var tokenResponse = await ExchangeCodeForTokensAsync(code);

                if (tokenResponse == null)
                    return BadRequest("Token exchange failed");

                if (!tokenResponse.RootElement.TryGetProperty("id_token", out var idTokenElement))
                    return BadRequest("ID token not found in token response");


                var idToken = idTokenElement.GetString();

                var payload = await Google.Apis.Auth.GoogleJsonWebSignature.ValidateAsync(idToken);

                var user = await _userRepository.Get(payload.Email);
                if (user == null)
                {
                    user = new User
                    {
                        Username = payload.Email,
                        Role = "Doctor",
                    };
                    await _userRepository.Add(user);
                }

                var appToken = await _tokenService.GenerateToken(user);

                return Ok(new { token = appToken });
            }
            catch(Exception ex)
            {
                        Console.WriteLine("ERROR: " + ex.Message);
        return StatusCode(500, $"Internal Server Error: {ex.Message}");

                
            }
        }
private async Task<JsonDocument?> ExchangeCodeForTokensAsync(string code)
{
    var clientId = _configuration["Authentication:Google:ClientId"];
    var clientSecret = _configuration["Authentication:Google:ClientSecret"];
    var redirectUri = "http://localhost:5025/api/auth/google-callback";

    using var client = new HttpClient();

    var parameters = new Dictionary<string, string>
    {
        { "code", code },
        { "client_id", clientId },
        { "client_secret", clientSecret },
        { "redirect_uri", redirectUri },
        { "grant_type", "authorization_code" }
    };

    var content = new FormUrlEncodedContent(parameters);

    var response = await client.PostAsync("https://oauth2.googleapis.com/token", content);

    if (!response.IsSuccessStatusCode)
    {
        var error = await response.Content.ReadAsStringAsync();
        Console.WriteLine($"Token exchange failed: {error}");
        return null;
    }

    var responseStream = await response.Content.ReadAsStreamAsync();
    var jsonDocument = await JsonDocument.ParseAsync(responseStream);
    return jsonDocument;
}
    }
}
