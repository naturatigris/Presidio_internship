using ChienVHShopOnline.Models;
using System.Collections.Generic;

namespace ChienVHShopOnline.Interfaces
{
    public interface IUserService
    {
        public Task<User> AddUser(User user);
        public Task<User> Get(int key);

        public Task<IEnumerable<User>> GetAll();

        public Task<User> UpdateUser(int key, User user);

        public Task<User> DeleteUser(int key);



    }
}