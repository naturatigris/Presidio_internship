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



    public static int migratoryBirds(List<int> arr)
    {
        Dictionary<int, int> counter = new Dictionary<int, int>();
        foreach(int a in arr){
            if (counter.ContainsKey(a)){
                counter[a]++;
            }else{
                counter.Add(a,1);
            }
        }
int max = int.MinValue;
int min = int.MaxValue;

foreach (var b in counter)
{
    if (b.Value > max)
    {
        max = b.Value;
        min = b.Key;
    }
    else if (b.Value == max && b.Key < min)
    {
        min = b.Key;
    }
}
return min;
    }
}

class Solution
{
    public static void Main(string[] args)
    {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int arrCount = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> arr = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(arrTemp => Convert.ToInt32(arrTemp)).ToList();

        int result = Result.migratoryBirds(arr);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
