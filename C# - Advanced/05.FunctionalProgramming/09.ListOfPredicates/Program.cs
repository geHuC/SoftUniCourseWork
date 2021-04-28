using System;
using System.Collections.Generic;
using System.Linq;

namespace _09.ListOfPredicates
{
    class Program
    {   
        static void Main(string[] args)
        {
            Func<int[], int, bool> div = isDivisible;
            int n = int.Parse(Console.ReadLine());
            int[] numbers = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            List<int> toPrint = new List<int>();
            for (int i = 1; i <= n; i++)
            {
                if (div(numbers,i))
                {
                    toPrint.Add(i);
                }
            }
            Console.WriteLine(string.Join(" ",toPrint));
        }

        static bool isDivisible(int[] array, int number)
        {
            Predicate<int> x = n => number%n !=0;
            foreach (int n in array)
            {
                if (x(n))
                {
                    return false;
                }
            }
            return true;
        }
    }

}
