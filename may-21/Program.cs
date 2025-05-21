using WholeApplication.Interfaces;
using WholeApplication.Models;
using WholeApplication.Repositories;
using WholeApplication.Services;

namespace WholeApplication
{
    internal class Program
    {
        static void Main(string[] args)
        {
            
            IRepository<int, Appointment> AppointmentRepository = new AppointmentRepository();
            IAppointmentService Appointmentservice = new AppointmentService(AppointmentRepository);
            ManageAppointment manageappointment = new ManageAppointment(Appointmentservice);
            manageappointment.Start();
        }
    }
}