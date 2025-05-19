/*4) Take username and password from user. Check if user name is "Admin" and password is "pass" if yes then print success message.
Give 3 attempts to user. In the end of eh 3rd attempt if user still is unable to provide valid creds then exit the application after print the message 
"Invalid attempts for 3 times. Exiting...."*/

using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            int trials=3;
            int flag=0;
            while(trials!=0){
            Console.Write("Enter your username: ");
            string username = Console.ReadLine();

            Console.Write("Enter your password: ");
            string password = Console.ReadLine();
            if (username=="Admin" & password=="pass"){
                flag=1;
                break;
                
            }
            trials--;
                
            }
            if(flag==0){
            Console.Write("Invalid attempts for 3 times. Exiting....");
                
            }else{
                Console.Write("Success ");

                
            }


        }
    }
}
