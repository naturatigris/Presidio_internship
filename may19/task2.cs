//2) Take 2 numbers from user and print the largest

using System;

namespace HelloWorld
{
  class Program
  {
    public static int maxval(int a,int b){
        if(a>b){
            return a;
        }else{
            return b;
        }
    }
    static void Main(string[] args)
    {
      string numbers=Console.ReadLine();
      string[] result = numbers.Split(" ");
      int a=Convert.ToInt32(result[0]);
      int b=Convert.ToInt32(result[1]);
      if (a == b)
      {
        Console.WriteLine("Both are equal ");

      }
      else
      {
        int greatest = maxval(a, b);
        Console.WriteLine("Maximum Value:" + greatest);
      }

  }
}}
