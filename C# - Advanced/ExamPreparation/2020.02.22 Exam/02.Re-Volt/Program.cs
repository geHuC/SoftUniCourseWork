using System;

namespace _02.Re_Volt
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int m = int.Parse(Console.ReadLine());

            int sCol = 0;
            int sRow = 0;
            char[,] matrix = new char[n, n];
            bool won = false;
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                string input = Console.ReadLine();
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    matrix[i, j] = input[j];
                    if (matrix[i, j] == 'f')
                    {
                        sRow = i;
                        sCol = j;
                    }
                }
            }
            for (int i = 0; i < m; i++)
            {
                if (!won)
                {
                    string input = Console.ReadLine();
                    switch (input)
                    {
                        case "up":
                            matrix[sRow, sCol] = '-';
                            if (IsOut(matrix, "up", sRow, sCol))
                            {
                                sRow = n - 1;
                                if (matrix[sRow, sCol] == 'B')
                                {
                                    sRow--;
                                    matrix[sRow, sCol] = 'f';
                                    break;
                                }
                                if (matrix[sRow, sCol] == 'T')
                                {
                                    sRow = 0;
                                    matrix[sRow, sCol] = 'f';
                                    break;
                                }
                                if (matrix[sRow, sCol] == 'F')
                                {
                                    won = true;
                                }
                                matrix[sRow, sCol] = 'f';
                                break;
                            }
                            sRow--;
                            if (matrix[sRow, sCol] == 'B')
                            {
                                sRow--;
                                if (IsOut(matrix, "up", sRow, sCol))
                                {
                                    sRow = n - 1;
                                    matrix[sRow, sCol] = 'f';
                                    break;
                                }
                                matrix[sRow, sCol] = 'f';
                                break;
                            }
                            if (matrix[sRow, sCol] == 'T')
                            {
                                sRow++;
                                matrix[sRow, sCol] = 'f';
                                break;
                            }
                            if (matrix[sRow, sCol] == 'F')
                            {
                                won = true;
                            }
                            matrix[sRow, sCol] = 'f';
                            break;
                        case "down":
                            matrix[sRow, sCol] = '-';
                            if (IsOut(matrix, "down", sRow, sCol))
                            {
                                sRow = 0;
                                if (matrix[sRow, sCol] == 'B')
                                {
                                    sRow++;
                                    matrix[sRow, sCol] = 'f';
                                    break;
                                }
                                if (matrix[sRow, sCol] == 'T')
                                {
                                    sRow = n - 1;
                                    matrix[sRow, sCol] = 'f';
                                    break;
                                }
                                if (matrix[sRow, sCol] == 'F')
                                {
                                    won = true;
                                }
                                matrix[sRow, sCol] = 'f';
                                break;
                            }
                            sRow++;
                            if (matrix[sRow, sCol] == 'B')
                            {
                                sRow++;
                                if (IsOut(matrix, "down", sRow, sCol))
                                {
                                    sRow = 0;
                                    matrix[sRow, sCol] = 'f';
                                    break;
                                }
                                matrix[sRow, sCol] = 'f';
                                break;
                            }
                            if (matrix[sRow, sCol] == 'T')
                            {
                                sRow--;
                                matrix[sRow, sCol] = 'f';
                                break;
                            }
                            if (matrix[sRow, sCol] == 'F')
                            {
                                won = true;
                            }
                            matrix[sRow, sCol] = 'f';
                            break;
                        case "left":
                            matrix[sRow, sCol] = '-';
                            if (IsOut(matrix, "left", sRow, sCol))
                            {
                                sCol = n - 1;
                                if (matrix[sRow, sCol] == 'B')
                                {
                                    sCol--;
                                    matrix[sRow, sCol] = 'f';
                                    break;
                                }
                                if (matrix[sRow, sCol] == 'T')
                                {
                                    sCol = 0;
                                    matrix[sRow, sCol] = 'f';
                                    break;
                                }
                                if (matrix[sRow, sCol] == 'F')
                                {
                                    won = true;
                                }
                                matrix[sRow, sCol] = 'f';
                                break;
                            }
                            sCol--;
                            if (matrix[sRow, sCol] == 'B')
                            {
                                sCol--;
                                if (IsOut(matrix, "left", sRow, sCol))
                                {
                                    sCol = n - 1;
                                    matrix[sRow, sCol] = 'f';
                                    break;
                                }
                                matrix[sRow, sCol] = 'f';
                                break;
                            }
                            if (matrix[sRow, sCol] == 'T')
                            {
                                sCol++;
                                matrix[sRow, sCol] = 'f';
                                break;
                            }
                            if (matrix[sRow, sCol] == 'F')
                            {
                                won = true;
                            }
                            matrix[sRow, sCol] = 'f';
                            break;
                        case "right":
                            matrix[sRow, sCol] = '-';
                            if (IsOut(matrix, "right", sRow, sCol))
                            {
                                sCol = 0;
                                if (matrix[sRow, sCol] == 'B')
                                {
                                    sCol++;
                                    matrix[sRow, sCol] = 'f';
                                    break;
                                }
                                if (matrix[sRow, sCol] == 'T')
                                {
                                    sCol = n - 1;
                                    matrix[sRow, sCol] = 'f';
                                    break;
                                }
                                if (matrix[sRow, sCol] == 'F')
                                {
                                    won = true;
                                }
                                matrix[sRow, sCol] = 'f';
                                break;
                            }

                            sCol++;
                            if (matrix[sRow, sCol] == 'B')
                            {
                                sCol++;
                                if (IsOut(matrix, "right", sRow, sCol))
                                {
                                    sCol = 0;
                                    matrix[sRow, sCol] = 'f';
                                    break;
                                }
                                matrix[sRow, sCol] = 'f';
                                break;
                            }
                            if (matrix[sRow, sCol] == 'T')
                            {
                                sCol--;
                                matrix[sRow, sCol] = 'f';
                                break;
                            }
                            if (matrix[sRow, sCol] == 'F')
                            {
                                won = true;
                            }
                            matrix[sRow, sCol] = 'f';
                            break;
                    }
                }

            }
            if (won)
            {
                Console.WriteLine("Player won!");
                PrintMatrix(matrix);
            }
            else
            {
                Console.WriteLine("Player lost!");
                PrintMatrix(matrix);
            }
        }
        static bool IsOut<T>(T[,] matrix, string direction, int sRow, int sCol)
        {
            switch (direction)
            {
                case "up": return (sRow - 1) < 0;
                case "down": return (sRow + 1) >= matrix.GetLength(0);
                case "left": return (sCol - 1) < 0;
                case "right": return (sCol + 1) >= matrix.GetLength(1);
                default: return false;
            }
        }
        static void PrintMatrix<T>(T[,] matrix)
        {
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    Console.Write(matrix[i, j]);
                }
                Console.WriteLine();

            }
        }
    }
}
