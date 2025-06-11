using BlogPlatform.Contexts;
using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using Microsoft.EntityFrameworkCore;

namespace BlogPlatform.Repositories
{
    public class UserRepository : Repository<string, User>
    {
        public UserRepository(BlogPlatformContext context) : base(context)
        {
        }

            public override async Task<User> Get(string key)
            {
            return await _Context.Users.SingleOrDefaultAsync(u => u.Email == key && !u.IsDeleted);
            }

        public override async Task<IEnumerable<User>> GetAll()
        {
            var users = await _Context.Users.Where(i=>!i.IsDeleted).ToArrayAsync();
            return  users;
        }
    }
}
