using System;
using System.Collections.Generic;

namespace _06.Wardrobe
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Dictionary<string, Dictionary<string, int>> wardrobe = new Dictionary<string, Dictionary<string, int>>();

            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(" -> ");
                string color = input[0];
                string[] items = input[1].Split(",");

                if (!wardrobe.ContainsKey(color))
                {
                    wardrobe.Add(color, new Dictionary<string, int>());
                }
                foreach (var item in items)
                {
                    if (!wardrobe[color].ContainsKey(item))
                    {
                        wardrobe[color].Add(item, 1);
                    }
                    else
                    {
                        wardrobe[color][item] += 1;
                    }
                }

            }
            string[] toMatch = Console.ReadLine().Split(" ");
            string neededColour = toMatch[0];
            string neededItem = toMatch[1];

            foreach (var colour in wardrobe)
            {
                Console.WriteLine($"{colour.Key} clothes:");
                foreach (var item in colour.Value)
                {
                    if (neededColour == colour.Key && neededItem == item.Key)
                    {
                        Console.WriteLine($"* {item.Key} - {item.Value} (found!)");
                    }
                    else
                    {
                        Console.WriteLine($"* {item.Key} - {item.Value}");
                    }
                }
            }
        }
    }
}
