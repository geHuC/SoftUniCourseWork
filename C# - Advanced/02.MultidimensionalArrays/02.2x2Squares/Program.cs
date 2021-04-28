using System;
using System.Linq;

namespace _02._2x2Squares
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] n = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            string[,] matrix = new string[n[0], n[1]];
            int count = 0;
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                string[] data = Console.ReadLine().Split(' ');
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    matrix[i, j] = data[j];
                }
            }
            if (matrix.GetLength(0)<2 || matrix.GetLength(1)<2)
            {
                Console.WriteLine(0);
            }
            else
            {
                for (int i = 0; i < matrix.GetLength(0)-1; i++)
                {
                    for (int j = 0; j < matrix.GetLength(1)-1; j++)
                    {
                        string curr = matrix[i, j];
                        string left = matrix[i, j + 1];
                        string diag = matrix[i + 1, j + 1];
                        string down = matrix[i + 1, j];
                        if (curr == left && curr == diag && curr == down)
                        {
                            count++;
                        }
                    }
                }
            }
            Console.WriteLine(count);
        }
    }
}
