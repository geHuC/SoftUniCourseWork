using System;
using System.Collections.Generic;
using System.Linq;

namespace _12.TriFunciton
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            List<string> names = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).ToList();
            Func<char[], int, bool> func = (c, n) =>
              {
                  int size = 0;
                  foreach (char letter in c)
                  {
                      size += letter;
                  }
                  if (size >= n)
                  {
                      return true;
                  }
                  else
                  {
                      return false;
                  }
              };
            print(func, names, number);
        }
        static void print(Func<char[],int,bool> func,List<string> names, int size)
        {
            foreach (string name in names)

            {
                if (func(name.ToCharArray(0,name.Length),size))
                {
                    Console.WriteLine(name);
                    break;
                }
            }
        }
    }
}
