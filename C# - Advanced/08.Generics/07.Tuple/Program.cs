using System;
using System.Collections.Generic;

namespace _07.TupleExcersise
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] stringInput = Console.ReadLine().Split(" ");
            Tuple<string,string> stringTuple = new Tuple<string,string>($"{stringInput[0]} {stringInput[1]}", stringInput[2]);
            Console.WriteLine(stringTuple);

            stringInput = Console.ReadLine().Split(" ");
            Tuple<string, int> strIntTuple = new Tuple<string, int>(stringInput[0], int.Parse(stringInput[1]));
            Console.WriteLine(strIntTuple);

            stringInput = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            Tuple<int, double> intDoubleTuple = new Tuple<int, double>(int.Parse(stringInput[0]), double.Parse(stringInput[1]));
            Console.WriteLine(intDoubleTuple);

        }
    }
}
