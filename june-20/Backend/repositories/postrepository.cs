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
            var post = await _Context.Posts.Include(p => p.Categories)

    .Include(p => p.User)
    .Include(p => p.Images)
    .Include(p=>p.Comments)
.SingleOrDefaultAsync(p => p.Id == key);

            return post;
        }

public override async Task<IEnumerable<Post>> GetAll()
{
    var posts = await _Context.Posts.Where(p => !p.IsDeleted)
        .Include(p => p.Categories)

    .Include(p => p.User)
    .Include(p => p.Images)
    .Include(p=>p.Comments)

    .ToListAsync();
;


    return posts;
}
    }
}
