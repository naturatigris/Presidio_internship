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


    public static string dayOfProgrammer(int year)
    {
        string d;
        if(year<1918){
        
        if(year%4==0){
         d = "12.09."+year;
        }else{
         d = "13.09."+year;
        }
        return d;
    }else if(year>1918){
        if(year%400==0){
         d = "12.09."+year;
        }else if(year%4==0 && year%100!=0){
         d = "12.09."+year;
            
        }
        else{
         d = "13.09."+year;
        }
        return d;

        
    }else{
        return "26.09.1918";
    }
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int year = Convert.ToInt32(Console.ReadLine().Trim());

        string result = Result.dayOfProgrammer(year);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
