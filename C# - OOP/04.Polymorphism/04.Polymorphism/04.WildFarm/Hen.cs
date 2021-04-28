using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm
{
    public class Hen : Bird
    {

        private const double weightGainPerItemEaten = 0.35;
        private static readonly string[] food = { "Vegetable", "Fruit", "Meat", "Seeds" };
        public Hen(string name, double weight, double wingSize) 
            : base(name, weight, weightGainPerItemEaten, wingSize, food)
        {
        }

        public override string AskForFood()
        {
            return $"Cluck";
        }
    }
}
