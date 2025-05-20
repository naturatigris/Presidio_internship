
/*
Create a C# console application which has a class with name “EmployeePromotion” that will take employee names in the order in which they are eligible for promotion.  

Example Input:  

Please enter the employee names in the order of their eligibility for promotion(Please enter blank to stop) 

Ramu 

Bimu 

Somu 

Gomu 

Vimu 

Create a collection that will hold the employee names in the same order that they are inserted. 

Hint – choose the correct collection that will preserve the input order (List) */
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

        Console.WriteLine("\nEmployee List:");
        foreach (Employee e in employees)
        {
            Console.WriteLine(e);
        }
    }
}
