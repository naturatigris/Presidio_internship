using FirstAPI.Models;
using FirstAPI.Models.DTOs.DoctorSpecialities;


namespace FirstAPI.Interfaces
{
    public interface IAppointmentService
    {
        public Task<Appointmnet> CancelAppointment(string id);
        public Task<Appointmnet> AddAppointment(AppointmentAddDto app);
    }
}