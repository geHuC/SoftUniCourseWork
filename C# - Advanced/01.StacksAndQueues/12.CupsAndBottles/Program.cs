using System;
using System.Collections.Generic;
using System.Linq;

namespace _12.CupsAndBottles
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue<int> cups = new Queue<int>(Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray());
            Stack<int> bottles = new Stack<int>(Console.ReadLine().Split(' ',StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray());
            int wastedWater = 0;
            while (cups.Any() && bottles.Any())
            {
                int cupSize = cups.Dequeue();
                int bottleSize = bottles.Pop();
                if (cupSize <= bottleSize)
                {
                    wastedWater += bottleSize - cupSize;
                }
                else
                {
                    bool isFull = false;
                    while (!isFull)
                    {
                        if (cupSize <= bottleSize)
                        {
                            wastedWater += bottleSize - cupSize;
                            isFull = true;
                        }
                        else
                        {
                            cupSize -= bottleSize;
                            bottleSize = bottles.Pop();
                        }
                    }
                }
            }
            if (cups.Any())
            {
                Console.WriteLine("Cups: " + string.Join(" ",cups));
                Console.WriteLine($"Wasted litters of water: {wastedWater}");
            }
            else
            {
                Console.WriteLine("Bottles: " + string.Join(" ", bottles));
                Console.WriteLine($"Wasted litters of water: {wastedWater}");
            }

        }
    }
}
