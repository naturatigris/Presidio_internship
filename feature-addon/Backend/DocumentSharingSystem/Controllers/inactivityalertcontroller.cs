using DocumentSharingSystem.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace DocumentSharingSystem.Controllers
{
    [ApiController]
    [Route("api/v1/InactivityAlert")]
    public class InactivityAlertController : ControllerBase
    {
        private readonly InactivityalertService _alertService;

        public InactivityAlertController(InactivityalertService alertService)
        {
            _alertService = alertService;
        }


        [HttpPost("dismiss/{alertId}")]
        [Authorize]
        public async Task<IActionResult> DismissAlert(Guid alertId, [FromQuery] Guid dismissedBy)
        {
            var result = await _alertService.DismissAlertAsync(alertId, dismissedBy);

            if (!result)
            {
                return NotFound("Alert not found or could not be dismissed.");
            }

            return Ok(new { message = "Alert dismissed successfully." });
        }

        [HttpGet("active/user/{userId}")]
        [Authorize]
        public async Task<IActionResult> GetUserActiveAlerts(Guid userId)
        {
            var alerts = await _alertService.GetActiveAlertsForUserAsync(userId);
            return Ok(alerts);
        }

    }

}
