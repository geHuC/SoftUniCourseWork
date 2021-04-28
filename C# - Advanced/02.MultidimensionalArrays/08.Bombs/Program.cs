using System;
using System.Linq;

namespace _08.Bombs
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[,] matrix = new int[n, n];
            int aliveCells = 0;
            int aliveSum = 0;
            for (int i = 0; i < n; i++)
            {
                int[] data = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
                for (int j = 0; j < n; j++)
                {
                    matrix[i, j] = data[j];
                }
            }
            string[] bombs = Console.ReadLine().Split(" ",StringSplitOptions.RemoveEmptyEntries);
            foreach (string bomb in bombs)
            {
                int bombRow = int.Parse(bomb[0].ToString());
                int bombCol = int.Parse(bomb[2].ToString());
                int explosion = matrix[bombRow, bombCol];
                if (explosion <0)
                {
                    continue;
                }
                matrix[bombRow, bombCol] = 0;
                if (bombRow - 1 >= 0) //up
                {
                    if (matrix[bombRow - 1, bombCol] > 0)
                    {
                        matrix[bombRow - 1, bombCol] -= explosion;
                    }
                }
                if (bombRow + 1 < n) //down
                {
                    if (matrix[bombRow + 1, bombCol] > 0)
                    {
                        matrix[bombRow + 1, bombCol] -= explosion;
                    }
                }
                if (bombCol - 1 >= 0) // right
                {
                    if (matrix[bombRow, bombCol - 1] > 0)
                    {
                        matrix[bombRow, bombCol - 1] -= explosion;
                    }
                }
                if (bombCol + 1 < n) // left
                {
                    if (matrix[bombRow, bombCol + 1] > 0)
                    {
                        matrix[bombRow, bombCol + 1] -= explosion;
                    }
                }
                if (bombRow - 1 >= 0 && bombCol - 1 >= 0) //up right
                {
                    if (matrix[bombRow - 1, bombCol - 1] > 0)
                    {
                        matrix[bombRow - 1, bombCol - 1] -= explosion;
                    }
                }
                if (bombRow - 1 >= 0 && bombCol + 1 < n) //up right
                {
                    if (matrix[bombRow - 1, bombCol + 1] > 0)
                    {
                        matrix[bombRow - 1, bombCol + 1] -= explosion;
                    }
                }
                if (bombRow + 1 < n && bombCol - 1 >= 0) //down right
                {
                    if (matrix[bombRow + 1, bombCol - 1] > 0)
                    {
                        matrix[bombRow + 1, bombCol - 1] -= explosion;
                    }
                }
                if (bombRow + 1 < n && bombCol + 1 < n) //down right
                {
                    if (matrix[bombRow + 1, bombCol + 1] > 0)
                    {
                        matrix[bombRow + 1, bombCol + 1] -= explosion;
                    }
                }
            }

            // Print results
            foreach (int item in matrix)
            {
                if (item > 0)
                {
                    aliveCells++;
                    aliveSum += item;
                }
            }
            Console.WriteLine($"Alive cells: {aliveCells}");
            Console.WriteLine($"Sum: {aliveSum}");
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    if (j == n - 1)
                    {
                        Console.Write(matrix[i, j]);
                    }
                    else
                    {
                        Console.Write(matrix[i, j] + " ");
                    }
                }
                Console.WriteLine();
            }
        }
    }
}
