using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Solution
{
    public class Solution
    {

        public static Dictionary<string, int> AverageAgeForEachCompany(List<Employee> employees)
        {
            var result=employees.GroupBy(
            p => p.Company, 
            p=>p.Age,
            (key, g) => new { company = key, AverageAge = (int) Math.Round(g.Average() )}).ToDictionary(x => x.company, x => x.AverageAge);
            var sortedResult = result
            .OrderBy(e => e.Key)                         
            .ToDictionary(e => e.Key, e => e.Value);     

            return sortedResult;


        }
        
        public static Dictionary<string, int> CountOfEmployeesForEachCompany(List<Employee> employees)
        {
            var result=employees.GroupBy(
            p => p.Company, 
            p=>p.FirstName,
            (key, g) => new { company = key, count = g.Count() }).ToDictionary(x => x.company, x => x.count);
var sortedResult = result
    .OrderBy(e => e.Key)                         
    .ToDictionary(e => e.Key, e => e.Value);     

return sortedResult;


        }
        
        public static Dictionary<string, Employee> OldestAgeForEachCompany(List<Employee> employees)
        {
            var result=employees
            .GroupBy(p => p.Company)
            .ToDictionary(
                g => g.Key,                 
                g => g.OrderByDescending(e => e.Age).First()  
            );

var sortedResult = result
    .OrderBy(e => e.Key)                         
    .ToDictionary(e => e.Key, e => e.Value);     

return sortedResult;
        }

        public static void Main()
        {   
            int countOfEmployees = int.Parse(Console.ReadLine());
            
            var employees = new List<Employee>();
            
            for (int i = 0; i < countOfEmployees; i++)
            {
                string str = Console.ReadLine();
                string[] strArr = str.Split(' ');
                employees.Add(new Employee { 
                    FirstName = strArr[0], 
                    LastName = strArr[1], 
                    Company = strArr[2], 
                    Age = int.Parse(strArr[3]) 
                    });
            }
            
            foreach (var emp in AverageAgeForEachCompany(employees))
            {
                Console.WriteLine($"The average age for company {emp.Key} is {emp.Value}");
            }
            
            foreach (var emp in CountOfEmployeesForEachCompany(employees))
            {
                Console.WriteLine($"The count of employees for company {emp.Key} is {emp.Value}");
            }
            
            foreach (var emp in OldestAgeForEachCompany(employees))
            {
                Console.WriteLine($"The oldest employee of company {emp.Key} is {emp.Value.FirstName} {emp.Value.LastName} having age {emp.Value.Age}");
            }
        }
    }
    
    public class Employee
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Company { get; set; }
    }
}   