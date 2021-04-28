using System;
using System.Collections.Generic;

namespace _06.GenericCountMethodDoubles
{
    class Program
    {
        static void Main(string[] args)
        {
            List<double> data = new List<double>();
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                data.Add(double.Parse(Console.ReadLine()));
            }
            double toCompare = double.Parse(Console.ReadLine());
            Console.WriteLine(ComareMe(data, ref toCompare));

            static int ComareMe<T>(List<T> list, ref T toCompare) where T : IComparable<T>
            {
                int count = 0;

                foreach (var item in list)
                {
                    if (item.CompareTo(toCompare) > 0)
                    {
                        count++;
                    }
                }

                return count;
            }
        }
    }
}
