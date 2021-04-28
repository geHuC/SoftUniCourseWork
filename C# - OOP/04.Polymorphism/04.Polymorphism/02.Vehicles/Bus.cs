using System;
using System.Collections.Generic;
using System.Text;

namespace _01.Vehicles
{
    class Bus:Vehicle
    {
        private const double airConModifier = 1.4;
        private const double fuelTankModifier = 1;
        public Bus(double fuel, double consumption, double tankCapacity)
            : base(fuel, consumption, tankCapacity, airConModifier, fuelTankModifier)
        {
        }
    }
}

