using System;

namespace _03.Stack
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(" ",StringSplitOptions.RemoveEmptyEntries);
            CustomStack<int> stack = new CustomStack<int>();
            while (input[0] !="END")
            {
                switch (input[0])
                {
                    case "Pop":
                        stack.Pop();
                        break;
                    case "Push":
                        for (int i = 1; i < input.Length; i++)
                        {
                            string[] why = input[i].Split(',');
                            stack.Push(int.Parse(why[0]));
                        }
                        break;
                }
                input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            }
            foreach (var item in stack)
            {
                Console.WriteLine(item);
            }
            foreach (var item in stack)
            {
                Console.WriteLine(item);
            }

        }
    }
}
