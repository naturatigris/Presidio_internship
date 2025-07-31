using System;
using System.Text;
using DocumentSharingSystem.Misc;
using DocumentSharingSystem.Models;
using DocumentSharingSystem.Models.DTOs;
using Microsoft.EntityFrameworkCore.Update.Internal;
using Microsoft.AspNetCore.SignalR;
using DocumentSharingSystem.Contexts;


namespace DocumentSharingSystem.Services;

public class AuthenticationService
{
    private readonly UserService _userService;
    private readonly TokenService _tokenService;
    private readonly RefreshTokenService _refreshTokenService;
    private readonly DocumentSharingSystemContext _context;
    private readonly ILogger<AuthenticationService> _logger;
    private readonly InactivityalertService _inactivealertservice;

    public AuthenticationService(UserService userService, TokenService tokenService, RefreshTokenService refreshTokenService, DocumentSharingSystemContext context, ILogger<AuthenticationService> logger, InactivityalertService inactivealertservice
)
    {
        _userService = userService;
        _tokenService = tokenService;
        _refreshTokenService = refreshTokenService;
        _context = context;
        _logger = logger;
        _inactivealertservice = inactivealertservice;
    }
    public async Task<LoginResponseDTO> Login(LoginRequestDTO dto)
    {
        User user = await _userService.GetUserByEmail(dto.Email);
        if (user == null) throw new Exception("No user found");
        // var hashedData = new HashDTO { Data = dto.Password };
        // hashedData = _hashingService.HashData(hashedData);
        // if (user.Password!.ToString()!.Equals(hashedData.HashedData!.ToString(), StringComparison.OrdinalIgnoreCase))

        if (BCrypt.Net.BCrypt.EnhancedVerify(dto.Password, Encoding.UTF8.GetString(user.Password!)))
        {
            string AccessToken = _tokenService.GenerateToken(user.Id, user.Email, user.Role);
            RefreshToken rt;
            try
            {
                rt = await _refreshTokenService.GetTokenByUserId(user.Id);
            }
            catch
            {
                rt = await _refreshTokenService.CreateToken(user.Id);
                
            }
            
            var userupdate = new UserAddServiceDTO{
                Name = user.Name,
                Role =user.Role,
                Email =user.Email,
                TeamId= user.TeamId,
                LastloginAt=DateTime.UtcNow
            };
            await _userService.UpdateUser(user.Id, userupdate);
            await _inactivealertservice.UserActivity(user.Id);
            
           
            LoginResponseDTO res = new LoginResponseDTO
            {
                Email = user.Email,
                Role = user.Role,
                AccessToken = AccessToken,
                RefreshToken = rt.Token
            };
            return res;
        }
        else
        {
            throw new Exception("Invalid Password");
        }
    }

    public async Task<bool> Logout(Guid id)
    {
        return await _refreshTokenService.RemoveToken(id);
    }

    public async Task<LoginResponseDTO> Refresh(Guid id)
    {
        var rt = await _refreshTokenService.GetToken(id);
        if (rt == null) throw new Exception("Token expired");

        User user = await _userService.GetUser(rt.UserId);
        if (user == null) throw new Exception("No user found");

        string AccessToken = _tokenService.GenerateToken(user.Id, user.Email, user.Role);
        LoginResponseDTO res = new LoginResponseDTO
        {
            Email = user.Email,
            Role = user.Role,
            AccessToken = AccessToken,
            RefreshToken = rt.Token
        };
        return res;
    }
}
