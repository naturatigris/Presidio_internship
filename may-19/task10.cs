/*10) write a program that accepts a 9-element array representing a Sudoku row.

Validates if the row:

Has all numbers from 1 to 9.

Has no duplicates.

Displays if the row is valid or invalid.
*/

using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter 9 numbers (space-separated) for the Sudoku row:");

        int[] row;
        try
        {
            row = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();;
        }
        catch
        {
            Console.WriteLine("Invalid input. Please enter only numbers.");
            return;
        }

        if (row.Length != 9)
        {
            Console.WriteLine("Invalid row: Must contain exactly 9 numbers.");
            return;
        }
        Boolean isValid=true;

        if (row.Distinct().Count() != 9)
        {
            isValid = false;
        }
        for (int i = 1; i < 10; i++)
        {
            if (!row.Contains(i))
            {
                isValid = false;
            }
        }
        

        if (isValid)
        {
            Console.WriteLine("Valid Sudoku row.");
        }
        else
        {
            Console.WriteLine("Invalid Sudoku row.");
        }
    }
}
