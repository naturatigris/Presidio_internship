/*
Use the application created for question 1 and in the same class do the following 

Given an employee name find his position in the promotion list 

Example Input:  

Please enter the employee names in the order of their eligibility for promotion 

Ramu 

Bimu 

Somu 

Gomu 

Vimu 

Please enter the name of the employee to check promotion position 

Somu 

“Somu” is the the position 3 for promotion. 

Hint – Choose the correct method that will give back the index (IndexOf) */
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

        Console.WriteLine("Please enter the Employee name to find his order of eligiblty:");
        string? em = Console.ReadLine();

        for (int i=0; i<employees.Count();i++)
        {
            if(employees[i].Name==em){
            Console.WriteLine($"order of eligiblity of {em} is {i+1}");


            }
        }
    }
}
