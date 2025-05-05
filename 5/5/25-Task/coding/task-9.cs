using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Result
{

public static int GCD(int a, int b)
{
    while (b != 0)
    {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
public static int LCM(int a, int b)
{
    return (a * b) / GCD(a, b);
}
    public static int getTotalX(List<int> a, List<int> b)
    {
        int maxA = a.Max();
        int minB = b.Min();

        int count = 0;

        for (int i = maxA; i <= minB; i++)
        {
            bool isValid = true;

            foreach (var num in a)
            {
                if (i % num != 0)
                {
                    isValid = false;
                    break;
                }
            }

            if (isValid)
            {
                foreach (var num in b)
                {
                    if (num % i != 0)
                    {
                        isValid = false;
                        break;
                    }
                }
            }

            if (isValid)
            {
                count++;
            }
        }

        return count;
    }}
class Solution
{
    public static void Main(string[] args)
    {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string[] firstMultipleInput = Console.ReadLine().TrimEnd().Split(' ');

        int n = Convert.ToInt32(firstMultipleInput[0]);

        int m = Convert.ToInt32(firstMultipleInput[1]);

        List<int> arr = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(arrTemp => Convert.ToInt32(arrTemp)).ToList();

        List<int> brr = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(brrTemp => Convert.ToInt32(brrTemp)).ToList();

        int total = Result.getTotalX(arr, brr);

        textWriter.WriteLine(total);

        textWriter.Flush();
        textWriter.Close();
    }
}
