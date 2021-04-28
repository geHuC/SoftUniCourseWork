using System;
using System.Collections.Generic;
using System.Text;

namespace DefiningClasses
{
    class Engine
    {
        public int Power { get; set; }
        public int Speed { get; set; }
        public Engine(int power, int speed)
        {
            Power = power;
            Speed = speed;
        }
    }
}
