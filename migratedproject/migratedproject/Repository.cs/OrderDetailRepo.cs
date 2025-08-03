using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Models;
using Microsoft.EntityFrameworkCore;

namespace ChienVHShopOnline.Repositories
{
    public class OrderDetailRepository : Repository<int, OrderDetail>
    {
        public OrderDetailRepository(ChienVHShopDBEntities context) : base(context)
        {
        }

        public override async Task<OrderDetail> Get(int key)
        {
            return await _Context.OrderDetails.FindAsync(key);


        }

        public override async Task<IEnumerable<OrderDetail>> GetAll()
        {
            return await _Context.OrderDetails.ToListAsync();
        }
    }
}
