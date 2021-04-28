using System;

namespace _02.KnightsOfHonor
{
    class Program
    {
        static void Main(string[] args)
        {
            Action<string> myAction = act => {
                string[] arr = act.Split(" ", StringSplitOptions.RemoveEmptyEntries);
                foreach (var word in arr)
                {
                    Console.WriteLine("Sir " + word);

                }
            };
            myAction(Console.ReadLine());
        }
    }
}
