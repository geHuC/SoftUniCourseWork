using System;
using System.Collections.Generic;

namespace _05.GenericCountMethodStrings
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> data = new List<string>();
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                data.Add(Console.ReadLine());
            }
            string toCompare = Console.ReadLine();
            Console.WriteLine(ComareMe(data, ref toCompare));

            static int ComareMe<T>(List<T> list, ref T toCompare) where T : IComparable<T>
            {
                int count = 0;

                foreach (var item in list)
                {
                    if (item.CompareTo(toCompare)>0)
                    {
                        count++;
                    }
                }

                return count;
            }
        }
    }
}
