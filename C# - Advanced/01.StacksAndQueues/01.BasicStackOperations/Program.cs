using System;
using System.Collections.Generic;
using System.Collections;

namespace _01.BasicStackOperations
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] xyn = input.Split(' ');
            int n = int.Parse(xyn[0]);
            int s = int.Parse(xyn[1]);
            int x = int.Parse(xyn[2]);

            input = Console.ReadLine();
            string[] numbers = input.Split(' ');
            var stack = new Stack<int>();

            for (int i = 0; i < n; i++)
            {
                stack.Push(int.Parse(numbers[i]));
            }

            if (s < numbers.Length)
            {
                for (int z = 0; z < s; z++)
                {
                    stack.Pop();
                }
                if (stack.Contains(x))
                {
                    Console.WriteLine("true");
                }
                else
                {
                    int[] arr = stack.ToArray();
                    Array.Sort(arr);
                    Console.WriteLine(arr[0]);
                }
            }
            else
            {
                Console.WriteLine("0");
            }
        }
    }
}
