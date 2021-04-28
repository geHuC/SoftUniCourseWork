using System;
using System.Collections.Generic;

namespace _04.EvenTimes
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Dictionary<int, int> numbers = new Dictionary<int, int>();
            for (int i = 0; i < n; i++)
            {
                int input = int.Parse(Console.ReadLine());
                if (!numbers.ContainsKey(input))
                {
                    numbers.Add(input, 1);
                }
                else
                {
                    numbers[input]+= 1;

                }
            }
            foreach (KeyValuePair<int,int> number in numbers)
            {
                if (numbers[number.Key] % 2 == 0)
                {
                    Console.WriteLine(number.Key);
                    break;
                }
            }
        }
    }
}
