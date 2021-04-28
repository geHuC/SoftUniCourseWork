using System;
using System.Linq;

namespace _10.RadioactiveMutantVampireBunnies
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] matrixSize = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            int n = matrixSize[0];
            int m = matrixSize[1];
            int startX = 0;
            int startY = 0;
            char[,] matrix = new char[n, m];
            char[] commands;
            bool isDead = false;
            bool isOut = false;
            for (int i = 0; i < n; i++)
            {
                string data = Console.ReadLine();
                for (int j = 0; j < m; j++)
                {
                    matrix[i, j] = data[j];
                    if (data[j] == 'P')
                    {
                        startX = i;
                        startY = j;
                    }
                }
            }
            commands = Console.ReadLine().ToCharArray();
            //Player logic
            foreach (var command in commands)
            {
                switch (command)
                {
                    case 'U':
                        matrix[startX, startY] = '.';
                        if (startX - 1 >= 0)
                        {
                            startX--;
                            if (matrix[startX, startY] == 'B')
                            {
                                isDead = true;
                            }
                            matrix[startX, startY] = 'P';
                        }
                        else
                        {
                            isOut = true;
                        }
                        break;
                    case 'D':
                        matrix[startX, startY] = '.';
                        if (startX + 1 < n)
                        {
                            startX++;
                            if (matrix[startX, startY] == 'B')
                            {
                                isDead = true;
                            }
                            matrix[startX, startY] = 'P';
                        }
                        else
                        {
                            isOut = true;
                        }
                        break;
                    case 'L':
                        matrix[startX, startY] = '.';
                        if (startY - 1 >= 0)
                        {
                            startY--;
                            if (matrix[startX, startY] == 'B')
                            {
                                isDead = true;
                            }
                            matrix[startX, startY] = 'P';
                        }
                        else
                        {
                            isOut = true;
                        }
                        break;
                    case 'R':
                        matrix[startX, startY] = '.';
                        if (startY + 1 < m)
                        {
                            startY++;
                            if (matrix[startX, startY] == 'B')
                            {
                                isDead = true;
                            }
                            matrix[startX, startY] = 'P';
                        }
                        else
                        {
                            isOut = true;
                        }
                        break;
                }
                // Bunny Logic
                char[,] clone = (char[,])matrix.Clone();
                for (int i = 0; i < clone.GetLength(0); i++)
                {
                    for (int j = 0; j < clone.GetLength(1); j++)
                    {
                        if (clone[i, j] == 'B')
                        {
                            if (i - 1 >= 0)
                            {
                                if (clone[i - 1, j] == 'P')
                                {
                                    isDead = true;
                                }
                                matrix[i - 1, j] = 'B';
                            }
                            if (i + 1 < n)
                            {
                                if (clone[i + 1, j] == 'P')
                                {
                                    isDead = true;
                                }
                                matrix[i + 1, j] = 'B';
                            }
                            if (j - 1 >= 0)
                            {
                                if (clone[i, j - 1] == 'P')
                                {
                                    isDead = true;
                                }
                                matrix[i, j - 1] = 'B';
                            }
                            if (j + 1 < m)
                            {
                                if (clone[i, j + 1] == 'P')
                                {
                                    isDead = true;
                                }
                                matrix[i, j + 1] = 'B';
                            }
                        }
                        
                    }
                }
                if (isDead || isOut)
                {
                    break;
                }
            }
            //End State
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    Console.Write(matrix[i, j]);
                }
                Console.WriteLine();
            }
            if (isOut)
            {
                Console.WriteLine($"won: {startX} {startY}");
            }
            if (isDead)
            {
                Console.WriteLine($"dead: {startX} {startY}");
            }
            
        }

    }
}
