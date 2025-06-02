using Bank.Contexts;
using Bank.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bank.Repositories
{
    public class AccountRepository : Repository<int, Account>
    {
        public AccountRepository(BankContext context) : base(context)
        {
        }

        public override async Task<Account> Get(int id)
        {
            return await _BankContext.accounts.FindAsync(id);
        }

        public override async Task<IEnumerable<Account>> GetAll()
        {
            return await _BankContext.accounts.ToListAsync();
        }

        public override async Task<Account> Update(int id, Account account)
        {
            var existing = await Get(id);
            if (existing != null)
            {
                existing.Name = account.Name;
                existing.Balance = account.Balance;
                existing.AccountType = account.AccountType;
                existing.Status = account.Status;

                await _BankContext.SaveChangesAsync();
                return existing;
            }
            throw new Exception("No such account found for update");
        }
    }
}
