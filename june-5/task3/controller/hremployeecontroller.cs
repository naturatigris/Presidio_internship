using Microsoft.AspNetCore.Mvc;
using Organization.Models;
using Organization.Services;
using System.Threading.Tasks;
using AutoMapper;
using Organization.Models.DTOs;
using Organization.Interfaces;


namespace Organization.Controllers
{
[ApiController]
[Route("api/hr")]
public class HREmployeeController : ControllerBase
{
    private readonly HREmployeeService _hrEmployeeService;
    private readonly IMapper _mapper;
        private readonly IEncryptionService _encryptionService;

        public HREmployeeController(HREmployeeService hrEmployeeService, IMapper mapper, IEncryptionService encryptionService)
        {
            _hrEmployeeService = hrEmployeeService;
            _mapper = mapper;
            _encryptionService = encryptionService;
        }

    [HttpPost("create")]
    public async Task<IActionResult> Create([FromBody] HREmployeeDto hrDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var hrEmployee = _mapper.Map<HREmployee>(hrDto);
            hrEmployee.Role = "Admin";
    var encryptedResult = await _encryptionService.EncryptData(new EncryptModel { Data = hrDto.Password });
    hrEmployee.PasswordHash= encryptedResult.EncryptedData;
    hrEmployee.HashKey = encryptedResult.HashKey;
        await _hrEmployeeService.AddAsync(hrEmployee);
        return CreatedAtAction(nameof(GetByEmail), new { email = hrEmployee.Email }, hrEmployee);
    }

    [HttpGet("{email}")]
    public async Task<IActionResult> GetByEmail(string email)
    {
        var employee = await _hrEmployeeService.GetByEmailAsync(email);
        if (employee == null) return NotFound();
        return Ok(employee);
    }
}
}
