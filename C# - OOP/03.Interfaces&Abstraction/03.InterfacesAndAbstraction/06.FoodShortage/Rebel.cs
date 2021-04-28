using _06.FoodShortage.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace _06.FoodShortage
{
    public class Rebel : IBuyer, INamable
    {
        public Rebel(string name, int age, string group)
        {
            Name = name;
            Food = 0;
            Age = age;
            Group = group;
        }
        public string Name { get; private set; }

        public int Food { get; private set; }
        public int Age { get; private set; }
        public string Group { get; private set; }

        public void BuyFood()
        {
            Food += 5;
        }
    }
}
