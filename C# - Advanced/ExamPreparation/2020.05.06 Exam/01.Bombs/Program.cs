using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.Bombs
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue<int> effect = new Queue<int>(Console.ReadLine().Split(", ").Select(int.Parse));
            Stack<int> casing = new Stack<int>(Console.ReadLine().Split(", ").Select(int.Parse));
            
            Dictionary<string, int> bombs = new Dictionary<string, int>()
            {
                { "Cherry Bombs", 0},
                {"Datura Bombs", 0 },
                { "Smoke Decoy Bombs", 0},
            };
            bool isFull = false;
            while (effect.Count >0 && casing.Count >0 && !isFull)
            {
                int sum = effect.Peek() + casing.Peek();
                switch (sum)
                {
                    case 40:
                        bombs["Datura Bombs"]++;
                        break;
                    case 60:
                        bombs["Cherry Bombs"]++;
                        break;
                    case 120:
                        bombs["Smoke Decoy Bombs"]++;
                        break;
                    default:
                        int temp = casing.Pop() - 5;
                        casing.Push(temp);
                        continue;
                }
                casing.Pop();
                effect.Dequeue();
                if (bombs.Any( b => b.Value <3))
                {
                    continue;
                }
                else
                {
                    isFull = true;
                }
            }
            if (isFull)
            {
                Console.WriteLine("Bene! You have successfully filled the bomb pouch!");
            }
            else
            {
                Console.WriteLine("You don't have enough materials to fill the bomb pouch.");
            }

            if (effect.Count > 0)
            {
                Console.WriteLine("Bomb Effects: " + string.Join(", ",effect));
            }
            else
            {
                Console.WriteLine("Bomb Effects: empty");
            }
            if (casing.Count > 0)
            {
                Console.WriteLine("Bomb Casings: " + string.Join(", ",casing));
            }
            else
            {
                Console.WriteLine("Bomb Casings: empty");
            }
            foreach (var item in bombs)
            {
                Console.WriteLine($"{item.Key}: {item.Value}");
            }
        }
    }
}

