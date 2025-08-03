using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Services;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace ChienVHShopOnline.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderService _service;

        public OrdersController(IOrderService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetAll()
        {
            return Ok(await _service.GetAllOrdersAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> Get(int id)
        {
            var order = await _service.GetOrderByIdAsync(id);
            if (order == null) return NotFound();
            return Ok(order);
        }

        [HttpPost]
        public async Task<ActionResult<Order>> Create([FromBody] PlaceOrderDto dto)
        {
            if (dto == null || dto.Items == null || !dto.Items.Any())
                return BadRequest("Invalid order data.");

             var order = new Order
            {
                OrderName = dto.OrderName,
                OrderDate = DateTime.UtcNow,
                PaymentType = dto.PaymentType,
                Status = dto.Status,
                CustomerName = dto.CustomerName,
                CustomerPhone = dto.CustomerPhone,
                CustomerEmail = dto.CustomerEmail,
                CustomerAddress = dto.CustomerAddress,
            };

            var orderDetails = dto.Items.Select(i => new OrderDetail
            {
                ProductID = i.ProductId,
                Quantity = i.Quantity,
                Price = i.UnitPrice,
                Order = order 
            }).ToList();

            var createdOrder = await _service.CreateOrderAsync(order, orderDetails);
            return CreatedAtAction(nameof(Get), new { id = createdOrder.OrderID }, createdOrder); // ✅
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Order>> Update(int id,PlaceOrderDto dto)
        {
            

            var oldorder = await _service.GetOrderByIdAsync(id);
            var order = new Order
            {
                OrderID=id,
                OrderName = dto.OrderName??oldorder.OrderName,
                OrderDate = oldorder.OrderDate,
                PaymentType = dto.PaymentType??oldorder.PaymentType,
                Status = dto.Status??oldorder.Status,
                CustomerName = dto.CustomerName??oldorder.CustomerName,
                CustomerPhone = dto.CustomerPhone??oldorder.CustomerPhone,
                CustomerEmail = dto.CustomerEmail??oldorder.CustomerEmail,
                CustomerAddress = dto.CustomerAddress??oldorder.CustomerAddress,
            };

            if (dto.Items != null && dto.Items.Any())
            {
                var updatedDetails = dto.Items.Select(i => new OrderDetail
                {
                    ProductID = i.ProductId,
                    Quantity = i.Quantity,
                    Price = i.UnitPrice,
                    OrderID = id
                }).ToList();

                await _service.UpdateOrderDetailsAsync(id, updatedDetails); // You need to implement this if replacing details
            }
            if (order == null) return BadRequest();
            var updated = await _service.UpdateOrderAsync(id, order);
            return updated != null ? Ok(updated) : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Order>> Delete(int id)
        {
            var order = await _service.GetOrderByIdAsync(id);
            if (order == null) return BadRequest();

            var deleted = await _service.DeleteOrderAsync(id);
            return deleted != null ? Ok(deleted) : NotFound();
        }
        [HttpGet("paged")]
        public async Task<ActionResult<PaginationDto<Order>>> GetPagedOrders(int? pageNumber, int? pageSize)
        {
            var result = await _service.GetFilteredOrders(pageNumber, pageSize);
            return Ok(result);
        }
}

}