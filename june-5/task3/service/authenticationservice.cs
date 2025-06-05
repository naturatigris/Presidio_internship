using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Organization.Interfaces;
using Organization.Models;
using Organization.Models.DTOs;

namespace Organization.Services
{
    public class EmployeeAuthenticationService
    {
        private readonly IEncryptionService _encryptionService;
        private readonly IGenericEmployeeRepository<Employee> _employeeRepository;
        private readonly IConfiguration _configuration;

        public EmployeeAuthenticationService(IEncryptionService encryptionService,
                                             IGenericEmployeeRepository<Employee> employeeRepository,
                                             IConfiguration configuration)
        {
            _encryptionService = encryptionService;
            _employeeRepository = employeeRepository;
            _configuration = configuration;
        }

        public async Task<EmployeeLoginResponse> LoginAsync(EmployeeLoginRequest loginRequest)
        {
            try
            {
                var employee = await _employeeRepository.GetByEmailAsync(loginRequest.Email);

                if (employee == null || employee.HashKey == null || employee.PasswordHash == null)
                    throw new Exception("Invalid email or password.");

                // Hash input password using stored salt (HashKey)
                var encrypted = await _encryptionService.EncryptData(new EncryptModel
                {
                    Data = loginRequest.Password,
                    HashKey = employee.HashKey
                });

                if (!employee.PasswordHash.SequenceEqual(encrypted.EncryptedData))
                    throw new Exception("Invalid email or password.");

                var role = employee.Department == "HR" ? "Admin" : "Worker";

                // Create JWT token
                var claims = new List<Claim>
    {
        new Claim(ClaimTypes.Email, employee.Email),
        new Claim(ClaimTypes.Role, role),
        new Claim("Department", employee.Department)
    };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Keys:JwtTokenKey"]));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.UtcNow.AddHours(1),
                    SigningCredentials = creds
                };

                var tokenHandler = new JwtSecurityTokenHandler();
                var token = tokenHandler.CreateToken(tokenDescriptor);

                return new EmployeeLoginResponse
                {
                    Email = employee.Email,
                    Token = tokenHandler.WriteToken(token)
                };
            }
            catch (Exception e)
            {
        throw new Exception("aauth"+e.Message);
    }
}
    }
}
