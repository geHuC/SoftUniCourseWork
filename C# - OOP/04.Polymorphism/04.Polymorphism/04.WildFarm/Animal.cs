using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm
{
    public abstract class Animal
    {
        private List<string> AcceptableFood;
        private double weigthGainPerItemEaten;
        public Animal(string name, double weight,double weigthGainPerItemEaten, params string[] food)
        {
            Name = name;
            Weight = weight;
            this.weigthGainPerItemEaten = weigthGainPerItemEaten;
            AcceptableFood = new List<string>(food);
        }
        public string Name { get; private set; }
        public double Weight { get; private set; }
        public int FoodEaten { get; private set; }

        public abstract string AskForFood();
        public void Feed(Food food)
        {
            if (AcceptableFood.Contains(food.GetType().Name))
            {
                Weight += food.Quantity * weigthGainPerItemEaten;
                FoodEaten += food.Quantity;
            }
            else
            {
                Console.WriteLine($"{GetType().Name} does not eat {food.GetType().Name}!");
            }
        }
    }
}
