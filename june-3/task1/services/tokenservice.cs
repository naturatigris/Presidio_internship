using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using FirstAPI.Interfaces;
using FirstAPI.Models;
using Microsoft.IdentityModel.Tokens;

namespace FirstAPI.Services
{
    public class TokenService : ITokenService
    {
        private readonly SymmetricSecurityKey _securityKey;
        public TokenService(IConfiguration configuration)
        {
            _securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Keys:JwtTokenKey"]));
        }
        public async  Task<string> GenerateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier,user.Username),
                new Claim(ClaimTypes.Role,user.Role),
            };
            if (user.Doctor != null)
                {
                    claims.Add(new Claim("YearsOfExperience", user.Doctor.YearsOfExperience.ToString()));
                }
            var yearsExpClaim = claims.FirstOrDefault(c => c.Type == "YearsOfExperience");
            if (yearsExpClaim != null)
            {
                Console.WriteLine(yearsExpClaim.Value);
            }
            else
            {
                Console.WriteLine("YearsOfExperience claim not found.");
            }
            var creds = new SigningCredentials(_securityKey, SecurityAlgorithms.HmacSha256Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };
            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}