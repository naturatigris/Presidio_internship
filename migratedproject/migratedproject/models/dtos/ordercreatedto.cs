namespace ChienVHShopOnline.Models
{
public class OrderCreateDto
{
    public string OrderName { get; set; }
    public DateTime? OrderDate { get; set; }
    public string PaymentType { get; set; }
    public string Status { get; set; }
    public string CustomerName { get; set; }
    public string CustomerPhone { get; set; }
    public string CustomerEmail { get; set; }
    public string CustomerAddress { get; set; }
}

}