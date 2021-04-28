using _06.FoodShortage.Interfaces;
using System;
using System.Collections.Generic;

namespace _06.FoodShortage
{
    public class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Dictionary<string, IBuyer> buyers = new Dictionary<string, IBuyer>();
            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries);

                IBuyer buyer;
                if (input.Length == 4)
                {
                    buyer = new Citizen(input[0], int.Parse(input[1]), input[2], input[3]);
                }
                else
                {
                    buyer = new Rebel(input[0], int.Parse(input[1]), input[2]);
                }
                buyers.Add(input[0], buyer);
            }
            while (true)
            {
                string input = Console.ReadLine();
                if (input == "End")
                {
                    break;
                }
                if (buyers.ContainsKey(input))
                {
                    buyers[input].BuyFood();
                }
            }
            int foodBought = 0;
            foreach (var item in buyers)
            {
                foodBought += item.Value.Food;
            }
            Console.WriteLine(foodBought);
        }
    }
}
