using System.Collections.Generic;
using System.Threading.Tasks;

namespace Organization.Interfaces
{
    public interface IGenericEmployeeRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByEmailAsync(string email);
        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(string email);
    }
}
