using System;

class Program
{
    static void Main(string[] args)
    {
        FileHandler.GetInstance("data.txt");

        FileIOFactory factory = new TextFileIOFactory();
        IWriter writer = factory.GetWriter();
        writer.Write("Hello, world!");
        writer.Write("Welcome to the Design pattern demo.");
        FileHandler.GetInstance().GetWriter().Flush();
        IReader reader = factory.GetReader();
        string contents = reader.ReadAll();
        Console.WriteLine("File Contents:");
        Console.WriteLine(contents);

        FileHandler.GetInstance().Close();
    }
}
