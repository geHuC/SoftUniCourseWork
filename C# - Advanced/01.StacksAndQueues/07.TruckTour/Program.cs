using System;
using System.Collections.Generic;

namespace _07.TruckTour
{
    class Program
    {
        static void Main(string[] args)
        {
            var gasStations = int.Parse(Console.ReadLine());
            Queue<int> petrol = new Queue<int>();
            Queue<int> distance = new Queue<int>();

            for (int i = 0; i < gasStations; i++)
            {
                string input = Console.ReadLine();
                var inputs = input.Split(' ');
                petrol.Enqueue(int.Parse(inputs[0]));
                distance.Enqueue(int.Parse(inputs[1]));

            }
            for (int l = 0; l < gasStations; l++)
            {
                if (petrol.Peek() > distance.Peek())
                {
                    int runningPetrol = 0;
                    int runningDistance = 0;
                    bool isCircle = true;
                    for (int k = 0; k < gasStations + 1; k++)
                    {
                        if (runningPetrol + petrol.Peek() >= runningDistance + distance.Peek())
                        {
                            runningPetrol = runningPetrol + petrol.Peek();
                            runningDistance = runningDistance + distance.Peek();
                            petrol.Enqueue(petrol.Dequeue());
                            distance.Enqueue(distance.Dequeue());
                        }
                        else
                        {
                            isCircle = false;
                            petrol.Enqueue(petrol.Dequeue());
                            distance.Enqueue(distance.Dequeue());
                        }
                    }
                    if (isCircle)
                    {
                        Console.WriteLine(l);
                        break;
                    }
                }
                else
                {
                    petrol.Enqueue(petrol.Dequeue());
                    distance.Enqueue(distance.Dequeue());
                }
            }
        }
    }
}
