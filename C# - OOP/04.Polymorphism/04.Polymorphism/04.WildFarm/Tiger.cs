using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm
{
   public class Tiger:Feline
    {

        private const double weightGainPerItemEaten = 1.00;
        private static readonly string[] food = {"Meat"};
        public Tiger(string name, double weight, string livingRegion, string breed) :
            base(name, weight, weightGainPerItemEaten, livingRegion, breed, food)
        {

        }

        public override string AskForFood()
        {
            return "ROAR!!!";
        }
    }
}
