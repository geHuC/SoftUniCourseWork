using System;
using System.Collections.Generic;
using System.Text;

namespace _01.Vehicles
{
    public abstract class Vehicle
    {
        private double airConModifier;
        private double fuelTankModifier;
        public Vehicle(double fuel, double consumption, double airConModifier, double fuelTankModifier)
        {
            Fuel = fuel;
            Consumption = consumption;
            this.airConModifier = airConModifier;
            this.fuelTankModifier = fuelTankModifier;
        }
        public double Consumption { get; private set; }
        public double Fuel { get; private set; }

        public void Drive(double distance)
        {
            double fuelNeeded = distance * (Consumption + airConModifier);
            if (Fuel >= fuelNeeded)
            {
                Fuel -= fuelNeeded;
                Console.WriteLine($"{this.GetType().Name} travelled {distance} km");
            }
            else
            {
                Console.WriteLine($"{this.GetType().Name} needs refueling");
            }
        }
        public void Refuel(double quantity)
        {
            Fuel += quantity * fuelTankModifier;
        }
        public string FuelLeft()
        {
            return $"{this.GetType().Name}: {Fuel:F2}";
        }

    }
}
