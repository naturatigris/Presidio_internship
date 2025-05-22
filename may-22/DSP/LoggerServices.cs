using System;
using LoggingInterfaces;

namespace LoggingServices
{
    public class ConsoleLogger : ILogger
    {
        public void Log(string message)
        {
            Console.WriteLine("[Console] " + message);
        }
    }

    public class FileLogger : ILogger
    {
        public void Log(string message)
        {
            
            Console.WriteLine("[File] " + message);  
        }
    }
    public class UserService
    {
        private readonly ILogger loggertype;

        public UserService(ILogger logger)
        {
            loggertype = logger;
        }

        public void CreateUser(string username)
        {
            loggertype.Log($"User '{username}' created successfully.");
        }
    }
}
