using System;
using System.Linq;

namespace _07.KnightGame
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            char[,] board = new char[n, n];

            bool isReady = false;
            int removed = 0;
            for (int i = 0; i < n; i++)
            {
                char[] data = Console.ReadLine().ToCharArray();
                for (int j = 0; j < n; j++)
                {
                    board[i, j] = data[j];
                }
            }
            while (!isReady)
            {
                int mostCollisions = 0;
                int x = 0;
                int y = 0;
                for (int i = 0; i < n; i++)
                {
                    for (int j = 0; j < n; j++)
                    {
                        int collisions = 0;
                        if (board[i, j] == 'K')
                        {
                            int up = i - 2;
                            int down = i + 2;
                            int left = j - 2;
                            int right = j + 2;
                            int behind = j - 1;
                            int forward = j + 1;
                            int above = i - 1;
                            int below = i + 1;

                            if (up >= 0 && behind >= 0)
                            {
                                if (board[up, behind] == 'K')
                                {
                                    collisions++;
                                }
                            }
                            if (up >= 0 && forward < n)
                            {
                                if (board[up, forward] == 'K')
                                {
                                    collisions++;
                                }
                            }
                            if (right < n && above >= 0)
                            {
                                if (board[above, right] == 'K')
                                {
                                    collisions++;
                                }
                            }
                            if (right < n && below < n)
                            {
                                if (board[below, right] == 'K')
                                {
                                    collisions++;
                                }
                            }
                            if (down < n && forward < n)
                            {
                                if (board[down, forward] == 'K')
                                {
                                    collisions++;
                                }
                            }
                            if (down < n && behind >= 0)
                            {
                                if (board[down, behind] == 'K')
                                {
                                    collisions++;
                                }
                            }
                            if (left >= 0 && below < n)
                            {
                                if (board[below, left] == 'K')
                                {
                                    collisions++;
                                }
                            }
                            if (left >= 0 && above >= 0)
                            {
                                if (board[above, left] == 'K')
                                {
                                    collisions++;
                                }
                            }
                            if (collisions > mostCollisions)
                            {
                                mostCollisions = collisions;
                                x = i;
                                y = j;
                            }
                        }
                        
                    }
                }
                if (mostCollisions != 0)
                {
                    board[x, y] = '0';
                    removed++;
                }
                else
                {
                    isReady = true;
                    Console.WriteLine(removed);
                }
            }
        }
    }
}
