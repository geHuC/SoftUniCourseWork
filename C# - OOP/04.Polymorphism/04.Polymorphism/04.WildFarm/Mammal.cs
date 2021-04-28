using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm
{
    public abstract class Mammal : Animal
    {
        public Mammal(string name, double weight, double weigthGainPerItemEaten,string livingRegion,params string[] food) :
            base(name, weight, weigthGainPerItemEaten, food)
        {
            LivingRegion = livingRegion;
        }
        public string LivingRegion { get; private set; }
        public override string ToString()
        {
            return $"{GetType().Name} [{Name}, {Weight}, {LivingRegion}, {FoodEaten}]";
        }
    }
}
