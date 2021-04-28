using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm
{
    public class Mouse : Mammal
    {
        private const double weightGainPerItemEaten = 0.10;
        private static readonly string[] food = { "Vegetable","Fruit",};
        public Mouse(string name, double weight, string livingRegion) :
            base(name, weight, weightGainPerItemEaten, livingRegion, food)
        {

        }

        public override string AskForFood()
        {
            return "Squeak";
        }
    }
}
