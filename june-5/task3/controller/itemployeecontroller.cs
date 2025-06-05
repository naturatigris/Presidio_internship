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
[Route("api/it")]
public class ITEmployeeController : ControllerBase
{
    private readonly ITEmployeeService _itEmployeeService;
    private readonly IMapper _mapper;
        private readonly IEncryptionService _encryptionService;


        public ITEmployeeController(ITEmployeeService itEmployeeService, IMapper mapper,IEncryptionService encryptionService)
        {
            _itEmployeeService = itEmployeeService;
            _mapper = mapper;
            _encryptionService = encryptionService;

        }

    [HttpPost("create")]
    public async Task<IActionResult> Create([FromBody] ITEmployeeDto itDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var itEmployee = _mapper.Map<ITEmployee>(itDto);
        foreach (var spec in itEmployee.Specializations)
{
    spec.ITEmployeeEmail = itEmployee.Email;
}

    var encryptedResult = await _encryptionService.EncryptData(new EncryptModel { Data = itDto.Password });

    itEmployee.PasswordHash= encryptedResult.EncryptedData;
    itEmployee.HashKey = encryptedResult.HashKey;

        await _itEmployeeService.AddAsync(itEmployee);
        return CreatedAtAction(nameof(GetByEmail), new { email = itEmployee.Email }, itEmployee);
    }

    [HttpGet("{email}")]
    public async Task<IActionResult> GetByEmail(string email)
    {
        var employee = await _itEmployeeService.GetByEmailAsync(email);
        if (employee == null) return NotFound();
        return Ok(employee);
    }
}
}
