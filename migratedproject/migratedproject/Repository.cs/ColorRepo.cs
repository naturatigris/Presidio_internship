using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Models;
using Microsoft.EntityFrameworkCore;

namespace ChienVHShopOnline.Repositories
{
    public class ColorRepository : Repository<int, Color>
    {
        public ColorRepository(ChienVHShopDBEntities context) : base(context)
        {
        }

        public override async Task<Color> Get(int key)
        {
            return await _Context.Colors.FindAsync(key);


        }

        public override async Task<IEnumerable<Color>> GetAll()
        {
            return await _Context.Colors.ToListAsync();
        }
    }
}
