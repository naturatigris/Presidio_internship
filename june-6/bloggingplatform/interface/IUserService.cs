using BlogPlatform.Models.DTOs;
using BlogPlatform.Models;
using System.Collections.Generic;

namespace BlogPlatform.Interfaces
{
    public interface IUserService
    {
        public Task<User> AddUser(User user, string PerformedByEmail);
        public Task<User> Get(string key);

        public Task<IEnumerable<User>> GetAll();

        public Task<User> UpdateUser(string key, User user, string PerformedByEmail);

        public Task<User> DeleteUser(string key, string PerformedByEmail);
        public Task<IEnumerable<Post>> GetPostByUser(string key);
       public  Task<IEnumerable<User>> GetAllFiltereduser(string? role, string? status, string? sortOrder, int? pageNumber, int? pageSize);



    }
}