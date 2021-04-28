using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.FindEvenOrOdds
{
    class Program
    {
        static void Main(string[] args)
        {
            Predicate<int> isEven =  n => n % 2 == 0;
            int[] size = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            List<int> output = new List<int>();
            string command = Console.ReadLine();
            for (int i = size[0]; i <= size[1]; i++)
            {
                switch(command)
                {
                    case "odd":
                        if (!isEven(i))
                        {
                            output.Add(i);
                        }
                        break;
                    case "even":
                        if (isEven(i))
                        {
                            output.Add(i);
                        }
                        break;
                }
            }
            Console.WriteLine(string.Join(" ",output));
        }
    }
}
