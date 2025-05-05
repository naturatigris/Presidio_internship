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


public static void miniMaxSum(List<int> arr)
{
    long sum = 0;
    long min = long.MaxValue;
    long max = long.MinValue;

    for (int i = 0; i < arr.Count; i++) {
        sum += arr[i];
    }

    for (int i = 0; i < arr.Count; i++) {
        long sum1 = sum - arr[i];
        if (sum1 > max) {
            max = sum1;
        }
        if (sum1 < min) {
            min = sum1;
        }
    }

    Console.WriteLine(min + " " + max);
}}
class Solution
{
    public static void Main(string[] args)
    {

        List<int> arr = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(arrTemp => Convert.ToInt32(arrTemp)).ToList();

        Result.miniMaxSum(arr);
    }
}
