using System.Threading.Tasks;
using Bank.Interface;
using Bank.Models;
using Bank.Services;
using Microsoft.AspNetCore.Mvc;


namespace Bank.Controllers
{
[ApiController]
[Route("api/account")]
public class AccountController : ControllerBase
{
    private readonly AccountService _service;

    public AccountController(AccountService service) => _service = service;

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Account account)
    {
        var newAccount = await _service.CreateAccount(account.Name, account.Balance);
        return Ok(newAccount);
    }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var account = await _service.GetAccount(id);
            if (account == null) return NotFound();
            return Ok(account);
        }
}

}