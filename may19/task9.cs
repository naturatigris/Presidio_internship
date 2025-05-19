/*9) Write a program that:

Has a predefined secret word (e.g., "GAME").

Accepts user input as a 4-letter word guess.

Compares the guess to the secret word and outputs:

X Bulls: number of letters in the correct position.

Y Cows: number of correct letters in the wrong position.

Continues until the user gets 4 Bulls (i.e., correct guess).

Displays the number of attempts.

Bull = Correct letter in correct position.

Cow = Correct letter in wrong position.

Secret Word	User Guess	Output	Explanation
GAME	GAME	4 Bulls, 0 Cows	Exact match
GAME	MAGE	1 Bull, 3 Cows	A in correct position, MGE misplaced
GAME	GUYS	1 Bull, 0 Cows	G in correct place, rest wrong
GAME	AMGE	2 Bulls, 2 Cows	A, E right; M, G misplaced
NOTE	TONE	2 Bulls, 2 Cows	O, E right; T, N misplaced
*/
using System;

class Program
{
    static Boolean checkword(string word, string secretword)
    {
        int bulls = 0;
        int cows = 0;

        string message = "";
        if (word == secretword)
        {
            message = "Exact Match";
            Console.WriteLine($"{word}\t{secretword}\t{bulls} Bulls, {cows} Cows\t{message}");

            return true;

        }
        else
        {
            string bullmessage = "correct";
            string cowmessage = "misplaced";
            char[] charArray = word.ToCharArray();
            char[] checker = secretword.ToCharArray();

            for (int a = 0; a < charArray.Length; a++)
            {

                if (charArray[a] == checker[a])
                {
                    bulls++;
                    bullmessage = charArray[a] + "," + bullmessage;
                }
                else if (charArray[a] == 'A' || charArray[a] == 'G' || charArray[a] == 'M' || charArray[a] == 'E')
                {
                    cows++;
                    cowmessage = charArray[a] + "," + cowmessage;

                }
                else
                {
                    continue;
                }


            }
            message = bullmessage + "," + cowmessage;

        }
        Console.WriteLine($"{word}\t{secretword}\t{bulls} Bulls, {cows} Cows\t{message}");
        return false;

    }
    static void Main()
    {

        string secretword = "GAME";
        int cnt = 0;
        while (true)
        {
            Console.WriteLine("Please Enter Word with four letters");

            string? word = Console.ReadLine();
            if (word == null || word.Length != 4)
            {
                Console.WriteLine("Please Enter a Valid word");
                cnt++;

            }
            else
            {
                Boolean valid = checkword(word, secretword);
                if (valid)
                {
                    break;
                }
            }
        }
    }
}
