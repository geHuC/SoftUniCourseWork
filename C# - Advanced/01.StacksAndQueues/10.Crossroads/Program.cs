using System;
using System.Collections.Generic;

namespace _10.Crossroads
{
    class Program
    {
        static void Main(string[] args)
        {
            int greenLight = int.Parse(Console.ReadLine());
            int freeWindow = int.Parse(Console.ReadLine());
            int carsPassed = 0;
            bool crash = false;
            string crashPosition=string.Empty;
            string crashedCar=string.Empty;
            Queue<string> cars = new Queue<string>();

            string input = Console.ReadLine();

            while (input != "END" && crash == false)
            {
                if (input != "green")
                {
                    cars.Enqueue(input);
                }
                else
                {
                    int remainingTime = greenLight;
                    int carsCount = cars.Count;
                    for (int i = 0; i < carsCount; i++)
                    {
                        string currentCar = cars.Dequeue();

                        if (remainingTime >= currentCar.Length)
                        {
                            remainingTime -= currentCar.Length;
                            carsPassed++;
                            if (remainingTime == 0)
                            {
                                break;
                            }
                        }
                        else
                        {
                            remainingTime += freeWindow;
                            if (remainingTime >= currentCar.Length)
                            {
                                carsPassed++;
                                break;
                            }
                            else
                            {
                                crash = true;
                                crashedCar = currentCar;
                                crashPosition = currentCar[remainingTime].ToString();
                                break;
                            }
                        }
                    }
                    
                }
                input = Console.ReadLine();
            }
            if (crash)
            {
                Console.WriteLine("A crash happened!");
                Console.WriteLine($"{crashedCar} was hit at {crashPosition}.");
            }
            else
            {
                Console.WriteLine("Everyone is safe.");
                Console.WriteLine($"{carsPassed} total cars passed the crossroads.");
            }
        }
    }
}
