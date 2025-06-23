using BlogPlatform.Models;

namespace BlogPlatform.Interfaces
{
    public interface ITokenService
    {
        public Task<string> GenerateToken(User user);
    }
}