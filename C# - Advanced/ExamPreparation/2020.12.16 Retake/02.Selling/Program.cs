using System;
using System.Linq;

namespace _2020._12._02.Selling
{
    class Program
    {
        static void Main(string[] args)
        {
			//Square matrix

			int n = int.Parse(Console.ReadLine());
			char[,] matrix = new char[n, n];
			int sRow = 0;
			int sCol = 0;
			bool isOut = false;
			int count = 0;
			string[] pillars = new string[2];
			int pillarsIndex = 0;

			// fill matrix with data
			for (int i = 0; i < matrix.GetLength(0); i++)
			{
				string input = Console.ReadLine();
				for (int j = 0; j < matrix.GetLength(1); j++)
				{
					matrix[i, j] = input[j];
					if (matrix[i, j] == 'S') // Replace with description character
					{
						sRow = i;
						sCol = j;
					}
					if (matrix[i, j] == 'O') // Replace with description character
					{
						pillars[pillarsIndex] = i.ToString() + j.ToString();
						pillarsIndex++;
					}
				}
			}

			//Basic While Loop
			while (!isOut && count <50) // Change condition to match the problem
			{
				string direction = Console.ReadLine();
				matrix[sRow, sCol] = '-'; // Change to match the problem
				if (IsOut(matrix, direction, sRow, sCol))
				{
					isOut = true;
					break;
				}
				sRow = MoveRow(direction, sRow);
				sCol = MoveCol(direction, sCol);
                if (matrix[sRow, sCol] == 'O')
                {
					matrix[sRow, sCol] = '-';
					if (pillars[0] == sRow.ToString()+sCol.ToString())
                    {
						sRow = int.Parse(pillars[1][0].ToString());
						sCol = int.Parse(pillars[1][1].ToString());
                    }
					else
                    {
						sRow = int.Parse(pillars[0][0].ToString());
						sCol = int.Parse(pillars[0][1].ToString());
					}
					matrix[sRow, sCol] = 'S';
					continue;
				}
                if (char.IsDigit(matrix[sRow, sCol]))
                {
					count += int.Parse(matrix[sRow, sCol].ToString());
				}
				matrix[sRow, sCol] = 'S';
			}

            if (isOut)
            {
                Console.WriteLine("Bad news, you are out of the bakery.");
            }
            if (count >= 50)
            {
                Console.WriteLine("Good news! You succeeded in collecting enough money!");
            }
            Console.WriteLine($"Money: {count}");
			PrintMatrix(matrix);
			//MoveFunctions
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
			// IsOut function
			static bool IsOut<T>(T[,] matrix, string direction, int sRow, int sCol)
			{
				switch (direction)
				{
					case "up": return sRow - 1 < 0;
					case "down": return sRow + 1 >= matrix.GetLength(0);
					case "left": return sCol - 1 < 0;
					case "right": return sCol + 1 >= matrix.GetLength(1);
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
		}
    }
}
