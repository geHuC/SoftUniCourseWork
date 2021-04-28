using System;
using System.Collections.Generic;
using System.Text;

namespace _04.PizzaCalories
{
    public class Topping
    {
        private const int maxWeight = 50;
        private const int minWeihgt = 1;
        private string type;
        private int weight;

        public Topping(string type, int weight)
        {
            Type = type;
            Weight = weight;
        }
        public string Type
        {
            get => type;
            private set
            {
                if (Enum.TryParse(value, true, out ToppingEnum @enum))
                {
                    type = value;
                }
                else
                {
                    throw new ArgumentException($"Cannot place {value} on top of your pizza."); 
                }
            }
        }
        public int Weight
        {
            get => weight; 
            private set
            {
                if (value < minWeihgt || value >maxWeight)
                {
                    throw new ArgumentException($"{Type} weight should be in the range [{minWeihgt}..{maxWeight}].");
                }
                weight = value;
            }
        }

        public double GetCalories()
        {
            double typeModifier = getTypeModified();
            return weight *2 * typeModifier;
        }

        private double getTypeModified()
        {
            ToppingEnum type = (ToppingEnum)Enum.Parse(typeof(ToppingEnum), Type, true);
            switch (type)
            {
                case ToppingEnum.Meat:
                    return 1.2;
                case ToppingEnum.Veggies:
                    return 0.8;
                case ToppingEnum.Cheese:
                    return 1.1;
                case ToppingEnum.Sauce:
                    return 0.9;
                default:
                    return 1;
            }
        }
    }
}
