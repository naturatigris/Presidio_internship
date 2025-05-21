using System.Threading.Tasks;
using WholeApplication.Interfaces;
using WholeApplication.Models;

namespace WholeApplication.Services
{
    public class AppointmentService : IAppointmentService
    {
        IRepository<int, Appointment> _AppointmentRepository;
        public AppointmentService(IRepository<int, Appointment> AppointmentRepository)
        {
            _AppointmentRepository = AppointmentRepository;
        }
        public int AddAppointment(Appointment appointment)
        {
            try
            {
                var result = _AppointmentRepository.Add(appointment);
                if (result != null)
                {
                    Console.WriteLine(appointment);
                    return result.Id;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return -1;
        }

            
    public List<Appointment>? SearchAppointment(AppointmentSearchModel searchModel)
    {
        List<Appointment> appointments = _AppointmentRepository.GetAll().ToList();

        if (!appointments.Any()) return null;

        if (!string.IsNullOrWhiteSpace(searchModel.PatientName))
        {
            appointments = appointments
                .Where(a => a.PatientName.Contains(searchModel.PatientName, StringComparison.OrdinalIgnoreCase))
                .ToList();
        }

        if (searchModel.AppointmentDate.HasValue)
        {
            appointments = appointments
                .Where(a => a.AppointmentDate.Date == searchModel.AppointmentDate.Value.Date)
                .ToList();
        }

        if (searchModel.AgeRange != null)
        {if (searchModel.AgeRange?.MinVal is int minAge)
    appointments = appointments.Where(a => a.PatientAge >= minAge).ToList();

if (searchModel.AgeRange?.MaxVal is int maxAge)
    appointments = appointments.Where(a => a.PatientAge <= maxAge).ToList();

        }

        return appointments;
    }
}
}

