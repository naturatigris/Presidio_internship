using System.Threading.Tasks;
using AutoMapper;
using FirstAPI.Interfaces;
using FirstAPI.Misc;
using FirstAPI.Models;
using FirstAPI.Models.DTOs.DoctorSpecialities;


namespace FirstAPI.Services
{
    public class AppointmentService : IAppointmentService
    {
        AppointmentMapper _appoitmentmapper ;
        private readonly IRepository<int, Doctor> _doctorRepository;
        private readonly IRepository<string, Appointmnet> _appointmentRepository;

        private readonly IRepository<int, Patient> _patientrepository;

        public AppointmentService(IRepository<int, Doctor> doctorRepository,
                            IRepository<int, Patient> patientrepository,
                            IRepository<string, Appointmnet> appointmentRepository)
        {
            _appoitmentmapper = new AppointmentMapper();
            _doctorRepository = doctorRepository;
            _patientrepository = patientrepository;
            _appointmentRepository = appointmentRepository;
        }

        public async Task<Appointmnet> AddAppointment(AppointmentAddDto app)
        {

            try
            {
                var doctor = await _doctorRepository.Get(app.DoctorId);
                var patient = await _patientrepository.Get(app.PatientId);

                if (doctor == null || patient == null)
                {
                    throw new Exception("Doctor or Patient entity is not found.");
                }

                var newAppointment = _appoitmentmapper.MapAppointment(app);

                var createdAppointment = await _appointmentRepository.Add(newAppointment);

                return createdAppointment;
                    }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
            
        }

public async Task<Appointmnet> CancelAppointment(string id)
{
    try
    {
        var appointment = await _appointmentRepository.Get(id);
        if (appointment == null)
        {
            throw new Exception("Appointment not found.");
        }

        appointment.Status = "Canceled";
        var updatedAppointment = await _appointmentRepository.Update(id, appointment);
        return updatedAppointment;
    }
    catch (Exception ex)
    {
        throw new Exception($"Failed to cancel appointment: {ex.Message}");
    }
}

    }
}