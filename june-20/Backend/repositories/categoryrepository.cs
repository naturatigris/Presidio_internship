using BlogPlatform.Contexts;
using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using Microsoft.EntityFrameworkCore;

namespace BlogPlatform.Repositories
{
    public class CategoryRepository : Repository<Guid, Category>
    {
        public CategoryRepository(BlogPlatformContext context) : base(context)
        {
        }

        public override async Task<Category> Get(Guid key)
        {
            var c = await _Context.Categories.SingleOrDefaultAsync(p => p.Id == key);

            return c ?? throw new Exception("No Categories with the given ID");
        }

        public override async Task<IEnumerable<Category>> GetAll()
        {
            var c = await _Context.Categories.ToListAsync();
            return c;
        }
    }
}
