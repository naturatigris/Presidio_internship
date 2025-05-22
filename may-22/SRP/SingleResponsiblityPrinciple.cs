using System;
using System.Collections.Generic;
using System.Linq;

namespace WholeApplication
{
    public class EmployeeApp
    {
        public static void Main()
        {
            Dictionary<string, int> employeeSalaries = new Dictionary<string, int>
            {{ "Sandhya", 60000 },{ "Anand", 80000 },{ "Gregory", 40000 },{ "Diana", 70000 }};

            Console.WriteLine("Please, Enter employee name to calculate tax:");
            string employeeName = Console.ReadLine();

            CalculateTax taxCalculator = new CalculateTax();
            if (employeeSalaries.ContainsKey(employeeName))
            {
                double tax = taxCalculator.GetTax(employeeSalaries, employeeName);
                Console.WriteLine($"Tax for {employeeName}: {tax}");
            }
            else
            {
                Console.WriteLine("Employee not found.");
            }

            AverageSalary salaryAvg = new AverageSalary();
            double avg= salaryAvg.GetSalaryRange(employeeSalaries);

            Console.WriteLine($"\nSalary Average of All Employees:");
            Console.WriteLine($"Average: {avg:F2}");
        }
    }

    public class CalculateTax
    {
        public double GetTax(Dictionary<string, int> salaries, string name)
        {
            int salary = salaries[name];
            return salary * 0.10;
        }
    }

    public class AverageSalary
    {
        public  double  GetSalaryRange(Dictionary<string, int> salaries)
        {
            var values = salaries.Values;
            double avg = values.Average();
            return avg;
        }
    }
}
