using System;
using System.Collections.Generic;

namespace _05.CountSymbols
{
    class Program
    {
        static void Main(string[] args)
        {
            SortedDictionary<char, int> charactes = new SortedDictionary<char, int>();
            char[] input = Console.ReadLine().ToCharArray();

            for (int i = 0; i < input.Length; i++)
            {
                if (!charactes.ContainsKey(input[i]))
                {
                    charactes.Add(input[i], 1);
                }
                else
                {
                    charactes[input[i]] += 1;

                }
            }
            foreach (KeyValuePair<char, int> character in charactes)
            {
                Console.WriteLine($"{character.Key}: {character.Value} time/s");
            }
        }
    }
}
