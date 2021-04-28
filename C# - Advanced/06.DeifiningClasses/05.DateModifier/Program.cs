using System;

namespace DefiningClasses
{
    class Program
    {
        static void Main(string[] args)
        {
            DateModifier date = new DateModifier();
            Console.WriteLine(date.getDifference(Console.ReadLine(), Console.ReadLine()));
        }
    }
}
