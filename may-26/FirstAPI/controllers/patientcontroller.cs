using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[ApiController]
[Route("api/[controller]")]
public class PatientController : ControllerBase
{
    static List<Patient> patients = new List<Patient>
    {
        new Patient { Id = 1, Name = "John", Age = 30 },
        new Patient { Id = 2, Name = "Emma", Age = 25 }
    };

    [HttpGet]
    public ActionResult<IEnumerable<Patient>> GetPatients()
    {
        return Ok(patients);
    }

    [HttpPost]
    public ActionResult<Patient> PostPatient([FromBody] Patient patient)
    {
        patients.Add(patient);
        return Created("", patient);
    }

    [HttpDelete]
    public ActionResult<Patient> DeletePatient(int id)
    {
        var patientToRemove = patients.FirstOrDefault(p => p.Id == id);
        if (patientToRemove == null)
        {
            return NotFound();
        }

        patients.Remove(patientToRemove);
        return Ok(patientToRemove);
    }

    [HttpPut]
    public ActionResult<Patient> PutPatient([FromBody] Patient patient, int id)
    {
        int index = patients.FindIndex(p => p.Id == id);
        if (index == -1)
        {
            return NotFound();
        }

        patients[index].Name = patient.Name;
        patients[index].Age = patient.Age;

        return Ok(patients[index]);
    }
}
