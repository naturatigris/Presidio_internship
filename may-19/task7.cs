/*create a program to rotate the array to the left by one position.
Input: {10, 20, 30, 40, 50}
Output: {20, 30, 40, 50, 10}*/

using System;

class Program
{
    static void Main()
    {
        int[] numbers = {10, 20, 30, 40, 50};
        int len = numbers.Length;
        int initial = numbers[0];

        for (int i = 0; i < len - 1; i++)
        {
            numbers[i] = numbers[i + 1];
        }

        numbers[len - 1] = initial;

        foreach (var number in numbers)
        {
            Console.Write(number + " ");
        }
    }
}
