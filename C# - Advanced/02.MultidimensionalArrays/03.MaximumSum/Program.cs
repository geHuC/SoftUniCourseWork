using System;
using System.Linq;

namespace _03.MaximalSum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] n = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int[,] matrix = new int[n[0], n[1]];
            int maxSum = 0;
            int indexRow = 0;
            int indexCol = 0;
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                int[] input = Console.ReadLine().Split(' ',StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    matrix[i, j] = input[j];
                }
            }
            for (int i = 0; i < matrix.GetLength(0)-2; i++)
            {
                for (int j = 0; j < matrix.GetLength(1)-2; j++)
                {
                    int tempSum = 0;
                    for (int row = 0; row < 3; row++)
                    {
                        for (int col = 0; col < 3; col++)
                        {
                            tempSum += matrix[i + row, j + col];
                        }
                    }
                    if (maxSum < tempSum)
                    {
                        maxSum = tempSum;
                        indexRow = i;
                        indexCol = j;
                    }
                }
            }
            Console.Write($"Sum = {maxSum}");
            for (int row = 0; row < 3; row++)
            {
                Console.WriteLine();
                for (int col = 0; col < 3; col++)
                {
                    Console.Write(matrix[indexRow + row, indexCol + col]+" ");
                }
            }
        }
    }
}
