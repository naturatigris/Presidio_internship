using System;
using WholeApplication.Interfaces;
using WholeApplication.Exceptions;

using System.Collections.Generic;

namespace WholeApplication.Repositories
{
    public abstract class Repository<K, T> : IRepository<K, T> where T : class
    {
        protected List<T> _items = new List<T>();

        protected abstract K GenerateId();
        
        public abstract ICollection<T> GetAll();

        public virtual T Add(T item)
        {
            var id = GenerateId();

            var property = typeof(T).GetProperty("Id");
            Console.WriteLine(property);
            if (property != null)
            {
                property.SetValue(item, id);
                var updatedIdValue = property.GetValue(item); 
                Console.WriteLine($"Set Id property to: {updatedIdValue}");

            }

            if (_items.Contains(item))
            {
                throw new DuplicateEntityException("Item already exists");
            }

            _items.Add(item);
            return item;
        }

        public abstract T GetById(K key);
    }
}
