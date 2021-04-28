using System;
using System.Collections.Generic;
using System.Text;

namespace _01.Vehicles
{
    public class Car : Vehicle
    {
        private const double airConModifier = 0.9;
        private const double fuelTankModifier = 1;
        public Car(double fuel, double consumption, double tankCapacity)
            : base(fuel, consumption, tankCapacity, airConModifier, fuelTankModifier)
        {
        }
    }
}
