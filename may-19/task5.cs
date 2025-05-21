//5) Take 10 numbers from user and print the number of numbers that are divisible by 7
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("Enter 10 numbers separated by space:");
                string input = Console.ReadLine();
                string[] parts = input.Split(" ");

                if (parts.Length != 10)
                {
                    Console.WriteLine("Error: You must enter exactly 10 numbers.");
                    return;
                }

                int count = 0;

                foreach (string part in parts)
                {
                    int number = Convert.ToInt32(part);
                    if (number % 7 == 0)
                    {
                        count++;
                    }
                }

                Console.WriteLine("Count of numbers divisible by 7: " + count);
            }
            catch (Exception)
            {
                Console.WriteLine("An error occurred. Please make sure you enter valid integers.");
            }
        }
    }
}
