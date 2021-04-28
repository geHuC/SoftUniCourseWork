using System;
using System.Collections.Generic;
using System.Text;

namespace DefiningClasses
{
    public class Car
    {
        public string Model { get; set; }
        public double FuelAmount { get; set; }

        public double FuelConsupmpitonPerKilometer { get; set; }
        public double TravelledDistance { get; set; } = 0;
        public Car(string model, double fuelAmount, double fuelConsuption)
        {
            this.Model = model;
            this.FuelAmount = fuelAmount;
            this.FuelConsupmpitonPerKilometer = fuelConsuption;
        }
        public void canTravel(double distance)
        {
            double toTravel = distance * this.FuelConsupmpitonPerKilometer;
            double fuel = this.FuelAmount;
            if (fuel>=toTravel)
            {
                this.FuelAmount = fuel - toTravel;
                TravelledDistance += distance;
            }
            else
            {
                Console.WriteLine("Insufficient fuel for the drive");
            }
        }
    }
}
