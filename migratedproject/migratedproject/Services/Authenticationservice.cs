
using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace ChienVHShopOnline.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly ITokenService _tokenService;
        private readonly IRepository<int, User> _userRepository;
        private readonly ILogger<AuthenticationService> _logger;
        private readonly RefreshTokenService _refreshTokenService;

        public AuthenticationService(ITokenService tokenService,
                                    IRepository<int, User> userRepository,
                                    ILogger<AuthenticationService> logger,
                                    RefreshTokenService refreshTokenService

                                    )
        {
            _tokenService = tokenService;
            _userRepository = userRepository;
            _logger = logger;
            _refreshTokenService = refreshTokenService;
        }
        public async Task<UserLoginResponse> Login(UserLoginRequest user)
        {
            var dbUser = await _userRepository.Get(user.UserId);
            if (dbUser == null)
            {
                _logger.LogCritical("User not found");
                throw new Exception("No such user");
            }
            bool isPasswordValid = user.Password==dbUser.Password;
            _logger.LogInformation($"Login attempt: {user.UserId}");
            _logger.LogInformation($"User found: {dbUser != null}");
            _logger.LogInformation($"Password valid: {isPasswordValid}");

                if (!isPasswordValid)
            {
                throw new Exception("Invalid credentials");
            }


            var token = await _tokenService.GenerateToken(dbUser);
                var refreshToken = _refreshTokenService.GenerateToken();

                //await _refreshTokenService.SaveToken(refreshToken, dbUser.Email);

            return new UserLoginResponse
            {
                Id = user.UserId,
                Token = token,
                RefreshToken = refreshToken

            };
        }
    }
}