using System;
using System.Collections.Generic;

namespace _04.FastFood
{
    class Program
    {
        static void Main(string[] args)
        {
            int quantity = int.Parse(Console.ReadLine());
            var orders = Console.ReadLine().Split(' ');
            Queue<int> que = new Queue<int>();
            foreach (string order in orders)
            {
                que.Enqueue(int.Parse(order));
            }
            int[] arr = que.ToArray();
            Array.Sort(arr);
            Array.Reverse(arr);
            Console.WriteLine(arr[0]);
            
            while (que.Count >= 1)
            {
                if ((quantity - que.Peek()) >= 0)
                {
                    quantity = quantity - que.Dequeue();
                }
                else
                {
                    string ordersLeft = new string("");
                    foreach(int order in que)
                    {
                        ordersLeft = ordersLeft + order.ToString() + " " ;
                    }
                    Console.WriteLine("Orders left: " + ordersLeft);
                    break;
                }
            }
            if (quantity >= 0 && que.Count ==0)
            {
                Console.WriteLine("Orders complete");
            }

        }
    }
}
