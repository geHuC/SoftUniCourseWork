using System;
using System.Linq;

namespace _05.AppliedArithmetics
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] array = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            string commands = Console.ReadLine();
            while (commands != "end")
            {
                command(commands, array);
                commands = Console.ReadLine();
            }
        }
        static void command(string command, int[] array)
        {
            switch (command)
            {
                case "add":
                    add(array);
                    break;
                case "subtract":
                    subtract(array);
                    break;
                case "multiply":
                    multiply(array);
                    break;
                case "print":
                    print(array);
                    break;
            }
        }
        static void add(int[] array)
        {
            for (int i = 0; i < array.Length; i++)
            {
                array[i] += 1;
            }
        }
        static void subtract (int[] array)
        {
            for (int i = 0; i < array.Length; i++)
            {
                array[i] -= 1;
            }
        }
        static void multiply (int[] array)
        {
            for (int i = 0; i < array.Length; i++)
            {
                array[i] *= 2;
            }
        }
        static void print (int[] array)
        {
            Console.WriteLine(string.Join(" ", array));
        }
    }
}
