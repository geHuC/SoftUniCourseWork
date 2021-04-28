using System;

namespace _02.Bee
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            char[,] matrix = new char[n, n];
            int sRow = 0;
            int sCol = 0;
			bool isOut = false;
			int polinatedFlowers = 0;
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                string rows = Console.ReadLine();
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    matrix[i, j] = rows[j];
                    if (matrix[i, j] == 'B') // Replace with description character
                    {
                        sRow = i;
                        sCol = j;
                    }
                }
            }
			string input = Console.ReadLine();
            while (input !="End" && !isOut)
            {
                matrix[sRow, sCol] = '.';
                sRow = MoveRow(input, sRow);
                sCol = MoveCol(input, sCol);
                if (IsOut(matrix,input, sRow, sCol))
                {
                    isOut = true;
                    break;
                }
                if (matrix[sRow,sCol] == 'f')
                {
                    polinatedFlowers++;
                }
                if (matrix[sRow,sCol] == 'O')
                {
                    matrix[sRow, sCol] = '.';
                    sRow = MoveRow(input, sRow);
                    sCol = MoveCol(input, sCol);
                    if (IsOut(matrix, input, sRow, sCol))
                    {
                        isOut = true;
                        break;
                    }
                    if (matrix[sRow, sCol] == 'f')
                    {
                        polinatedFlowers++;
                    }
                }
                matrix[sRow, sCol] = 'B';
                input = Console.ReadLine();
            }
            if (isOut)
            {
                Console.WriteLine("The bee got lost!");
            }
            if (polinatedFlowers >=5)
            {
                Console.WriteLine($"Great job, the bee managed to pollinate {polinatedFlowers} flowers!");
            }
            else
            {
                Console.WriteLine($"The bee couldn't pollinate the flowers, she needed {5-polinatedFlowers} flowers more");
            }
			PrintMatrix(matrix);
            static int MoveRow(string command, int position)
            {
                switch (command)
                {
                    case "up": return --position;
                    case "down": return ++position;
                    default: return position;
                }
            }
            static int MoveCol(string command, int position)
            {
                switch (command)
                {
                    case "left": return --position;
                    case "right": return ++position;
                    default: return position;
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
			static bool IsOut<T>(T[,] matrix, string direction, int sRow, int sCol)
            {
                switch (direction)
                {
                    case "up": return sRow < 0;
                    case "down": return sRow >= matrix.GetLength(0);
                    case "left": return sCol < 0;
                    case "right": return sCol >= matrix.GetLength(1);
                    default: return false;
                }
            }

        }
    }
}
