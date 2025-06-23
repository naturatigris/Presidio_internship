using BlogPlatform.Interfaces;
using BlogPlatform.Models;

namespace BlogPlatform.Validations
{
    public class UserValidationService : IUserValidationService
    {
        private readonly IRepository<string, User> _userRepository;

        public UserValidationService(IRepository<string, User> userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task ValidateUserEmail(string email)
        {
            if (string.IsNullOrWhiteSpace(email))
                throw new ArgumentException("Email is required.");

            var user = await _userRepository.Get(email);
            if (user == null)
                throw new Exception("Invalid user email.");

            if (user.IsDeleted)
                throw new Exception("User is deleted.");
        }
    }
}
