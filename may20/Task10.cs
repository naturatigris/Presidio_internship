/*
Use the application created in Question 1 of medium.  

Display a menu to user which will enable to print all the employee details, add an employee, modify the details of an employee (all except id), print an employee details given his id and delete an employee from the collection 

Ensure the application does not break at any point. Handles all the cases with proper response 

Example – If user enters an employee id that does not exists the response should inform the user the same. */
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
        while (true)
        {
            Console.WriteLine("Please enter the employee ID:");
            if (int.TryParse(Console.ReadLine(), out id))
                break;
            else
                Console.WriteLine("Invalid input. Please enter a valid integer for ID.");
        }


        while (true)
        {
            Console.WriteLine("Please enter the employee name:");
            name = Console.ReadLine();
            if (!string.IsNullOrWhiteSpace(name))
                break;
            else
                Console.WriteLine("Name cannot be empty. Please enter a valid name.");
        }

        while (true)
        {
            Console.WriteLine("Please enter the employee age:");
            if (int.TryParse(Console.ReadLine(), out age))
                break;
            else
                Console.WriteLine("Invalid input. Please enter a valid integer for age.");
        }

        while (true)
        {
            Console.WriteLine("Please enter the employee salary:");
            if (double.TryParse(Console.ReadLine(), out salary))
                break;
            else
                Console.WriteLine("Invalid input. Please enter a valid number for salary.");
        }
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
        bool running = true;

        while (running)
        {
            Console.WriteLine("\nMenu:\n1. Add Employee\n2. Display All Employees\n3. Display One Employee\n4. Delete One Employee\n5. Update One Employee");
            string choice = Console.ReadLine();


            switch (choice)
            {
                case "1":
                    AddEmployee(employeeDirectory);
                    break;
                case "2":
                    DisplayAllEmployee(employeeDirectory);
                    break;
                case "3":
                    DisplayOneEmployee(employeeDirectory);
                    break;
                case "4":
                    DeleteOneEmployee(employeeDirectory);
                    break;
                case "5":
                    UpdateOneEmployee(employeeDirectory);
                    break;
                default:
                    Console.WriteLine("Invalid choice. Try again.");
                    running=false;
                    break;
            }
        }   
    }

    public static void AddEmployee(Dictionary<int, Employee> employeeDirectory){
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
    public static void DisplayAllEmployee(Dictionary<int, Employee> employeeDirectory){
        Console.WriteLine("\nEmployee List:");

        foreach (var e in employeeDirectory.Values)
        {
            Console.WriteLine(e);
            Console.WriteLine("\n--------------");

        }
    

    }
    public static void DisplayOneEmployee(Dictionary<int, Employee> employeeDirectory){
        Console.WriteLine("\n--- Employee Lookup ---");
        Console.WriteLine("Enter an employee ID to search:");
        if (!int.TryParse(Console.ReadLine(), out int searchId))
        {
            Console.WriteLine("Invalid input for SearchId.");
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


public static void DeleteOneEmployee(Dictionary<int, Employee> employeeDirectory){
        Console.WriteLine("\n--- Employee Delete ---");
        Console.WriteLine("Enter an employee ID to Delete:");
        if (!int.TryParse(Console.ReadLine(), out int DeleteId))
        {
            Console.WriteLine("Invalid input for DeleteId.");
            return;
        }


        if (employeeDirectory.ContainsKey(DeleteId))
        {
            Console.WriteLine($"\nEmployee with id:{DeleteId} is Deleted:\n");
            employeeDirectory.Remove(DeleteId);
            
        }
        else
        {
            Console.WriteLine("No employee found with the given ID.");
        }

    }
    public static void UpdateOneEmployee(Dictionary<int, Employee> employeeDirectory){
        Console.WriteLine("\n--- Employee Update ---");
        Console.WriteLine("Enter an employee ID to Update:");
        if (!int.TryParse(Console.ReadLine(), out int UpdateId))
        {
            Console.WriteLine("Invalid input for DeleteId.");
            return;
        }


        if (employeeDirectory.ContainsKey(UpdateId))
        {
            Console.WriteLine("\nChoose what you want to update:\n1. Update Name\n2. Update Age\n3.Update Salary");
            string choice = Console.ReadLine();


            switch (choice)
            {
                case "1":
                
                   while (true)
                        {
                            Console.WriteLine("Please enter the new employee name:");
                            string name = Console.ReadLine();
                            if (!string.IsNullOrWhiteSpace(name))
                               { employeeDirectory[UpdateId].Name=name;

                                break;}
                            else
                                Console.WriteLine("Name cannot be empty. Please enter a valid name.");
                        }
                       
                break;
                case "2":
                while (true)
                    {
                        Console.WriteLine("Please enter the new employee age:");
                        if (int.TryParse(Console.ReadLine(), out int age))
                            {employeeDirectory[UpdateId].Age=age;
                            break;}
                        else
                            Console.WriteLine("Invalid input. Please enter a valid integer for age.");
                    }

                    break;

                case "3":
                while (true)
                    {
                        Console.WriteLine("Please enter the employee salary:");
                        if (double.TryParse(Console.ReadLine(), out double salary))
                           { employeeDirectory[UpdateId].Salary=salary;
                            break;}
                        else
                            Console.WriteLine("Invalid input. Please enter a valid number for salary.");
                    }
                     break;
                default:
                    Console.WriteLine("Invalid choice. Try again.");
                    break;
            }
            
        }
        else
        {
            Console.WriteLine("No employee found with the given ID.");
        }

    }
    
    }
