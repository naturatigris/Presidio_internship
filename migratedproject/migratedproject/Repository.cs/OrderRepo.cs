using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Models;
using Microsoft.EntityFrameworkCore;

namespace ChienVHShopOnline.Repositories
{
    public class OrderRepository : Repository<int, Order>
    {
        public OrderRepository(ChienVHShopDBEntities context) : base(context)
        {
        }

        public override async Task<Order> Get(int key)
        {
            return await _Context.Orders.Include(p => p.OrderDetails).FirstOrDefaultAsync(p => p.OrderID == key);



        }

        public override async Task<IEnumerable<Order>> GetAll()
        {
            return await _Context.Orders.ToListAsync();
        }
    }
}
