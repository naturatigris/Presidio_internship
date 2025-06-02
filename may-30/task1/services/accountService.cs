using Bank.Repositories;
using Bank.Models;
using System.Threading.Tasks;
namespace Bank.Services
{
    public class AccountService
    {
        private readonly AccountRepository _accountrepository;
        public AccountService(AccountRepository accountRepository)
        {
            _accountrepository = accountRepository;
        }
        public async Task<Account> CreateAccount(string name, decimal initialDeposit)
        {
            var account = new Account
            {
                Id = await GenerateId(),
                Name = name,
                Balance = initialDeposit
            };
            await _accountrepository.Add(account);
            return account;
        }
        public async Task<Account> GetAccount(int id) => await _accountrepository.Get(id);
        public async Task<int> GenerateId()
            {
                var acc = await _accountrepository.GetAll();

                if (acc == null || !acc.Any())
                {
                    return 101;
                }

                int maxId = acc.Max(d => d.Id);
                return maxId + 1;
            }


    }
}