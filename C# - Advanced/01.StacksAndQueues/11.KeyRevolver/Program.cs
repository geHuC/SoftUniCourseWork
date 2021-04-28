using System;
using System.Collections.Generic;
using System.Linq;

namespace _11.KeyRevolver
{
    class Program
    {
        static void Main(string[] args)
        {
            int bulletPrice = int.Parse(Console.ReadLine());
            int barrelSize = int.Parse(Console.ReadLine());
            Stack<int> bullets = new Stack<int>(Console.ReadLine().Split(' ').Select(int.Parse).ToArray());
            Queue<int> locks = new Queue<int>(Console.ReadLine().Split(' ').Select(int.Parse).ToArray());
            int value = int.Parse(Console.ReadLine());
            int numberOfBullets = bullets.Count;
            int bulletsFired = 0;

            while (locks.Any() && bullets.Any())
            {

                if (bulletsFired == barrelSize)
                {
                    Console.WriteLine("Reloading!");
                    bulletsFired = 0;
                }
                int currentBullet = bullets.Pop();
                bulletsFired++;
                int currentLock = locks.Peek();
                if (currentBullet <= currentLock)
                {
                    locks.Dequeue();
                    Console.WriteLine("Bang!");
                }
                else
                {
                    Console.WriteLine("Ping!");
                }

            }
            if (bulletsFired == barrelSize && bullets.Any())
            {
                Console.WriteLine("Reloading!");
            }
            if (locks.Any())
            {
                Console.WriteLine($"Couldn't get through. Locks left: {locks.Count}");
            }
            else
            {
                int earned = value - ((numberOfBullets - bullets.Count) * bulletPrice);
                Console.WriteLine($"{bullets.Count} bullets left. Earned ${earned}");
            }
        }
    }
}
