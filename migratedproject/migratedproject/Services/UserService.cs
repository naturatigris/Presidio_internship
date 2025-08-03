using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChienVHShopOnline.Services
{
    public class UserService : IUserService
    {
        private readonly IRepository<int, User> _userRepository;

        public UserService(IRepository<int, User> userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> AddUser(User user)
        {
            return await _userRepository.Add(user);
        }

        public async Task<User> Get(int key)
        {
            return await _userRepository.Get(key);
        }

        public async Task<IEnumerable<User>> GetAll()
        {
            return await _userRepository.GetAll();
        }

        public async Task<User> UpdateUser(int key, User updatedUser)
        {
            return await _userRepository.Update(key, updatedUser);
        }

        public async Task<User> DeleteUser(int key)
        {
            var user = await _userRepository.Get(key);
            
            return await _userRepository.Delete(key);;
        }
    }
}
