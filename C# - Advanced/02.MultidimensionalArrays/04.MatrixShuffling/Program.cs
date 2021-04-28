using System;
using System.Linq;

namespace _04.MatrixShuffling
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] n = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            string[,] matrix = new string[n[0], n[1]];

            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                string[] data = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    matrix[i, j] = data[j];
                }
            }
            string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);

            while (input[0] != "END")
            {
                if (input[0] == "swap")
                {
                    bool Ok = true;
                    for (int i = 1; i < input.Length; i++)
                    {
                        bool isNumeric = int.TryParse(input[i], out _);
                        if (!isNumeric)
                        {
                            Console.WriteLine("Invalid input!");
                            Ok = false;
                            break;
                        }
                    }
                    if (Ok)
                    {
                        int[] coordinates = input.Skip(1).Select(int.Parse).ToArray();
                        if (coordinates.Length == 4)
                        {
                            if (n[0] > coordinates[0] && n[0] > coordinates[2] && n[1] > coordinates[1] && n[1] > coordinates[3])
                            {
                                if (coordinates[0] < 0 || coordinates[1] < 0 || coordinates[2] < 0 || coordinates[3] < 0)
                                {
                                    Console.WriteLine("Invalid input!");
                                }
                                else
                                {
                                    string x = matrix[coordinates[0], coordinates[1]];
                                    matrix[coordinates[0], coordinates[1]] = matrix[coordinates[2], coordinates[3]];
                                    matrix[coordinates[2], coordinates[3]] = x;
                                    for (int i = 0; i < matrix.GetLength(0); i++)
                                    {
                                        for (int j = 0; j < matrix.GetLength(1); j++)
                                        {
                                            Console.Write(matrix[i, j] + " ");
                                        }
                                        Console.WriteLine();
                                    }
                                }
                            }
                            else
                            {
                                Console.WriteLine("Invalid input!");
                            }
                        }
                        else
                        {
                            Console.WriteLine("Invalid input!");
                        }
                    }
                }
                else
                {
                    Console.WriteLine("Invalid input!");
                }

                input = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries);
            }
        }
    }
}
