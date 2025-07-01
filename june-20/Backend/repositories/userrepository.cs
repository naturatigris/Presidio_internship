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
    var user = await _Context.Users
        .Include(u => u.Posts)
        .Include(u => u.Comments)
        .SingleOrDefaultAsync(u => u.Email == key);

    if (user != null)
    {
        user.Posts = user.Posts.Where(p => !p.IsDeleted).ToList();
        user.Comments = user.Comments.Where(c => !c.IsDeleted).ToList();
    }

    return user;
}

        public override async Task<IEnumerable<User>> GetAll()
        {
            var users = await _Context.Users.Where(i=>!i.IsDeleted).ToArrayAsync();
            return  users;
        }
    }
}
