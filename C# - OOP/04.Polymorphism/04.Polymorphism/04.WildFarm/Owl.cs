using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm
{

    public class Owl : Bird
    {

        private const double weightGainPerItemEaten = 0.25;
        private static readonly string[] food = {"Meat"};
        public Owl(string name, double weight, double wingSize) 
            : base(name, weight, weightGainPerItemEaten, wingSize, food)
        {
        }

        public override string AskForFood()
        {
            return "Hoot Hoot";
        }
    }
}
