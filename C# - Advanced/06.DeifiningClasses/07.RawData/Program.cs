using System;
using System.Collections.Generic;

namespace DefiningClasses
{
    public class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            List<Car> cars = new List<Car>();
            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                //"{model} {engineSpeed} {enginePower} {cargoWeight} {cargoType}
                //{tire1Pressure} {tire1Age} {tire2Pressure} {tire2Age} 
                //{tire3Pressure} {tire3Age} {tire4Pressure} {tire4Age}"
                Engine engine = new Engine(int.Parse(input[2]), int.Parse(input[1]));
                Cargo cargo = new Cargo(int.Parse(input[3]), input[4]);
                Tire[] tires ={
                    new Tire(double.Parse(input[5]), int.Parse(input[6])),
                    new Tire(double.Parse(input[7]), int.Parse(input[8])),
                    new Tire(double.Parse(input[9]), int.Parse(input[10])),
                    new Tire(double.Parse(input[11]), int.Parse(input[12])) };
                cars.Add(new Car(input[0], engine, cargo, tires));
            }
            string criteria = Console.ReadLine();
            foreach (var car in cars)
            {
                switch (criteria)
                {
                    case "fragile":
                        bool isFragile = false;
                        if (car.Cargo.Type == "fragile")
                        {
                            foreach (Tire tire in car.Tires)
                            {
                                if (tire.Pressure<1)
                                {
                                    isFragile = true;
                                }
                            }
                        }
                        if (isFragile)
                        {
                            Console.WriteLine(car.Model);
                        }
                        break;
                    case "flamable":
                        bool isFlamable = false;
                        if (car.Cargo.Type == "flamable")
                        {
                            if (car.Engine.Power >250)
                            {
                                isFlamable = true;
                            }
                        }
                        if (isFlamable)
                        {
                            Console.WriteLine(car.Model);
                        }
                        break;
                }
                
            }
        }
    }
}
