using System;

public class InvalidAppointmentInputException : Exception
{
    public InvalidAppointmentInputException(string message) : base(message)
    {
    }
}
