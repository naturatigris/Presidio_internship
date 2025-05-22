using System;
using LoggingInterfaces;
using LoggingServices;

namespace DIPExampleApp
{
    class Program
    {
        static void Main()
        {
            ILogger logger = new ConsoleLogger();
            UserService userService = new UserService(logger);

            userService.CreateUser("Sandhya");
        }
    }
}
