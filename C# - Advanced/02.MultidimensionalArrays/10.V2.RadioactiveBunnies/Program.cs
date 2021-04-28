using System;
using System.Linq;

namespace _10.V2.RadioactiveBunnies
{
    class Program
    {

        static void Main(string[] args)
        {

            int[] n = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            char[,] matrix = new char[n[0], n[1]];
            int sRow = 0;
            int sCol = 0;
            bool isOut = false;
            bool isDead = false;
            bool deathByBunny = false;

            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                string input = Console.ReadLine();
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    matrix[i, j] = input[j];
                    if (matrix[i, j] == 'P') // Replace with description character
                    {
                        sRow = i;
                        sCol = j;
                    }
                }
            }

            string directions = Console.ReadLine();
            foreach (var direction in directions)
            {
                if (!isOut && !isDead && !deathByBunny)
                {
                    matrix[sRow, sCol] = '.';
                    int nRow = MoveRow(direction.ToString(), sRow);
                    int nCol = MoveCol(direction.ToString(), sCol);
                    if (IsOut(matrix, direction.ToString(), nRow, nCol))
                    {
                        isOut = true;
                        deathByBunny = MoveBunnies(matrix);
                        break;
                    }
                    if (matrix[nRow, nCol] == 'B')
                    {
                        isDead = true;
                        sRow = nRow;
                        sCol = nCol;
                    }
                    if (!isOut && !isDead)
                    {
                        sRow = nRow;
                        sCol = nCol;
                        matrix[nRow, nCol] = 'P';
                    }
                    deathByBunny = MoveBunnies(matrix);
                }
            }
            
            PrintMatrix(matrix);
            if (isDead)
            {
                Console.WriteLine($"dead: {sRow} {sCol}");
            }
            if (isOut)
            {
                Console.WriteLine($"won: {sRow} {sCol}");
            }
            static int MoveRow(string command, int position)
            {
                switch (command)
                {
                    case "U": return --position;
                    case "D": return ++position;
                    default: return position;
                }
            }
            static int MoveCol(string command, int position)
            {
                switch (command)
                {
                    case "L": return --position;
                    case "R": return ++position;
                    default: return position;
                }
            }
            static bool IsOut<T>(T[,] matrix, string direction, int sRow, int sCol)
            {
                switch (direction)
                {
                    case "U": return sRow < 0;
                    case "D": return sRow >= matrix.GetLength(0);
                    case "L": return sCol < 0;
                    case "R": return sCol >= matrix.GetLength(1);
                    default: return false;
                }
            }
            //Print the matrix
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
            static bool MoveBunnies(char[,] matrix)
            {
                bool isDead = false;
                char[,] clone = (char[,])matrix.Clone();
                for (int i = 0; i < matrix.GetLength(0); i++)
                {
                    for (int j = 0; j < matrix.GetLength(1); j++)
                    {
                        if (clone[i, j] == 'B')
                        {
                            int row = MoveRow("U", i);
                            int col = MoveCol("U", j);
                            if (!IsOut(matrix, "U", row, col))
                            {
                                if (clone[row, col] == 'P')
                                {
                                    isDead = true;
                                }
                                matrix[row, col] = 'B';
                            }
                            row = MoveRow("D", i);
                            col = MoveCol("D", j);
                            if (!IsOut(matrix, "D", row, col))
                            {
                                if (clone[row, col] == 'P')
                                {
                                    isDead = true;
                                }
                                matrix[row, col] = 'B';
                            }
                            row = MoveRow("R", i);
                            col = MoveCol("R", j);
                            if (!IsOut(matrix, "R", row, col))
                            {
                                if (clone[row, col] == 'P')
                                {
                                    isDead = true;
                                }
                                matrix[row, col] = 'B';
                            }
                            row = MoveRow("L", i);
                            col = MoveCol("L", j);
                            if (!IsOut(matrix, "L", row, col))
                            {
                                if (clone[row, col] == 'P')
                                {
                                    isDead = true;
                                }
                                matrix[row, col] = 'B';
                            }
                        }
                    }
                }
                return isDead;
            }
        }

        
    }
}
