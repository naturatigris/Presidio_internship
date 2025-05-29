using Bank.Contexts;
using Bank.Interface;

namespace Bank.Repositories
{
    public abstract class Repository<K, T> : IRepository<K, T> where T : class
    {
        protected readonly BankContext _BankContext;

        public Repository(BankContext BankContext)
        {
            _BankContext = BankContext;
        }

        public async Task<T> Add(T item)
        {
            _BankContext.Add(item);
            await _BankContext.SaveChangesAsync();
            return item;
        }

        public async Task<T> Delete(K key)
        {
            var item = await Get(key);
            if (item != null)
            {
                _BankContext.Remove(item);
                await _BankContext.SaveChangesAsync();
                return item;
            }
            throw new Exception("No such item found for deleting");
        }

        public abstract Task<T> Get(K key);
        public abstract Task<IEnumerable<T>> GetAll();
        public abstract Task<T> Update(K key, T item); 
    }
}
