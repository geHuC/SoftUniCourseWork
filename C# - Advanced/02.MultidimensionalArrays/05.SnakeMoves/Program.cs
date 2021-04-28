using System;
using System.Collections.Generic;
using System.Linq;

namespace _05.SnakeMoves
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] n = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            char[,] matrix = new char[n[0], n[1]];
            Queue<char> snake = new Queue<char>(Console.ReadLine().ToCharArray());

            for (int i = 0; i < n[0]; i++)
            {
                if (i % 2 == 0)
                {
                    for (int j = 0; j < n[1]; j++)
                    {
                        matrix[i, j] = snake.Peek();
                        snake.Enqueue(snake.Dequeue());
                    }
                }
                else
                {
                    for (int k = n[1]-1; k >= 0; k--)
                    {
                        matrix[i, k] = snake.Peek();
                        snake.Enqueue(snake.Dequeue());
                    }
                }
            }
            for (int i = 0; i < n[0] ; i++)
            {
                for (int j = 0; j < n[1]; j++)
                {
                    Console.Write(matrix[i, j]);
                }
                Console.WriteLine();
            }
        }
    }
}
