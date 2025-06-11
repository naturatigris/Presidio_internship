using BlogPlatform.Contexts;
using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using Microsoft.EntityFrameworkCore;

namespace BlogPlatform.Repositories
{
    public class PostRepository : Repository<Guid, Post>
    {
        public PostRepository(BlogPlatformContext context) : base(context)
        {
        }

        public override async Task<Post> Get(Guid key)
        {
            var post = await _Context.Posts.SingleOrDefaultAsync(p => p.Id == key);

            return post;
        }

public override async Task<IEnumerable<Post>> GetAll()
{
    var posts = await _Context.Posts.Where(p => !p.IsDeleted)
    .Include(p => p.User)
    .ToListAsync();
;


    return posts;
}
    }
}
