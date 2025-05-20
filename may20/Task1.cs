/*
1) Design a C# console app that uses a jagged array to store data for Instagram posts by multiple users. Each user can have a different number of posts, 
and each post stores a caption and number of likes.

You have N users, and each user can have M posts (varies per user).

Each post has:

A caption (string)

A number of likes (int)

Store this in a jagged array, where each index represents one user's list of posts.

Display all posts grouped by user.

No file/database needed — console input/output only.

Example output
Enter number of users: 2

User 1: How many posts? 2
Enter caption for post 1: Sunset at beach
Enter likes: 150
Enter caption for post 2: Coffee time
Enter likes: 89

User 2: How many posts? 1
Enter caption for post 1: Hiking adventure
Enter likes: 230

--- Displaying Instagram Posts ---
User 1:
Post 1 - Caption: Sunset at beach | Likes: 150
Post 2 - Caption: Coffee time | Likes: 89

User 2:
Post 1 - Caption: Hiking adventure | Likes: 230


Test case
| User | Number of Posts | Post Captions        | Likes      |
| ---- | --------------- | -------------------- | ---------- |
| 1    | 2               | "Lunch", "Road Trip" | 40, 120    |
| 2    | 1               | "Workout"            | 75         |
| 3    | 3               | "Book", "Tea", "Cat" | 30, 15, 60 |
*/
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        string[][] ig;

        Console.WriteLine("Please Enter the number of users:");
        if (!int.TryParse(Console.ReadLine(), out int n))
        {
            Console.WriteLine("Invalid input for number of users.");
            return;
        }

        ig = new string[n][];

        for (int i = 0; i < n; i++)
        {
            Console.WriteLine($"Please Enter the number of Posts for user {i}:");
            if (!int.TryParse(Console.ReadLine(), out int p))
            {
                Console.WriteLine("Invalid input for number of posts.");
                return;
            }

            string[] temp = new string[2 * p];

            for (int j = 0; j < 2 * p; j += 2)
            {
                Console.WriteLine("Please Enter the Caption:");
                string? c = Console.ReadLine();
                if (c == null)
                {
                    Console.WriteLine("Caption cannot be null.");
                    return;
                }

                Console.WriteLine("Please Enter the number of Likes:");
                string? likesInput = Console.ReadLine();
                if (!int.TryParse(likesInput, out int l))
                {
                    Console.WriteLine("Invalid input for likes.");
                    return;
                }

                temp[j] = c;
                temp[j + 1] = l.ToString();
            }

            ig[i] = temp;
        }

        for (int i = 0; i < ig.Length; i++)
        {
            Console.WriteLine($"\nUser {i}");
            for (int j = 0; j < ig[i].Length; j += 2)
            {
                Console.WriteLine($"Post {(j/2)+1} - Caption: {ig[i][j]} | Likes: {ig[i][j + 1]}");
            }
        }
    }
}
