using System;
using System.Collections.Generic;

namespace _09.SimpleTextEditor
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            string someString = string.Empty;
            Stack<string> history = new Stack<string>();
            for (int i = 0; i < n; i++)
            {
               string[] command = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                switch (command[0])
                {
                    case "1":
                        history.Push(someString);
                        someString += command[1];
                        break;
                    case "2":
                        history.Push(someString);
                        int placesToRemove = int.Parse(command[1]);
                        someString = someString.Substring(0,someString.Length - placesToRemove);
                        break;
                    case "3":
                        int charToReturn = int.Parse(command[1]);
                        Console.WriteLine(someString[charToReturn-1]);
                        break;
                    case "4":
                        someString = history.Pop();
                        break;
                }
            }
        }
    }
}
