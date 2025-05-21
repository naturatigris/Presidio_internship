/*
Create an application that will take employee details (Use the employee class) and store it in a collection  

The collection should be able to give back the employee object if the employee id is provided. 

Hint – Use a collection that will store key-value pair. 

The ID of employee can never be null or have duplicate values. */
using System;
using System.Collections.Generic;

class Employee
{
    int id, age;
    string name;
    double salary;

    public Employee() { }

    public Employee(int id, int age, string name, double salary)
    {
        this.id = id;
        this.age = age;
        this.name = name;
        this.salary = salary;
    }

    public void TakeEmployeeDetailsFromUser()
    {
        Console.WriteLine("Please enter the employee ID:");
        id = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Please enter the employee name:");
        name = Console.ReadLine();

        Console.WriteLine("Please enter the employee age:");
        age = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Please enter the employee salary:");
        salary = Convert.ToDouble(Console.ReadLine());
    }

    public override string ToString()
    {
        return $"Employee ID: {id}\nName: {name}\nAge: {age}\nSalary: {salary}";
    }

    public int Id { get => id; set => id = value; }
    public int Age { get => age; set => age = value; }
    public string Name { get => name; set => name = value; }
    public double Salary { get => salary; set => salary = value; }
}

class Program
{
    static void Main()
    {
        Dictionary<int, Employee> employeeDirectory = new Dictionary<int, Employee>();
        Console.WriteLine("Enter number of employees to add:");
        if (!int.TryParse(Console.ReadLine(), out int n))
        {
            Console.WriteLine("Invalid input for number of users.");
            return;
        }

        for (int i = 0; i < n; i++)
        {
            Employee emp = new Employee();
            emp.TakeEmployeeDetailsFromUser();

            if (!employeeDirectory.ContainsKey(emp.Id))
            {
                employeeDirectory.Add(emp.Id, emp);
            }
            else
            {
                Console.WriteLine("Error: Employee ID already exists. Skipping entry.");
            }
        }

        Console.WriteLine("\n--- Employee Lookup ---");
        Console.WriteLine("Enter an employee ID to search:");
        if (!int.TryParse(Console.ReadLine(), out int searchId))
        {
            Console.WriteLine("Invalid input for number of users.");
            return;
        }

        if (employeeDirectory.TryGetValue(searchId, out Employee foundEmployee))
        {
            Console.WriteLine("\nEmployee Found:\n" + foundEmployee);
        }
        else
        {
            Console.WriteLine("No employee found with the given ID.");
        }
    }
}
