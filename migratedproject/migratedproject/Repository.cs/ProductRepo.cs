using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Models;
using Microsoft.EntityFrameworkCore;

namespace ChienVHShopOnline.Repositories
{
    public class ProductRepository : Repository<int, Product>
    {
        public ProductRepository(ChienVHShopDBEntities context) : base(context)
        {
        }

        public override async Task<Product> Get(int key)
        {
            return await _Context.Products.Include(p => p.Model).FirstOrDefaultAsync(p => p.ProductId == key);


        }

        public override async Task<IEnumerable<Product>> GetAll()
        {
            return await _Context.Products.Include(m=>m.Model).ToListAsync();
        }
    }
}
