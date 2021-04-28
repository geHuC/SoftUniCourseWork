using System;
using System.Linq;

namespace _02.Matrises
{
	class Program
	{
		static void Main(string[] args)
		{
			//Square matrix

			int n = int.Parse(Console.ReadLine());
			char[,] matrix = new char[n, n];
			string[] commands = Console.ReadLine().Split(",", StringSplitOptions.RemoveEmptyEntries);
			int pOne = 0;
			int pTwo = 0;
			int TotalShips = 0;

			// fill matrix with data
			for (int i = 0; i < matrix.GetLength(0); i++)
			{
				string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
				for (int j = 0; j < matrix.GetLength(1); j++)
				{
					matrix[i, j] = char.Parse(input[j]);
					if (matrix[i, j] == '<') // Replace with description character
					{
						pOne++;
						TotalShips++;
					}
					if (matrix[i, j] == '>') // Replace with description character
					{
						pTwo++;
						TotalShips++;
					}
				}
			}
			for (int i = 0; i < commands.Length; i++)
			{
				if (pOne == 0 || pTwo == 0)
				{
					break;
				}
				int[] c = commands[i].Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
				if (c[0] < 0 || c[0] >= n || c[1] < 0 || c[1] >= n)
				{
					continue;
				}
				int row = c[0];
				int col = c[1];
				if (matrix[row, col] == '<')
				{
					matrix[row, col] = 'X';
					pOne--;
					continue;
				}
				if (matrix[row, col] == '>')
				{
					matrix[row, col] = 'X';
					pTwo--;
					continue;
				}
				if (matrix[row, col] == '#')
				{
					string[] directions = new string[] { "up", "down", "left", "right", "upleft", "upright", "downright", "downleft" };
					foreach (var item in directions)
					{
						if (!IsOut(n, item, row, col))
						{
							int sRow = MoveRow(item, row);
							int sCol = MoveCol(item, col);
							if (matrix[sRow, sCol] == '<')
							{
								matrix[sRow, sCol] = 'X';
								pOne--;
								continue;
							}
							if (matrix[sRow, sCol] == '>')
							{
								matrix[sRow, sCol] = 'X';
								pTwo--;
								continue;
							}
						}
					}
				}
			}
			if (pOne < 1)
			{
				Console.WriteLine($"Player Two has won the game! {TotalShips - (pOne + pTwo)} ships have been sunk in the battle.");
			}
			if (pTwo < 1)
			{
				Console.WriteLine($"Player One has won the game! {TotalShips - (pOne + pTwo)} ships have been sunk in the battle.");
			}
			if (pOne > 0 && pTwo > 0)
			{
				Console.WriteLine("It" + (char)39 + $"s a draw! Player One has {pOne} ships left. Player Two has {pTwo} ships left.");

			}
			static int MoveRow(string command, int position)
			{
				switch (command)
				{
					case "up": return --position;
					case "down": return ++position;
					case "upleft": return --position;
					case "upright": return --position;
					case "downright": return ++position;
					case "downleft": return ++position;
					default: return position;
				}
			}
			static int MoveCol(string command, int position)
			{
				switch (command)
				{
					case "left": return --position;
					case "right": return ++position;
					case "downright": return ++position;
					case "downleft": return --position;
					case "upleft": return --position;
					case "upright": return ++position;
					default: return position;
				}
			}
			static bool IsOut(int n, string direction, int sRow, int sCol)
			{
				switch (direction)
				{
					case "up": return sRow - 1 < 0;
					case "down": return sRow + 1 >= n;
					case "left": return sCol - 1 < 0;
					case "right": return sCol + 1 >= n;
					case "upleft": return sRow - 1 < 0 || sCol - 1 < 0;
					case "upright": return sRow - 1 < 0 || sCol + 1 >= n;
					case "downright": return sRow + 1 >= n || sCol + 1 >= n;
					case "downleft": return sRow + 1 >= n || sCol - 1 < 0;
					default: return false;
				}
			}
		}
	}
}
