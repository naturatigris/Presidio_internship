using System.Collections.Generic;
using System.Threading.Tasks;
using Organization.Models;

namespace Organization.Interfaces
{
    public interface IITEmployeeRepository : IGenericEmployeeRepository<ITEmployee>
    {
        Task<IEnumerable<ITEmployee>> GetBySpecializationAsync(string specializationName);
    }
}
