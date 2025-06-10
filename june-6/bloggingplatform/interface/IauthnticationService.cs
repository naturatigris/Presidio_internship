
using BlogPlatform.Models.DTOs;

namespace BlogPlatform.Interfaces
{
    public interface IAuthenticationService
    {
        public Task<UserLoginResponse> Login(UserLoginRequest user);
    }
}