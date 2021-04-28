using System;
using System.Collections.Generic;
using System.Linq;

namespace _01FlowerWreths
{
    class Program
    {
        static void Main(string[] args)
        {
            Stack<int> roses = new Stack<int>(Console.ReadLine().Split(", ").Select(int.Parse));
            Queue<int> lilies = new Queue<int>(Console.ReadLine().Split(", ").Select(int.Parse));
            int wrethsCount = 0;
            int remaining = 0;

            while (roses.Count >0 && lilies.Count >0)
            {
                int sum = roses.Peek() + lilies.Peek();

                if (sum == 15)
                {
                    wrethsCount++;
                }
                else if (sum <15)
                {
                    remaining += sum;
                }
                else
                {
                    if (sum % 2 == 0)
                    {
                        remaining += 14;
                    }
                    else
                    {
                        wrethsCount++;
                    }
                }
                roses.Pop();
                lilies.Dequeue();
            }
            wrethsCount += remaining / 15;
            if (wrethsCount >= 5)
            {
                Console.WriteLine($"You made it, you are going to the competition with {wrethsCount} wreaths!");
            }
            else
            {
                Console.WriteLine($"You didn't make it, you need {5 - wrethsCount} wreaths more!");
            }
        }
    }
}
