using System;
using System.Linq;

namespace _03.CustomMinFunction
{
    class Program
    {
        static void Main(string[] args)
        {
            Func<int[], int> funk = getMin;
            int[] array = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();
            Console.WriteLine(funk(array));
        }
        static int getMin(int[] array)
        {
            int minNum = array[0];
            foreach (var num in array)
            {
                if (minNum>num)
                {
                    minNum = num;
                }
            }
            return minNum;
        }

    }
}
