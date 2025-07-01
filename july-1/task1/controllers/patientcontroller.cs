
using System.Threading.Tasks;
using FirstAPI.Interfaces;
using FirstAPI.Models;
using FirstAPI.Models.DTOs.DoctorSpecialities;
using FirstAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace FirstAPI.Controllers
{


    [ApiController]
    [Route("/api/[controller]")]
    public class PatientController : ControllerBase
    {
        private readonly IPatientService _patientService;

        public PatientController(IPatientService patientService)
        {
            _patientService = patientService;
        }

[HttpPost]
public async Task<ActionResult<object>> PostPatient([FromBody] PatientAddRequestDto dto)
{
    try
    {
        var (patient, token) = await _patientService.AddPatient(dto);
        if (patient == null)
            return BadRequest("Unable to add patient");

        return Created("", new
        {
            patient =patient,
            token = token
        });
    }
    catch (Exception e)
    {
        return BadRequest(e.Message);
    }
}
    }
}
