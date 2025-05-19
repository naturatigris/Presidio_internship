/*11) In the question ten extend it to validate a sudoku game. 
Validate all 9 rows (use int[,] board = new int[9,9])
*/
using System;
using Microsoft.Win32.SafeHandles;

class Program
{
    static void Main()
    {
        int[,] board = new int[9, 9];

        Console.WriteLine("Enter 9 rows of Sudoku numbers (each row has 9 space-separated digits from 1-9):");

        // Input all 9 rows
        for (int i = 0; i < 9; i++)
        {
            string[] input = Console.ReadLine().Split();
            if (input.Length != 9)
            {
                Console.WriteLine("Invalid row length. Each row must have 9 numbers.");
                return;
            }

            for (int j = 0; j < 9; j++)
            {
                if (!int.TryParse(input[j], out board[i, j]) || board[i, j] < 1 || board[i, j] > 9)
                {
                    Console.WriteLine("Invalid number. Please enter digits from 1 to 9 only.");
                    return;
                }
            }
        }
//         int[,] board = new int[9, 9]
// {
//     {5, 3, 4, 6, 7, 8, 9, 1, 2},
//     {6, 7, 2, 1, 9, 5, 3, 4, 8},
//     {1, 9, 8, 3, 4, 2, 5, 6, 7},
//     {8, 5, 9, 7, 6, 1, 4, 2, 3},
//     {4, 2, 6, 8, 5, 3, 7, 9, 1},
//     {7, 1, 3, 9, 2, 4, 8, 5, 6},
//     {9, 6, 1, 5, 3, 7, 2, 8, 4},
//     {2, 8, 7, 4, 1, 9, 6, 3, 5},
//     {3, 4, 5, 2, 8, 6, 1, 7, 9}
// };


        bool isValid = ValidateSudoku(board);

        Console.WriteLine(isValid ? "Sudoku board is valid." : "Sudoku board is INVALID.");
    }

    static bool ValidateSudoku(int[,] board)
    {
        int[] subgrid = new int[9];
        bool isValid = true;
        //row
        for (int i = 0; i < 9; i++)
        {
            subgrid = Enumerable.Range(0, 9)
                .Select(x => board[i, x])
                .ToArray();
            if (subgrid.Distinct().Count() != 9)
            {
                return false;
            }
            for (int j = 1; j < 10; j++)
            {
                if (!subgrid.Contains(j))
                {

                    return false;
                }
            }

        }
        //column
        for (int i = 0; i < 9; i++)
        {
            subgrid = Enumerable.Range(0, 9)
                .Select(x => board[x, i])
                .ToArray();
            if (subgrid.Distinct().Count() != 9)
            {
                return false;
            }
            for (int j = 1; j < 10; j++)
            {
                if (!subgrid.Contains(j))
                {
                    return false;
                }
            }

        }//3x3 matrix

        for (int i = 0; i < 9; i += 3)
        {
            for (int j = 0; j < 9; j += 3)
            {
                if (!GetSubgrid(board, i, j))
                {
                    return false;

                }
            }

        }
        return isValid;

    }
    static bool GetSubgrid(int[,] board, int startRow, int startCol)
    {
        bool isValid = true;
        int[] subgrid = new int[9];
        int index = 0;
        for (int i = startRow; i < startRow + 3; i++)
        {
            for (int j = startCol; j < startCol + 3; j++)
            {
                subgrid[index++] = board[i, j];
            }

        }
            if (subgrid.Distinct().Count() != 9)
            {
                isValid = false;
            }
            for (int k = 1; k < 10; k++)
            {
                if (!subgrid.Contains(k))
                {
                    isValid = false;
                }
            }

        return isValid;
    }


}