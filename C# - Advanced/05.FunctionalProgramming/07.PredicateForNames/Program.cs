using System;

namespace _07.PredicateForNames
{
    class Program
    {
        static void Main(string[] args)
        {
            int lenght = int.Parse(Console.ReadLine());
            Predicate<string> isLength = l => l.Length <= lenght;
            string[] names = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            foreach (var name in names)
            {
                if (isLength(name))
                {
                    Console.WriteLine(name);
                }
            }
        }
    }
}
