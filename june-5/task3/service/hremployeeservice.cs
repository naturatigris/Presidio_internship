using System.Collections.Generic;
using System.Threading.Tasks;
using Organization.Interfaces;
using Organization.Models;

namespace Organization.Services
{
    public class HREmployeeService
    {
        private readonly IGenericEmployeeRepository<HREmployee> _hrEmployeeRepository;

        public HREmployeeService(IGenericEmployeeRepository<HREmployee> hrEmployeeRepository)
        {
            _hrEmployeeRepository = hrEmployeeRepository;
        }

        public async Task<IEnumerable<HREmployee>> GetAllAsync()
        {
            return await _hrEmployeeRepository.GetAllAsync();
        }

        public async Task<HREmployee> GetByEmailAsync(string email)
        {
            return await _hrEmployeeRepository.GetByEmailAsync(email);
        }

        public async Task AddAsync(HREmployee employee)
        {
            await _hrEmployeeRepository.AddAsync(employee);
        }

        public async Task UpdateAsync(HREmployee employee)
        {
            await _hrEmployeeRepository.UpdateAsync(employee);
        }

        public async Task DeleteAsync(string email)
        {
            await _hrEmployeeRepository.DeleteAsync(email);
        }
    }
}
