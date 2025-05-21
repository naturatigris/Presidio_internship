/*6) Count the Frequency of Each Element
Given an array, count the frequency of each element and print the result.
Input: {1, 2, 2, 3, 4, 4, 4}
*/
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int[] numbers = { 1, 2, 2, 3, 4, 4, 4 };
        Dictionary<int, int> frequency = new Dictionary<int, int>();

        foreach (int number in numbers)
        {
            if (frequency.ContainsKey(number))
            {
                frequency[number]++;
            }
            else
            {
                frequency[number] = 1;
            }
        }

        foreach (var pair in frequency)
        {
            Console.WriteLine($"Element {pair.Key} occurs {pair.Value} times");
        }
    }
}
