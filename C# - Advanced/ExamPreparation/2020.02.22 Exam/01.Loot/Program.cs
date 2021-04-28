using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.Loot
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue<int> first = new Queue<int>(Console.ReadLine().Split(" ").Select(int.Parse));
            Stack<int> second = new Stack<int>(Console.ReadLine().Split(" ").Select(int.Parse));
            int claimedItems  = 0;
            while (first.Count > 0 && second.Count >0)
            {
                int sum = first.Peek() + second.Peek();
                if (sum %2 ==0)
                {
                    claimedItems += sum;
                    second.Pop();
                    first.Dequeue();
                }
                else
                {
                    first.Enqueue(second.Pop());
                }
            }
            if (first.Count ==0)
            {
                Console.WriteLine("First lootbox is empty");
            }
            if (second.Count == 0)
            {
                Console.WriteLine("Second lootbox is empty");
            }
            if (claimedItems >100)
            {
                Console.WriteLine($"Your loot was epic! Value: {claimedItems}");
            }
            else
            {
                Console.WriteLine($"Your loot was poor... Value: {claimedItems}");
            }
        }
    }
}
