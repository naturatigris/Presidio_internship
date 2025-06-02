using Bank.Contexts;
using Bank.Interface;
using Bank.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Bank.Repositories
{
    public class TransactionRequestRepositoy : ITransactionService
    {
        private readonly BankContext _Bankcontext;

        public TransactionRequestRepositoy(BankContext context)
        {
            _Bankcontext = context;
        }

        public async Task Deposit(int accountId, decimal amount)
        {
            using var transaction = await _Bankcontext.Database.BeginTransactionAsync();
            try
            {
                var account = await _Bankcontext.accounts.FindAsync(accountId);
                if (account == null)
                    throw new Exception("Account not found.");

                account.Balance += amount;

                _Bankcontext.transactions.Add(new Transaction
                {
                    SourceAccountId = accountId,
                    TransactionType = "Deposit",
                    Amount = amount
                });

                await _Bankcontext.SaveChangesAsync();
                await transaction.CommitAsync();
            }
            catch
            {
                await transaction.RollbackAsync();
                throw;
            }
        }

        public async Task Withdraw(int accountId, decimal amount)
        {
            using var transaction = await _Bankcontext.Database.BeginTransactionAsync();
            try
            {
                var account = await _Bankcontext.accounts.FindAsync(accountId);
                if (account == null)
                    throw new Exception("Account not found.");

                if (account.Balance < amount)
                    throw new Exception("Insufficient balance.");

                account.Balance -= amount;

                _Bankcontext.transactions.Add(new Transaction
                {
                    SourceAccountId = accountId,
                    TransactionType = "Withdraw",
                    Amount = amount
                });

                await _Bankcontext.SaveChangesAsync();
                await transaction.CommitAsync();
            }
            catch
            {
                await transaction.RollbackAsync();
                throw;
            }
        }

        public async Task Transfer(int fromAccountId, int toAccountId, decimal amount)
        {
            using var transaction = await _Bankcontext.Database.BeginTransactionAsync();
            try
            {
                var fromAccount = await _Bankcontext.accounts.FindAsync(fromAccountId);
                var toAccount = await _Bankcontext.accounts.FindAsync(toAccountId);

                if (fromAccount == null || toAccount == null)
                    throw new Exception("One or both accounts not found.");

                if (fromAccount.Balance < amount)
                    throw new Exception("Insufficient balance in source account.");

                fromAccount.Balance -= amount;
                toAccount.Balance += amount;

                _Bankcontext.transactions.Add(new Transaction
                {
                    SourceAccountId = fromAccountId,
                    DestinationAccountId = toAccountId,
                    TransactionType = "Transfer",
                    Amount = amount
                });

                await _Bankcontext.SaveChangesAsync();
                await transaction.CommitAsync();
            }
            catch
            {
                await transaction.RollbackAsync();
                throw;
            }
        }

    }

}
