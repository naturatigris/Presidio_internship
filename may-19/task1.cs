//1) create a program that will take name from user and greet the user
using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Enter your name?");    

      string name=Console.ReadLine();
      Console.WriteLine("Hello "+name+"!");    
    }
  }
}
