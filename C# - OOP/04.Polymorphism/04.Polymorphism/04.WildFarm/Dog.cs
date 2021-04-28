using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm
{
    public class Dog : Mammal
    {

        private const double weightGainPerItemEaten = 0.40;
        private static readonly string[] food = {"Meat"};
        public Dog(string name, double weight, string livingRegion) :
            base(name, weight, weightGainPerItemEaten, livingRegion, food)
        {

        }

        public override string AskForFood()
        {
            return "Woof!";
        }
    }
}
