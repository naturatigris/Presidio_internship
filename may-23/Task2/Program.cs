using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Enter your username: ");
        string username = Console.ReadLine();

        Console.WriteLine("Select your role:");
        Console.WriteLine("1. User");
        Console.WriteLine("2. Admin");
        Console.WriteLine("3. Guest");
        Console.Write("Enter option (1-3): ");
        string option = Console.ReadLine();

        string role = option switch
        {
            "1" => "User",
            "2" => "Admin",
            "3" => "Guest",
            _   => "Invalid"
        };

        if (role == "Invalid")
        {
            Console.WriteLine("Invalid role selected.");
        }
        
        else
        {
            Console.WriteLine($"\nUsername: {username}");
            Console.WriteLine($"Role: {role}");
            ProxyFile proxy = new ProxyFile(role); 
           
        Console.WriteLine("\nMetadata:");
        Console.WriteLine(proxy.ReadMeta());

        Console.WriteLine("\nFull Content:");
        Console.WriteLine(proxy.ReadAll());


            
        }
    }
}
