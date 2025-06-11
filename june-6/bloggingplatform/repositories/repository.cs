using BlogPlatform.Contexts;
using BlogPlatform.Interfaces;

namespace BlogPlatform.Repositories
{
    public  abstract class Repository<K, T> : IRepository<K, T> where T:class
    {
        protected readonly BlogPlatformContext _Context;

        public Repository(BlogPlatformContext Context)
        {
            _Context = Context;
        }
        public async Task<T> Add(T item)
        {
            _Context.Add(item);
            await _Context.SaveChangesAsync();//generate and execute the DML quries for the objects whse state is in ['added','modified','deleted'],
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
                 _Context.Entry(myItem).Property("IsDeleted").IsModified = true;


                await _Context.SaveChangesAsync();
                return item;
            }
            throw new Exception("No such item found for updation");
        }
    }
}
