using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Models;
using Microsoft.EntityFrameworkCore;

namespace ChienVHShopOnline.Repositories
{
    public class CategoryRepository : Repository<int, Category>
    {
        public CategoryRepository(ChienVHShopDBEntities context) : base(context)
        {
        }

        public override async Task<Category> Get(int key)
        {
            return await _Context.Categories.FindAsync(key);


        }

        public override async Task<IEnumerable<Category>> GetAll()
        {
            return await _Context.Categories.OrderBy(x => x.Name).ToListAsync();
        }
    }
}
