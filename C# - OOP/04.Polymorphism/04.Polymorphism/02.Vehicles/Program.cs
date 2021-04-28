using System;
using System.Collections.Generic;

namespace _01.Vehicles
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Vehicle> vehicles = new Dictionary<string, Vehicle>();
            string[] input = Console.ReadLine().Split();
            Car car = new Car(double.Parse(input[1]), double.Parse(input[2]),double.Parse(input[3]));
            vehicles.Add("Car",car);
            input = Console.ReadLine().Split();
            Truck truck = new Truck(double.Parse(input[1]), double.Parse(input[2]), double.Parse(input[3]));
            vehicles.Add("Truck", truck);
            input = Console.ReadLine().Split();
            Bus bus = new Bus(double.Parse(input[1]), double.Parse(input[2]), double.Parse(input[3]));
            vehicles.Add("Bus", bus);
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                input = Console.ReadLine().Split();
                string command = input[0];
                string vehicle = input[1];
                double quantity = double.Parse(input[2]);
                switch (command)
                {
                    case "Drive":
                        vehicles[vehicle].Drive(quantity);
                        break;
                    case "DriveEmpty":
                        vehicles[vehicle].DriveEmpty(quantity);
                        break;
                    case "Refuel":
                        vehicles[vehicle].Refuel(quantity);
                        break;
                }
            }
            foreach (var item in vehicles)
            {
                Console.WriteLine(item.Value.FuelLeft());
            }
        }
    }
}
