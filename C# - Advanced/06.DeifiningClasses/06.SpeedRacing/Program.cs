using System;
using System.Collections.Generic;

namespace DefiningClasses
{
    public class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Car> collection = new Dictionary<string, Car>();
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                string model = input[0];
                double fuel = double.Parse(input[1]);
                double consumption = double.Parse(input[2]);
                Car car = new Car(model, fuel, consumption);
                collection.Add(model, car);
            }
            string commands = Console.ReadLine();
            while (commands!="End")
            {
                string[] command = commands.Split(" ", StringSplitOptions.RemoveEmptyEntries);
                if (command[0] == "Drive")
                {
                    double distance = double.Parse(command[2]);
                    string model = command[1];
                    collection[model].canTravel(distance);
                    commands = Console.ReadLine();
                }       
            }
            foreach (var brichka in collection.Values)
            {
                Console.WriteLine("{0} {1:F2} {2:F0}",brichka.Model,brichka.FuelAmount, brichka.TravelledDistance);
            }

        }
    }
}
