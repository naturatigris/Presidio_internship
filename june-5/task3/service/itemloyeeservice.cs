using System.Collections.Generic;
using System.Threading.Tasks;
using Organization.Interfaces;
using Organization.Models;

namespace Organization.Services
{
    public class ITEmployeeService
    {
        private readonly IITEmployeeRepository _itEmployeeRepository;

        public ITEmployeeService(IITEmployeeRepository itEmployeeRepository)
        {
            _itEmployeeRepository = itEmployeeRepository;
        }

        public async Task<IEnumerable<ITEmployee>> GetAllAsync()
        {
            return await _itEmployeeRepository.GetAllAsync();
        }

        public async Task<ITEmployee> GetByEmailAsync(string email)
        {
            return await _itEmployeeRepository.GetByEmailAsync(email);
        }

        public async Task AddAsync(ITEmployee employee)
        {
            await _itEmployeeRepository.AddAsync(employee);
        }

        public async Task UpdateAsync(ITEmployee employee)
        {
            await _itEmployeeRepository.UpdateAsync(employee);
        }

        public async Task DeleteAsync(string email)
        {
            await _itEmployeeRepository.DeleteAsync(email);
        }

        public async Task<IEnumerable<ITEmployee>> GetBySpecializationAsync(string specializationName)
        {
            return await _itEmployeeRepository.GetBySpecializationAsync(specializationName);
        }
    }
}
