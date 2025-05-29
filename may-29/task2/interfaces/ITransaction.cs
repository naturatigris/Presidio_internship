namespace Bank.Interface
{
    public interface ITransactionService
    {
        Task Deposit(int accountId, decimal amount);
        Task Withdraw(int accountId, decimal amount);
        Task Transfer(int fromAccountId, int toAccountId, decimal amount);
    
}

}