using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using Newtonsoft.Json;
using AutoMapper;
using Microsoft.EntityFrameworkCore;


namespace ChienVHShopOnline.Services
{
    public class OrderService : IOrderService
    {
        private readonly IRepository<int, Order> _repo;
        private readonly IRepository<int, OrderDetail> _detailrepo;

        private readonly IMapper _mapper;
        private readonly ChienVHShopDBEntities _context;

        public OrderService(IRepository<int, Order> repo, IMapper mapper, IRepository<int, OrderDetail> detailrepo, ChienVHShopDBEntities context)
        {
            _repo = repo;
            _mapper = mapper;
            _detailrepo = detailrepo;
            _context = context;

        }

        public async Task<IEnumerable<Order>> GetAllOrdersAsync()
        {
            var orders = await _repo.GetAll();
            return orders;
        }

        public async Task<Order?> GetOrderByIdAsync(int id)
        {
            var order = await _repo.Get(id);
            return order == null ? null : order;
        }

        public async Task<Order> CreateOrderAsync(Order order, List<OrderDetail> orderDetails)
        {
            var created = await _repo.Add(order);
            foreach (var detail in orderDetails)
            {
                detail.OrderID = created.OrderID;
                await _detailrepo.Add(detail);
            }
            return created;
        }

        public async Task<Order> UpdateOrderAsync(int id, Order order)
        {

            var response = await _repo.Update(id, order);
            return response;
        }

        public async Task<Order> DeleteOrderAsync(int id)
        {


            var response = await _repo.Delete(id);
            return response;
        }
        public async Task<PaginationDto<Order>> GetFilteredOrders(int? pageNumber, int? pageSize)
        {
            var response = await _repo.GetAll();
                        var count = response.Count();
            int page = pageNumber ?? 1;
            int size = pageSize ?? 5;
            var totalPages = (int)Math.Ceiling(count / (double)pageSize);

            var paginatedItems = response
                    .Skip((page - 1) * size)
                    .Take(size)
                    .ToList();
            return new PaginationDto<Order>
            {
                List = paginatedItems,
                CurrentPage = pageNumber??1,
                PageSize = pageSize??5,
                TotalPages = totalPages,

                TotalCount =count

            };

        }
        public async Task<Order> UpdateOrderDetailsAsync(int orderId, List<OrderDetail> updatedDetails)
        {
            var existingOrder = await _context.Orders
                .Include(o => o.OrderDetails)
                .FirstOrDefaultAsync(o => o.OrderID == orderId);

            if (existingOrder == null) return null;

            _context.OrderDetails.RemoveRange(existingOrder.OrderDetails);

            foreach (var detail in updatedDetails)
            {
                detail.OrderID = orderId; 
                _context.OrderDetails.Add(detail);
            }

            await _context.SaveChangesAsync();

            return existingOrder;
        }


}

}