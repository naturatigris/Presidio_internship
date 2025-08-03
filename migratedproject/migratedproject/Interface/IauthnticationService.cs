
using ChienVHShopOnline.Models;

namespace ChienVHShopOnline.Interfaces
{
    public interface IAuthenticationService
    {
        public Task<UserLoginResponse> Login(UserLoginRequest user);
    }
}