using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WholeApplication.Interfaces;
using WholeApplication.Models;
namespace WholeApplication
{
    public class ManageAppointment
    {
        private readonly IAppointmentService _appointmentService;

        public ManageAppointment(IAppointmentService appointmentService)
        {
            _appointmentService = appointmentService;
        }
        public void Start()
        {
            bool exit = false;
            while (!exit)
            {
                PrintMenu();
                int option = 0;
                while (!int.TryParse(Console.ReadLine(), out option) || (option < 1 && option > 2))
                {
                    Console.WriteLine("Invalid entry. Please enter a valid option");
                }
                switch (option)
                {
                    case 1:
                        AddAppointment();
                        break;
                    case 2:
                        SearchAppointment();
                        break;
                    default:
                        exit = true;
                        break;
                }
            }
        }
        public void PrintMenu()
        {
            Console.WriteLine("Choose what you wanted");
            Console.WriteLine("1. Add Appointment");
            Console.WriteLine("2. Search Appointment");
        }
        public void AddAppointment()
        {
           Appointment? appointment = new Appointment().TakeAppointmentDetailsFromUser();

            if (appointment != null)
            {
                int id=_appointmentService.AddAppointment(appointment);
                Console.WriteLine($"The employee added. The Id is{id}");

            }
            else
            {
                Console.WriteLine("Failed to capture appointment details.");
            }

        }
        public void SearchAppointment()
        {
            var searchMenu = PrintSearchMenu();
            var appointment = _appointmentService.SearchAppointment(searchMenu);
            Console.WriteLine("The search options you have selected");
            Console.WriteLine(searchMenu);
            if ((appointment == null))
            {
                Console.WriteLine("No Employees for the search");
            }
            PrintAppointment(appointment);

        }

        private void PrintAppointment(List<Appointment>? appointments)
{
    if (appointments == null || appointments.Count == 0)
    {
        Console.WriteLine("No appointments to display.");
        return;
    }

    foreach (var a in appointments)
    {
        Console.WriteLine(a);
    }
}


        private AppointmentSearchModel PrintSearchMenu()
        {
            Console.WriteLine("Please select the search option");
            AppointmentSearchModel searchModel = new AppointmentSearchModel();
            int idOption = 0;
            Console.WriteLine("Search by Name. ? Type 1 for yes Type 2 no");
            while (!int.TryParse(Console.ReadLine(), out idOption) || (idOption != 1 && idOption != 2))
            {
                Console.WriteLine("Invalid entry. Please enter 1 for yes and 2 for no");
            }
            if (idOption == 1)
            {
                Console.WriteLine("Please enter the employee Name");
                string name = Console.ReadLine() ?? "";
                searchModel.PatientName = name;
                idOption = 0;
            }
            Console.WriteLine("Search by Appointment Date? Type 1 for yes, Type 2 for no");
    while (!int.TryParse(Console.ReadLine(), out idOption) || (idOption != 1 && idOption != 2))
    {
        Console.WriteLine("Invalid entry. Please enter 1 for yes and 2 for no");
    }
    if (idOption == 1)
    {
        Console.WriteLine("Enter appointment date (yyyy-MM-dd):");
        if (DateTime.TryParse(Console.ReadLine(), out DateTime date))
        {
            searchModel.AppointmentDate = date;
        }
        else
        {
            Console.WriteLine("Invalid date format. Skipping appointment date filter.");
        }
    }
            Console.WriteLine("Search by Age. Please enter 1 for yes and 2 for no");

            while (!int.TryParse(Console.ReadLine(), out idOption) || (idOption != 1 && idOption != 2))
            {
                Console.WriteLine("Invalid entry. Please enter 1 for yes and 2 for no");
            }
            if(idOption == 1)
            {
                searchModel.AgeRange = new Range<int>();
                int age;
                Console.WriteLine("Please enter the min employee Age");
                while (!int.TryParse(Console.ReadLine(), out age) || age <= 18)
                {
                    Console.WriteLine("Invalid entry for min age. Please enter a valid employee age");
                }
                searchModel.AgeRange.MinVal = age;
                Console.WriteLine("Please enter the max employee Age");
                while (!int.TryParse(Console.ReadLine(), out age) || age <= 18)
                {
                    Console.WriteLine("Invalid entry for max age. Please enter a valid employee age");
                }
                searchModel.AgeRange.MaxVal = age;
                idOption = 0;
            }
            
            return searchModel;
        }
    }
}