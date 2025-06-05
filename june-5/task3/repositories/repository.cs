using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Organization.Contexts;
using Organization.Interfaces;

namespace Organization.Repositories
{
    public class GenericEmployeeRepository<T> : IGenericEmployeeRepository<T> where T : class
    {
        protected readonly OrganizationContext _context;
        protected readonly DbSet<T> _dbSet;

        public GenericEmployeeRepository(OrganizationContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<T> GetByEmailAsync(string email)
        {
            return await _dbSet.FindAsync(email);
        }

        public async Task AddAsync(T entity)
        {
            await _dbSet.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(T entity)
        {
            _dbSet.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(string email)
        {
            var entity = await GetByEmailAsync(email);
            if (entity != null)
            {
                _dbSet.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
