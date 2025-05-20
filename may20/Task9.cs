/*
Use the application created for question 3. Find all the employees who are elder than a given employee (Employee given by user) */
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
        var sortedData = employeeDirectory.OrderBy(item => item, new MyDictionaryComparer());
         Console.WriteLine("\nEmployee Sorted:\n");

                foreach (var emp in sortedData)
            {
                Console.WriteLine(emp);
            }


        Console.WriteLine("\n--- Employee Lookup ---");
        Console.WriteLine("Enter an employee name to search and give employees older than them:");
        string name=Console.ReadLine();
        IEnumerable<int> ages = from ag in sortedData 
                        where ag.Value.Name == name 
                        select ag.Value.Age;
        int ageval = ages.FirstOrDefault(); 


       IEnumerable<Employee> find = from kvp in sortedData
                              where kvp.Value.Age > ageval select kvp.Value;

            if (find.Any())
            {
                Console.WriteLine("\nEmployee Found:\n");
                foreach (var emp in find)
                {
                    Console.WriteLine(emp);
                }
            }
            else
            {
                Console.WriteLine("No employee found with the given ID.");
            }


    }
    public class MyDictionaryComparer : IComparer<KeyValuePair<int, Employee>>
{
  public int Compare(KeyValuePair<int, Employee> lhs, KeyValuePair<int, Employee> rhs)
  {
    return lhs.Value.Salary.CompareTo(rhs.Value.Salary);
  }
}

}
