using System;
using System.Collections.Generic;
using System.Linq;

namespace _06.ReverseAndExclude
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int dNumber = int.Parse(Console.ReadLine());
            List<int> toPrint = removeDivisible(input, dNumber);
            toPrint.Reverse();
            print(toPrint);
        }
        static List<int> removeDivisible (int[] array, int divsionNum)
        {
            Predicate<int> isDivisible = n => n % divsionNum == 0;
            List<int> list = new List<int>();
            foreach (var number in array)
            {
                if (!isDivisible(number))
                {
                    list.Add(number);
                }
            }
            return list;
        }
        static void print(List<int> list)
        {
            Console.WriteLine(string.Join(" ", list));
        }
    }
}
