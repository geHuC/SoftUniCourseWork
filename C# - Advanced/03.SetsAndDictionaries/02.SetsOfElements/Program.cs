using System;
using System.Collections.Generic;

namespace _02.SetsOfElements
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(" ");
            int n = int.Parse(input[0]);
            int m = int.Parse(input[1]);
            HashSet<int> setN = new HashSet<int>();
            HashSet<int> setM = new HashSet<int>();

            for (int i = 0; i < n; i++)
            {
                setN.Add(int.Parse(Console.ReadLine()));
            }
            for (int i = 0; i < m; i++)
            {
                setM.Add(int.Parse(Console.ReadLine()));
            }
            foreach (var number in setN)
            {
                if (setM.Contains(number))
                {
                    Console.Write($"{number} ");
                }
            }
        }
    }
}
