using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.StackQueue
{
    class Program
    {
        static void Main(string[] args)
        {
            int attacks = int.Parse(Console.ReadLine());
            int waveCounter = 0;
            Queue<int> plates = new Queue<int>(Console.ReadLine().Split(" ").Select(int.Parse));
            Stack<int> orcs = new Stack<int>();

            for (int i = 0; i < attacks; i++)
            {
                if (plates.Count < 1)
                {
                    break;
                }
                orcs = new Stack<int>(Console.ReadLine().Split(" ").Select(int.Parse));
                waveCounter++;

                if (waveCounter == 3)
                {
                    plates.Enqueue(int.Parse(Console.ReadLine()));
                    waveCounter = 0;
                }
                while (plates.Count > 0 && orcs.Count > 0)
                {
                    int plate = plates.Dequeue();
                    int curOrc = orcs.Pop();
                    if (plate == curOrc)
                    {
                        continue;
                    }
                    if (plate > curOrc)
                    {
                        plate -= curOrc;
                        Queue<int> tempQ = new Queue<int>();
                        tempQ.Enqueue(plate);
                        foreach (var item in plates)
                        {
                            tempQ.Enqueue(item);
                        }
                        plates = tempQ;
                        continue;
                    }
                    if (plate < curOrc)
                    {
                        curOrc -= plate;
                        orcs.Push(curOrc);
                    }
                }
            }
            if (plates.Count < 1)
            {
                Console.WriteLine("The orcs successfully destroyed the Gondor's defense.");
                Console.WriteLine("Orcs left: " + string.Join(", ", orcs));
            }
            else
            {
                Console.WriteLine("The people successfully repulsed the orc's attack.");
                Console.WriteLine("Plates left: " + string.Join(", ", plates));
            }
        }
    }
}
