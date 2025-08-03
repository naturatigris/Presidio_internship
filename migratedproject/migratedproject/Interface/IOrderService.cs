using ChienVHShopOnline.Models;
using System.Collections.Generic;

namespace ChienVHShopOnline.Interfaces
{
    public interface IOrderService
    {
        Task<IEnumerable<Order>> GetAllOrdersAsync();
        Task<Order?> GetOrderByIdAsync(int id);
        Task<Order> CreateOrderAsync(Order dto, List<OrderDetail> orderdetail);
        Task<Order> UpdateOrderAsync(int id, Order dto);
        Task<Order> DeleteOrderAsync(int id);
        Task<PaginationDto<Order>> GetFilteredOrders(int? page, int? pageSize);
        Task<Order> UpdateOrderDetailsAsync(int orderId, List<OrderDetail> updatedDetails);

        
        
    }



}