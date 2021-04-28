using System;

namespace _01.ActionPoint
{
    class Program
    {
        static void Main(string[] args)
        {
            Action<string> myAction = act => {
                string[] arr = act.Split(" ", StringSplitOptions.RemoveEmptyEntries);
                foreach (var word in arr)
                {
                    Console.WriteLine(word);

                }
                };
            myAction(Console.ReadLine());
        }
    }
}
