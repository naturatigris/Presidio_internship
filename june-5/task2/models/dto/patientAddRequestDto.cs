namespace FirstAPI.Models.DTOs.DoctorSpecialities{

public class PatientAddRequestDto
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Email { get; set; }  // must match User.Username
    public string Phone { get; set; }
    public string Password { get; set; }  // for User password
}
}