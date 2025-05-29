using System.Threading.Tasks;
using Bank.Interface;
using Bank.Models;
using Bank.Repositories;
using Bank.Services;
using Microsoft.AspNetCore.Mvc;


namespace Bank.Controllers
{
    [ApiController]
    [Route("api/transaction")]
    public class TransactionController : ControllerBase
    {
        private readonly TransactionRequestRepositoy _service;

        public TransactionController(TransactionRequestRepositoy service) => _service = service;



        [HttpPost]
        public async Task<IActionResult> PerformTransaction([FromBody] Transaction request)
        {
            try
            {
                switch (request.TransactionType)
                {
                    case "Deposit":
                        await _service.Deposit(request.SourceAccountId, request.Amount);
                        break;
                    case "Withdraw":
                        await _service.Withdraw(request.SourceAccountId, request.Amount);
                        break;
                    case "Transfer":
                        if (!request.DestinationAccountId.HasValue)
                            return BadRequest("Destination account required for transfer.");
                        await _service.Transfer(request.SourceAccountId, request.DestinationAccountId.Value, request.Amount);
                        break;
                    default:
                        return BadRequest("Invalid transaction type.");
                }

                return Ok("Transaction successful.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
    }
}
