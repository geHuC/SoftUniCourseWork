using System;
using System.Collections.Generic;

namespace _03.MaximumAndMinimum
{
    class Program
    {
        static void Main(string[] args)
        {
            var stack = new Stack<int>();

            for (int i = 0; i < 105; i++)
            {
                string input = Console.ReadLine();
                if (string.IsNullOrEmpty(input))
                {
                    break;
                }
                else
                {

                    switch (input.Substring(0, 1))
                    {
                        case "1":
                            if (input.Substring(0, 2) == "1 ")
                            {
                                string[] numbers = input.Split(' ');
                                stack.Push(int.Parse(numbers[1]));
                            }
                            break;
                        case "2":
                            if (stack.Count > 0)
                            {
                                stack.Pop();
                            }
                            break;
                        case "3":
                            if (stack.Count > 0)
                            {
                                int[] arr = stack.ToArray();
                                Array.Sort(arr);
                                Array.Reverse(arr);
                                Console.WriteLine(arr[0]);
                            }
                            break;
                        case "4":
                            if (stack.Count > 0)
                            {
                                int[] arr = stack.ToArray();
                                Array.Sort(arr);
                                Console.WriteLine(arr[0]);
                            }
                            break;
                    }
                }
            }
            string toPrint = "";
            foreach (int item in stack)
            {
                toPrint = (toPrint + item.ToString() + ", ");
            }
            Console.WriteLine(toPrint.Substring(0, (toPrint.Length - 2)));
        }
    }
}
