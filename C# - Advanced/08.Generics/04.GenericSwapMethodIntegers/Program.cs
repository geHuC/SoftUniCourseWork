using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.GenericSwapMethodIntegers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> data = new List<int>();
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                data.Add(int.Parse(Console.ReadLine()));
            }
            int[] toSwap = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            SwapMethod(data, toSwap[0], toSwap[1]);

            static void SwapMethod<T>(List<T> list, int firstIndex, int secondIndex)
            {
                var temp = list[firstIndex];
                list[firstIndex] = list[secondIndex];
                list[secondIndex] = temp;
                Print(list);
            }
            static void Print<T>(List<T> list)
            {
                foreach (var item in list)
                {
                    Console.WriteLine($"{item.GetType()}: {item}");
                }
            }
        }
    }
}
