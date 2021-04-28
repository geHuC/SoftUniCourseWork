using System;
using System.Linq;

namespace _09.Miner
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            char[,] matrix = new char[n, n];
            string[] commands = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries);
            int totalCoal = 0;
            int sRow = 0;
            int sCol = 0;
            bool isEnd = false;
            for (int i = 0; i < n; i++)
            {
                char[] data = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(char.Parse).ToArray();
                for (int j = 0; j < n; j++)
                {
                    matrix[i, j] = data[j];
                    if (data[j] == 'c')
                    {
                        totalCoal++;
                    }
                    if (data[j] == 's')
                    {
                        sRow = i;
                        sCol = j;
                    }
                }
            }
            foreach (string command in commands)
            {
                if (!isEnd && totalCoal !=0)
                {
                    switch (command)
                    {
                        case "down":
                            if (sRow + 1 < n)
                            {
                                if (matrix[sRow + 1, sCol] == 'c')
                                {
                                    totalCoal--;
                                    matrix[sRow + 1, sCol] = '*';
                                }
                                if (matrix[sRow + 1, sCol] == 'e')
                                {
                                    isEnd = true;
                                    sRow++;
                                    continue;
                                }
                                sRow++;
                            }
                            break;
                        case "right":
                            if (sCol +1 < n)
                            {
                                if (matrix[sRow,sCol+1] == 'c')
                                {
                                    totalCoal--;
                                    matrix[sRow, sCol + 1] = '*';
                                }
                                if (matrix[sRow, sCol+1] == 'e')
                                {
                                    isEnd = true;
                                    sCol++;
                                    continue;
                                }
                                sCol++;
                            }
                            break;
                        case "up":
                            if (sRow - 1 >= 0)
                            {
                                if (matrix[sRow - 1, sCol] == 'c')
                                {
                                    totalCoal--;
                                    matrix[sRow - 1, sCol] = '*';
                                }
                                if (matrix[sRow - 1, sCol] == 'e')
                                {
                                    isEnd = true;
                                    sRow--;
                                    continue;
                                }
                                sRow--;
                            }
                            break;
                        case "left":
                            if (sCol - 1 >=0)
                            {
                                if (matrix[sRow, sCol - 1] == 'c')
                                {
                                    totalCoal--;
                                    matrix[sRow, sCol - 1] = '*';
                                }
                                if (matrix[sRow, sCol - 1] == 'e')
                                {
                                    isEnd = true;
                                    sCol--;
                                    continue;
                                }
                                sCol--;
                            }
                            break;
                    }
                }
            }
            if (!isEnd && totalCoal!=0)
            {
                Console.WriteLine($"{totalCoal} coals left. ({sRow}, {sCol})");
            }
            if (isEnd)
            {
                Console.WriteLine($"Game over! ({sRow}, {sCol})");
            }
            if (totalCoal == 0)
            {
                Console.WriteLine($"You collected all coals! ({sRow}, {sCol})");
            }

        }
    }
}
