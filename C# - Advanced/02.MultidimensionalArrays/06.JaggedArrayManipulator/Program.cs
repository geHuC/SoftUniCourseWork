using System;
using System.Linq;

namespace _06.JaggedArrayManipulator
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            double[][] jag = new double[n][];

            for (int i = 0; i < n; i++)
            {
                jag[i] = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(double.Parse).ToArray();
            }
            for (int i = 0; i < jag.Length -1; i++)
            {
                if (jag[i].Length == jag[i+1].Length)
                {
                    for (int j = 0; j < jag[i].Length; j++)
                    {
                        jag[i][j] *= 2;
                    }
                    for (int k = 0; k < jag[i+1].Length; k++)
                    {
                        jag[i + 1][k] *= 2;
                    }
                }
                else
                {
                    for (int j = 0; j < jag[i].Length; j++)
                    {
                        jag[i][j] /= 2;
                    }
                    for (int k = 0; k < jag[i + 1].Length; k++)
                    {
                        jag[i + 1][k] /= 2;
                    }
                }
            }
            string[] instructions = Console.ReadLine().Split(" ",StringSplitOptions.RemoveEmptyEntries);
            while (instructions[0] != "End")
            {
                int row = int.Parse(instructions[1]);
                int col = int.Parse(instructions[2]);
                if (instructions.Length != 4)
                {
                    instructions = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                    continue;
                }

                if (row >= jag.Length || row <0)
                {
                    instructions = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                    continue;
                }
                if (col >= jag[row].Length || col <0)
                {
                    instructions = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                    continue;
                }
                switch (instructions[0])
                {
                    case "Add":
                        jag[row][col] += int.Parse(instructions[3]);
                        break;
                    case "Subtract":
                        jag[row][col] -= int.Parse(instructions[3]);
                        break;
                }

                instructions = Console.ReadLine().Split(" ");
            }
            for (int i = 0; i < jag.Length; i++)
            {
                Console.WriteLine(string.Join(" ", jag[i]));
            }
        }
    }
}
