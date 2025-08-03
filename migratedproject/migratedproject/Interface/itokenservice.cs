using ChienVHShopOnline.Models;

namespace ChienVHShopOnline.Interfaces
{
    public interface ITokenService
    {
        public Task<string> GenerateToken(User user);
    }
}