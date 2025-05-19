/* Given two integer arrays, merge them into a single array.
Input: {1, 3, 5} and {2, 4, 6}
Output: {1, 3, 5, 2, 4, 6}*/

using System;
using System.ComponentModel.DataAnnotations;

class Program
{
    static void Main()
    {
        int[] arr1 = { 1, 3, 5 };
        int[] arr2 = { 2, 4, 6 };
        int len1 = arr1.Length;
        int len2 = arr2.Length;
        int pos = 0;
        int[] arr3 = new int[len1 + len2];


        foreach (int i in arr1)
        {
            arr3[pos] = i;
            pos++;
        }
        foreach (int i in arr2)
        {
            arr3[pos] = i;
            pos++;
        }
        foreach (int i in arr3)
        {
            Console.Write(i + " ");
        }


    }
}
