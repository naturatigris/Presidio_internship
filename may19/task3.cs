//3) Take 2 numbers from user, check the operation user wants to perform (+,-,*,/). Do the operation and print the result
using System;

namespace HelloWorld
{
    class Program
    {
        public static void Perform(int a, int b, int choice)
        {
            switch (choice)
            {
                case 1:
                    Console.WriteLine("Result (Addition): " + (a + b));
                    break;
                case 2:
                    Console.WriteLine("Result (Subtraction): " + (a - b));
                    break;
                case 3:
                    Console.WriteLine("Result (Multiplication): " + (a * b));
                    break;
                case 4:
                    if (b != 0)
                        Console.WriteLine("Result (Division): " + ((float)a / b));
                    else
                        Console.WriteLine("Error: Division by zero");
                    break;
                default:
                    Console.WriteLine("Invalid operation choice.");
                    break;
            }
        }

        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("Enter two numbers separated by space:");
                string input = Console.ReadLine();
                string[] parts = input.Split(" ");

                if (parts.Length != 2)
                {
                    Console.WriteLine("Error: Please enter exactly two numbers.");
                    return;
                }

                int a = Convert.ToInt32(parts[0]);
                int b = Convert.ToInt32(parts[1]);

                Console.WriteLine("Choose operation:\n1 - Addition\n2 - Subtraction\n3 - Multiplication\n4 - Division");
                int choice = Convert.ToInt32(Console.ReadLine());

                Perform(a, b, choice);
            }
            catch (Exception e)
            {
                Console.WriteLine("Error: Please enter valid integers.");
            }
        }
    
}
    
}
