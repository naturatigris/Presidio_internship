/*
Use the application created for question 1 and in the same class do the following 

The need for the list is over as all the employees are promoted. Not print all the employee names in ascending order. 

Example Input:  

Please enter the employee names in the order of their eligibility for promotion 

Ramu 

Bimu 

Somu 

Gomu 

Vimu 

Promoted employee list: 

Bimu 

Gomu 

Ramu 

Somu 

Vimu 
*/
using System;
using System.Collections.Generic;

class Employee
{
    private string name;

    public Employee(string name)
    {
        this.name = name;
    }

    public override string ToString()
    {
        return "Name: " + name;
    }

    public string Name
    {
        get => name;
        set => name = value;
    }
}

class Program
{
    public static void Main()
    {
        List<Employee> employees = new List<Employee>();
        Console.WriteLine("Enter employee names (leave blank to stop):");

        while (true)
        {
            string? input = Console.ReadLine();

            if (string.IsNullOrWhiteSpace(input))
                break;

            employees.Add(new Employee(input));
        }
        employees.Sort((e1, e2) => e1.Name.CompareTo(e2.Name));
        Console.WriteLine("\nEmployee List in ascending order:");

        foreach (Employee e in employees)
        {
            Console.WriteLine(e);
        }
    }
}
