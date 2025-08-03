using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;

namespace ChienVHShopOnline.Repositories
{
    public  abstract class Repository<K, T> : IRepository<K, T> where T:class
    {
        protected readonly ChienVHShopDBEntities _Context;

        public Repository(ChienVHShopDBEntities Context)
        {
            _Context = Context;
        }
        public async Task<T> Add(T item)
        {
            _Context.Set<T>().Add(item);           
            await _Context.SaveChangesAsync();
            return item;
        }

        public async Task<T> Delete(K key)
        {
            var item = await Get(key);
            if (item != null)
            {
                _Context.Remove(item);
                await _Context.SaveChangesAsync();
                return item;
            }
            throw new Exception("No such item found for deleting");
        }

        public abstract Task<T> Get(K key);


        public abstract Task<IEnumerable<T>> GetAll();


        public async Task<T> Update(K key, T item)
        {
            var myItem = await Get(key);
            if (myItem != null)
            {
                _Context.Entry(myItem).CurrentValues.SetValues(item);


                await _Context.SaveChangesAsync();
                return item;
            }
            throw new Exception("No such item found for updation");
        }
    }
}
