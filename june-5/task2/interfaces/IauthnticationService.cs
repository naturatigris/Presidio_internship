
using FirstAPI.Models.DTOs.DoctorSpecialities;

namespace FirstAPI.Interfaces
{
    public interface IAuthenticationService
    {
        public Task<EmployeeLoginResponse> Login(EmployeeLoginRequest emp);
    }
}