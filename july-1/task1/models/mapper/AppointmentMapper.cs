using FirstAPI.Models;
using FirstAPI.Models.DTOs.DoctorSpecialities;

namespace FirstAPI.Misc
{
    public class AppointmentMapper
    {
        public Appointmnet? MapAppointment(AppointmentAddDto addRequestDto)
        {
            Appointmnet a = new();
            a.PatientId = addRequestDto.PatientId;
            a.DoctorId = addRequestDto.DoctorId;
            a.AppointmnetDateTime = addRequestDto.AppointmnetDateTime;
            a.Status = "Scheduled";
            a.AppointmnetNumber = Guid.NewGuid().ToString();

            return a;
        }
    }
}