
using System;

class Program
{
    public static string encrypt(string word)
    {
        char[] v = word.ToCharArray();
        for (int i = 0; i < v.Length; i++)
        {
            if (char.IsLower(v[i]))
            {
                v[i] = (char)((v[i] - 'a' + 3 + 26) % 26 + 'a');
            }
            else if (char.IsUpper(v[i]))
            {
                v[i] = (char)((v[i] - 'A' + 3 + 26) % 26 + 'A');
            }
        }
        return new string(v);
    }
public static string decrypt(string word)
{
    char[] v = word.ToCharArray();
    for (int i = 0; i < v.Length; i++)
    {
        if (char.IsLower(v[i]))
        {
            v[i] = (char)((v[i] - 'a' -3 + 26) % 26 + 'a');
        }
        else if (char.IsUpper(v[i]))
        {
            v[i] = (char)((v[i] - 'A' -3 + 26) % 26 + 'A');
        }
    }
    return new string(v);
}
    static void Main()
    {
        Console.WriteLine("Please, enter an input");
        string? word = Console.ReadLine();
        string encryptedword = encrypt(word);
        Console.WriteLine(encryptedword);
        string decryptedword = decrypt(encryptedword);
        Console.WriteLine(decryptedword);


    }
}
