using System;
using System.Collections.Generic;
using System.Text;

namespace _01.Vehicles
{
    class Truck:Vehicle
    {
        private const double airConModifier = 1.6;
        private const double fuelTankModifier = 0.95;
        public Truck(double fuel, double consumption)
            : base(fuel, consumption, airConModifier, fuelTankModifier)
        {
        }

    }
}
