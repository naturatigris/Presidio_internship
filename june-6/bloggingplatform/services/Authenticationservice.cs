
using System.Threading.Tasks.Dataflow;
using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.DTOs;
using Microsoft.Extensions.Logging;

namespace BlogPlatform.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly ITokenService _tokenService;
        private readonly IPasswordHasher _encryptionService;
        private readonly IRepository<string, User> _userRepository;
        private readonly ILogger<AuthenticationService> _logger;
        private readonly RefreshTokenService _refreshTokenService;

        public AuthenticationService(ITokenService tokenService,
                                    IPasswordHasher encryptionService,
                                    IRepository<string, User> userRepository,
                                    ILogger<AuthenticationService> logger,
                                    RefreshTokenService refreshTokenService

                                    )
        {
            _tokenService = tokenService;
            _encryptionService = encryptionService;
            _userRepository = userRepository;
            _logger = logger;
            _refreshTokenService = refreshTokenService;
        }
        public async Task<UserLoginResponse> Login(UserLoginRequest user)
        {
            var dbUser = await _userRepository.Get(user.Email);
            if (dbUser == null)
            {
                _logger.LogCritical("User not found");
                throw new Exception("No such user");
            }
            bool isPasswordValid = _encryptionService.VerifyPassword(user.Password, dbUser.PasswordHash);
            _logger.LogInformation($"Login attempt: {user.Email}");
            _logger.LogInformation($"User found: {dbUser != null}");
            _logger.LogInformation($"Password valid: {isPasswordValid}");

                if (!isPasswordValid)
            {
                throw new Exception("Invalid credentials");
            }


            var token = await _tokenService.GenerateToken(dbUser);
                var refreshToken = _refreshTokenService.GenerateToken();

                await _refreshTokenService.SaveToken(refreshToken, dbUser.Email);

            return new UserLoginResponse
            {
                Email = user.Email,
                Token = token,
                RefreshToken = refreshToken

            };
        }
    }
}