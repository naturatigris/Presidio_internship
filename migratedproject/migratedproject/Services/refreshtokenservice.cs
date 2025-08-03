using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Models;
using System.Security.Cryptography;
using System;
using System.Threading.Tasks;

namespace ChienVHShopOnline.Services
{
    public class RefreshTokenService
    {

        public RefreshTokenService()
        {
            // _refreshTokenRepository = refreshTokenRepository;
        }

        public virtual string GenerateToken()
        {
            var randomBytes = new byte[64];
            using var rng = RandomNumberGenerator.Create();
            rng.GetBytes(randomBytes);
            return Convert.ToBase64String(randomBytes);
        }

        // public virtual async Task SaveToken(string token, string userEmail)
        // {
        //     var refreshToken = new RefreshToken
        //     {
        //         Token = token,
        //         UserEmail = userEmail,
        //         Expires = DateTime.UtcNow.AddDays(7),
        //         IsRevoked = false
        //     };

        //     await _refreshTokenRepository.Add(refreshToken);
        // }

        // public virtual async Task<RefreshToken?> Validate(string token)
        // {
        //         var trimmedToken = token.Trim();

        //     var stored = await _refreshTokenRepository.GetByToken(trimmedToken);
        //     if (stored == null || stored.IsRevoked || stored.Expires < DateTime.UtcNow)

        //         return null;

        //     return stored;
        // }

        // public virtual async Task Revoke(string token)
        // {
        //     await _refreshTokenRepository.Revoke(token);
        // }
    }
}
