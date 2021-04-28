using System;
using System.Collections.Generic;

namespace DefiningClasses
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string,Engine> engines = new Dictionary<string, Engine>();
            List<Car> cars = new List<Car>();
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                string model = input[0];
                string power = input[1];
                switch (input.Length)
                {
                    case 2:
                        engines.Add(model,new Engine(model, power));
                        break;
                    case 3:
                        engines.Add(model,new Engine(model, power, input[2]));
                        break;
                    case 4:
                        engines.Add(model,new Engine(model, power, input[2],input[3]));
                        break;
                }
            }
            int m = int.Parse(Console.ReadLine());
            for (int i = 0; i < m; i++)
            {
                string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                string model = input[0];
                string engine = input[1];
                switch (input.Length)
                {
                    case 2:
                        cars.Add(new Car(model, engines[engine]));
                        break;
                    case 3:
                        cars.Add(new Car(model, engines[engine], input[2]));
                        break;
                    case 4:
                        cars.Add(new Car(model, engines[engine], input[2], input[3]));
                        break;
                }
            }
            foreach (var car in cars)
            {
                Console.WriteLine(car.ToString());
            }
        }
    }
}
