namespace Bank.Models
{
    public class Account
    {
        public int Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public decimal Balance { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public string AccountType { get; set; } = "Savings"; 
        public string Status { get; set; } = "Active"; 

    
}

}