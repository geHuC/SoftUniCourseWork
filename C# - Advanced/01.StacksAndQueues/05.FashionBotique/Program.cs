using System;
using System.Collections.Generic;

namespace _05.FashionBotique
{
    class Program
    {
        static void Main(string[] args)
        {
            var items = Console.ReadLine().Split(' ');
            int rack = int.Parse(Console.ReadLine());
            int numRack = 1;
            int curRack = 0;
            Stack<int> stack = new Stack<int>();
            foreach (string item in items)
            {
                stack.Push(int.Parse(item));
            }

            while (stack.Count > 0)
            {
                if  ((curRack + stack.Peek()) <= rack)
                {
                    curRack = curRack + stack.Pop();
                }
                else
                {
                    curRack = stack.Pop();
                    numRack++;
                }

            }
            Console.WriteLine(numRack);
        }
    }
}
