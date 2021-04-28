using System;
using System.Collections.Generic;
using System.Linq;

namespace _2020._12._01.Cooking
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue<int> liquid = new Queue<int>(Console.ReadLine().Split(" ").Select(int.Parse));
            Stack<int> ingredient = new Stack<int>(Console.ReadLine().Split(" ").Select(int.Parse));
            SortedDictionary<string, int> goods = new SortedDictionary<string, int>()
            {
                {"Bread", 0},
                {"Cake", 0},
                {"Pastry", 0},
                {"Fruit Pie", 0},
            };
            while (liquid.Count >0 && ingredient.Count >0)
            {
                int sum = liquid.Peek() + ingredient.Peek();
                switch (sum)
                {
                    case 25: { goods["Bread"]++;ingredient.Pop();break; }
                    case 50: { goods["Cake"]++;ingredient.Pop();break; }
                    case 75: { goods["Pastry"]++; ingredient.Pop();break; }
                    case 100: { goods["Fruit Pie"]++; ingredient.Pop();break; }
                    default: { ingredient.Push(ingredient.Pop() +3);break; }
                }
                liquid.Dequeue();
            }
            if (goods.Any(x => x.Value < 1))
            {
                Console.WriteLine("Ugh, what a pity! You didn't have enough materials to cook everything.");
            }
            else
            {
                Console.WriteLine("Wohoo! You succeeded in cooking all the food!");
            }
            if (liquid.Count > 0)
            {
                Console.WriteLine("Liquids left: " + string.Join(", ",liquid));
            }
            else
            {
                Console.WriteLine("Liquids left: none");
            }
            if (ingredient.Count > 0)
            {
                Console.WriteLine("Ingredients left: " + string.Join(", ", ingredient));
            }
            else
            {
                Console.WriteLine("Ingredients left: none");
            }
            foreach (var item in goods)
            {
                Console.WriteLine($"{item.Key}: {item.Value}");
            }
        }
    }
}
