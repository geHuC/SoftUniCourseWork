using System;
using System.Linq;

namespace _01.DiagonalDifference
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[,] matrix = new int[n,n];
            int sumPrimary = 0;
            int sumSecondary = 0;
            for (int i = 0; i < n; i++)
            {
                int[] input = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
                for (int j = 0; j < n; j++)
                {
                    matrix[i,j] = input[j];
                }
            }
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                sumPrimary += matrix[i, i];
                sumSecondary += matrix[((n-1) - i), i];
            }
            Console.WriteLine(Math.Abs(sumSecondary-sumPrimary));
        }
    }
}
