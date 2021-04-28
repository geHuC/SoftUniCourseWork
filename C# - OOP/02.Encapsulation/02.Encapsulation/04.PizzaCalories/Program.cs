using System;

namespace _04.PizzaCalories
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                string[] pizzaParts = Console.ReadLine().Split();
                Pizza pizza = new Pizza(pizzaParts[1]);
                string[] dougParts = Console.ReadLine().Split();
                Dough dough = new Dough(dougParts[1], dougParts[2], int.Parse(dougParts[3]));
                pizza.Dough = dough;
                while (true)
                {
                    string[] input = Console.ReadLine().Split();
                    if (input[0] == "END")
                    {
                        break;
                    }
                    Topping top = new Topping(input[1], int.Parse(input[2]));
                    pizza.AddToping(top);
                }
                Console.WriteLine($"{pizza.Name} - {pizza.Calories:F2} Calories.");
            }
            catch( Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
