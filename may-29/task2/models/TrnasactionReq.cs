namespace Bank.Models
{
    public class Transaction
    {
        public Guid Id { get; set; } = Guid.NewGuid(); 

        public int SourceAccountId { get; set; }
        public Account SourceAccount { get; set; } = null!;

        public int? DestinationAccountId { get; set; }
        public Account? DestinationAccount { get; set; }

        public string TransactionType { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public DateTime Timestamp { get; set; } = DateTime.UtcNow;
    }
}
