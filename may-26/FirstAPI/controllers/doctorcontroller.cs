using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("/api/[controller]")]
public class DoctorController : ControllerBase
{
    static List<Doctor> doctors = new List<Doctor>
    {
        new Doctor{Id=101,Name="Ramu"},
        new Doctor{Id=102,Name="Somu"},
    };
    [HttpGet]
    public ActionResult<IEnumerable<Doctor>> GetDoctors()
    {
        return Ok(doctors);
    }
    [HttpPost]
    public ActionResult<Doctor> PostDoctor([FromBody] Doctor doctor)
    {
        doctors.Add(doctor);
        return Created("", doctor);
    }

    [HttpDelete]
    public ActionResult<Doctor> DeleteDoctor([FromBody] Doctor doctor, int id)
    {
        var doctorToRemove = doctors.FirstOrDefault(p => p.Id == id);
        if (doctorToRemove == null)
        {
            return NotFound();
        }
        doctors.Remove(doctorToRemove);
        return Ok(doctorToRemove);
    }

    [HttpPut]
    public ActionResult<Doctor> PutDoctor([FromBody] Doctor doctor, int id)
    {
        int index = doctors.FindIndex(d => d.Id == id);
        if (index == null)
        {
            return NotFound();
        }
        doctors[index].Name = "sriya";
        return Ok(doctors[index]);
    }


}
