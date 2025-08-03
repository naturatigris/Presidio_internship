using ChienVHShopOnline.Models;
namespace ChienVHShopOnline.Models
{
    public class PlaceOrderDto
{
    public string OrderName { get; set; }
    public string PaymentType { get; set; }
    public string Status { get; set; }
    
    public string CustomerName { get; set; }
    public string CustomerPhone { get; set; }
    public string CustomerEmail { get; set; }
    public string CustomerAddress { get; set; }

    public double? TotalAmount { get; set; } 
    public List<OrderItemDto> Items { get; set; }
}


}