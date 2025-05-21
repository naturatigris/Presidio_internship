using System;
namespace WholeApplication.Models{
    public class Appointment
{
    public int Id { get; set; }
    public string PatientName { get; set; } = string.Empty;
    public int PatientAge { get; set; }
    public DateTime AppointmentDate { get; set; }
    public string Reason { get; set; } = string.Empty;
public Appointment? TakeAppointmentDetailsFromUser()
{
    try
    {
        Appointment appointment = new Appointment();

        Console.Write("Enter Patient Name: ");
        string? name = Console.ReadLine();
        if (string.IsNullOrWhiteSpace(name))
            throw new InvalidAppointmentInputException("Patient name cannot be empty.");
        appointment.PatientName = name;

        Console.Write("Enter Patient Age: ");
        if (!int.TryParse(Console.ReadLine(), out int age))
            throw new InvalidAppointmentInputException("Invalid age. Must be an integer.");
        appointment.PatientAge = age;

        Console.Write("Enter Appointment Date (yyyy-MM-dd): ");
        if (!DateTime.TryParse(Console.ReadLine(), out DateTime date))
            throw new InvalidAppointmentInputException("Invalid date format.");
        appointment.AppointmentDate = date;

        Console.Write("Enter Reason for Appointment: ");
        string? reason = Console.ReadLine();
        if (string.IsNullOrWhiteSpace(reason))
            throw new InvalidAppointmentInputException("Reason cannot be empty.");
        appointment.Reason = reason;

        return appointment;
    }
    catch (InvalidAppointmentInputException ex)
    {
        Console.WriteLine("Error: " + ex.Message);
        return null;
    }
    catch (Exception ex)
    {
        Console.WriteLine("Unexpected error: " + ex.Message);
        return null;
    }
}

public override string ToString()
{
    return $"Appointment ID   : {Id}\n" +
           $"Patient Name     : {PatientName}\n" +
           $"Patient Age      : {PatientAge}\n" +
           $"Appointment Date : {AppointmentDate:yyyy-MM-dd}\n" +
           $"Reason           : {Reason}";
}


}}