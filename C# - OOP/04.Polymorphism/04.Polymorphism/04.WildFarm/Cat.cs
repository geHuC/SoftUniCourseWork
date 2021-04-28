using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm
{
    public class Cat : Feline
    {

        private const double weightGainPerItemEaten = 0.30;
        private static readonly string[] food = { "Vegetable", "Meat"};
        public Cat(string name, double weight, string livingRegion, string breed) :
            base(name, weight, weightGainPerItemEaten, livingRegion, breed, food)
        {

        }

        public override string AskForFood()
        {
            return "Meow";
        }
    }
}
