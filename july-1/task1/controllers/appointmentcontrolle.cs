using FirstAPI.Interfaces;
using FirstAPI.Models;
using FirstAPI.Models.DTOs.DoctorSpecialities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FirstAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppointmentController : ControllerBase
    {
        private readonly IAppointmentService _appointmentService;

        public AppointmentController(IAppointmentService appointmentService)
        {
            _appointmentService = appointmentService;
        }

        [HttpPost("add-appointment")]
        public async Task<IActionResult> AddAppointment(AppointmentAddDto appointmentDto)
        {
            try
            {
                var result = await _appointmentService.AddAppointment(appointmentDto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Failed to add appointment: {ex.Message}" });
            }
        }

        [Authorize(Policy = "YearsOfExperienceCheck")]
        [HttpPost("cancel-appointment")]
        public async Task<IActionResult> CancelAppointment(string appointmentId)
        {
            try
            {
                var result = await _appointmentService.CancelAppointment(appointmentId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Failed to cancel appointment: {ex.Message}" });
            }
        }
    }
}
