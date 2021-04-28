using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm
{
    public abstract class Feline : Mammal
    {
        protected Feline(string name, double weight, double weigthGainPerItemEaten, string livingRegion,string breed, params string[] food) 
            : base(name, weight, weigthGainPerItemEaten, livingRegion, food)
        {
            Breed = breed;
        }

        public string Breed { get; private set; }

        public override string ToString()
        {
            return $"{GetType().Name} [{Name}, {Breed}, {Weight}, {LivingRegion}, {FoodEaten}]";
        }
    }
}
