using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Organization.Contexts;
using Organization.Interfaces;
using Organization.Models;

namespace Organization.Repositories
{
    public class ITEmployeeRepository : GenericEmployeeRepository<ITEmployee>, IITEmployeeRepository
    {
        public ITEmployeeRepository(OrganizationContext context) : base(context) { }

        public async Task<IEnumerable<ITEmployee>> GetBySpecializationAsync(string specializationName)
        {
            return await _context.Employees
                .OfType<ITEmployee>() 
                .Include(e => e.Specializations)
                .Where(e => e.Specializations.Any(s => s.Name == specializationName))
                .ToListAsync<ITEmployee>();
        }
    }
}
