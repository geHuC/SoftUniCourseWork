using System;
using System.Collections.Generic;
using System.Text;

namespace _01.Vehicles
{
    public abstract class Vehicle
    {
        private double airConModifier;
        private double fuelTankModifier;
        private double fuel;
        public Vehicle(double fuel, double consumption, double tankCapacity,double airConModifier, double fuelTankModifier)
        {
            TankCapacity = tankCapacity;
            Fuel = fuel;
            Consumption = consumption;
            this.airConModifier = airConModifier;
            this.fuelTankModifier = fuelTankModifier;
        }
        public double Consumption { get; private set; }
        public double Fuel 
        {
            get
            {
                return fuel;
            }
            private set 
            {
                if (value > TankCapacity)
                {
                    fuel = 0;
                }
                else
                {
                    fuel = value;
                }
            }
         }
        public double TankCapacity { get; private set; }

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
        public void DriveEmpty(double distance)
        {
            double fuelNeeded = distance * Consumption;
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
            if (quantity >0)
            {
                if (Fuel + quantity > TankCapacity)
                {
                    Console.WriteLine($"Cannot fit {quantity} fuel in the tank");
                }
                else
                {
                    Fuel += quantity * fuelTankModifier;
                }
            }
            else
            {
                Console.WriteLine("Fuel must be a positive number");
            }
        }
        public string FuelLeft()
        {
            return $"{this.GetType().Name}: {Fuel:F2}";
        }

    }
}
