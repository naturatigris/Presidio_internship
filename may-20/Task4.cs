/*Use the application created for question 1 and in the same class do the following 

 The application seems to be using some excess memory for storing the name, contain the space by using only the quantity of memory that is required. 

Example Input:  

Please enter the employee names in the order of their eligibility for promotion 

Ramu 

Bimu 

Somu 

Gomu 

Vimu 

The current size of the collection is 8 

The size after removing the extra space is 5 

Hint – List multiples the memory when we add elements, ensure you use only the size that is equal to the number of elements that are present. */

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

        Console.WriteLine("\nBefore trimming:");
        Console.WriteLine("Capacity: {0}", employees.Capacity);
        Console.WriteLine("Count: {0}", employees.Count);

        employees = new List<Employee>(employees);

        Console.WriteLine("\nAfter forcing capacity trim:");
        Console.WriteLine("Capacity: {0}", employees.Capacity); 
        Console.WriteLine("Count: {0}", employees.Count);

    }
}
