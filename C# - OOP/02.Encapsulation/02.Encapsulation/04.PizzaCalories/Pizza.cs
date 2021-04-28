using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _04.PizzaCalories
{
    public class Pizza
    {
        private const int MinNameLenght = 1;
        private const int MaxNameLenght = 15;
        private const int MaxToppings = 10;
        private string name;
        private List<Topping> toppings;

        public Pizza(string name)
        {
            Name = name;
            toppings = new List<Topping>(MaxToppings);
        }
        public string Name
        {
            get => name; 
            private set
            {
                if (value.Length < MinNameLenght || value.Length > MaxNameLenght)
                {
                    throw new ArgumentException($"Pizza name should be between {MinNameLenght} and {MaxNameLenght} symbols.");
                }
                name = value;
            }
        }
        public Dough Dough { get; set; }
        public int ToppingCount { get => toppings.Count; }
        public double Calories { get => (Dough.GetCalories() + toppings.Sum(t => t.GetCalories())); }

        public void AddToping(Topping topping)
        {
            if (toppings.Count == MaxToppings)
            {
                throw new InvalidOperationException($"Number of toppings should be in range [0..{MaxToppings}].");
            }
            toppings.Add(topping);
        }
    }
}
