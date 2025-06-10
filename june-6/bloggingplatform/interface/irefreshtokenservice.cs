using BlogPlatform.Models;

namespace BlogPlatform.Interfaces
{
    public interface IRefreshTokenRepository
    {
        Task<RefreshToken?> GetByToken(string token);
        Task Add(RefreshToken token);
        Task Revoke(string token);
    }
}
