using System;
using System.Linq;

namespace _02.Snake
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            char[,] matrix = new char[n, n];
            bool isOut = false;
            int food = 0;
            int sRow = 0;
            int sCol = 0;
            string[] burrows = new string[2];
            int burrowsCount = 0;

            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                string input = Console.ReadLine();
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    matrix[i, j] = input[j];
                    if (input[j] == 'S')
                    {
                        sRow = i;
                        sCol = j;
                    }
                    if (input[j] == 'B')
                    {
                        burrows[burrowsCount] = i.ToString() + j.ToString();
                        burrowsCount++;
                    }
                }
            }
            while (!isOut && food <10)
            {
                string input = Console.ReadLine();
                switch (input)
                {
                    case "up":
                        matrix[sRow, sCol] = '.';
                        if (IsOut(matrix,"up", sRow,sCol))
                        {
                            isOut = true;
                            break;
                        }
                        sRow--;
                        if (matrix[sRow,sCol] == 'B')
                        {
                            matrix[sRow, sCol] = '.';
                            if (burrows[0] == (sRow.ToString()+sCol.ToString()))
                            {
                                sRow = int.Parse(burrows[1][0].ToString());
                                sCol = int.Parse(burrows[1][1].ToString());
                            }
                            else
                            {
                                sRow = int.Parse(burrows[0][0].ToString());
                                sCol = int.Parse(burrows[0][1].ToString());
                            }
                            matrix[sRow, sCol] = 'S';
                            break;
                        }
                        if (matrix[sRow,sCol] == '*')
                        {
                            food++;
                            matrix[sRow, sCol] = 'S';
                            break;
                        }
                        matrix[sRow, sCol] = 'S';
                        break;
                    case "down":
                        matrix[sRow, sCol] = '.';
                        if (IsOut(matrix, "down", sRow, sCol))
                        {
                            isOut = true;
                            break;
                        }
                        sRow++;
                        if (matrix[sRow, sCol] == 'B')
                        {
                            matrix[sRow, sCol] = '.';
                            if (burrows[0] == (sRow.ToString() + sCol.ToString()))
                            {
                                sRow = int.Parse(burrows[1][0].ToString());
                                sCol = int.Parse(burrows[1][1].ToString());
                            }
                            else
                            {
                                sRow = int.Parse(burrows[0][0].ToString());
                                sCol = int.Parse(burrows[0][1].ToString());
                            }
                            matrix[sRow, sCol] = 'S';
                            break;
                        }
                        if (matrix[sRow, sCol] == '*')
                        {
                            food++;
                            matrix[sRow, sCol] = 'S';
                            break;
                        }
                        matrix[sRow, sCol] = 'S';
                        break;
                    case "left":
                        matrix[sRow, sCol] = '.';
                        if (IsOut(matrix, "left", sRow, sCol))
                        {
                            isOut = true;
                            break;
                        }
                        sCol--;
                        if (matrix[sRow, sCol] == 'B')
                        {
                            matrix[sRow, sCol] = '.';
                            if (burrows[0] == (sRow.ToString() + sCol.ToString()))
                            {
                                sRow = int.Parse(burrows[1][0].ToString());
                                sCol = int.Parse(burrows[1][1].ToString());
                            }
                            else
                            {
                                sRow = int.Parse(burrows[0][0].ToString());
                                sCol = int.Parse(burrows[0][1].ToString());
                            }
                            matrix[sRow, sCol] = 'S';
                            break;
                        }
                        if (matrix[sRow, sCol] == '*')
                        {
                            food++;
                            matrix[sRow, sCol] = 'S';
                            break;
                        }
                        matrix[sRow, sCol] = 'S';
                        break;
                    case "right":
                        matrix[sRow, sCol] = '.';
                        if (IsOut(matrix, "right", sRow, sCol))
                        {
                            isOut = true;
                            break;
                        }
                        sCol++;
                        if (matrix[sRow, sCol] == 'B')
                        {
                            matrix[sRow, sCol] = '.';
                            if (burrows[0] == (sRow.ToString() + sCol.ToString()))
                            {
                                sRow = int.Parse(burrows[1][0].ToString());
                                sCol = int.Parse(burrows[1][1].ToString());
                            }
                            else
                            {
                                sRow = int.Parse(burrows[0][0].ToString());
                                sCol = int.Parse(burrows[0][1].ToString());
                            }
                            matrix[sRow, sCol] = 'S';
                            break;
                        }
                        if (matrix[sRow, sCol] == '*')
                        {
                            food++;
                            matrix[sRow, sCol] = 'S';
                            break;
                        }
                        matrix[sRow, sCol] = 'S';
                        break;
                }
            }
            if (isOut && food <10)
            {
                Console.WriteLine("Game over!");
            }
            else
            {
                Console.WriteLine("You won! You fed the snake.");
            }
            Console.WriteLine($"Food eaten: {food}");
            PrintMatrix(matrix);
            static bool IsOut<T>(T[,] matrix, string direction, int sRow, int sCol)
            {
                switch (direction)
                {
                    case "up": return (sRow - 1) < 0;
                    case "down": return (sRow + 1) >= matrix.GetLength(0);
                    case "left":return (sCol - 1) < 0;
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
}
