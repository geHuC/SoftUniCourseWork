using _04.BorderControl.Interfaces;
using System;
using System.Collections.Generic;

namespace _04.BorderControl
{
    class Program
    {
        static void Main(string[] args)
        {
            List<IIDAble> idList = new List<IIDAble>();
            while (true)
            {
                string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                if (input[0] == "End")
                {
                    break;
                }
                IIDAble entrant = null;

                if (input.Length == 3)
                {
                    entrant = new Citizen(input[0], int.Parse(input[1]), input[2]);
                }
                else if (input.Length ==2)
                {
                    entrant = new Robot(input[0], input[1]);
                }

                if (entrant != null)
                {
                    idList.Add(entrant);
                }
            }
            string idEnd = Console.ReadLine();
            foreach (var id in idList)
            {
                if (id.ID.EndsWith(idEnd))
                {
                    Console.WriteLine(id.ID);
                }
            }
        }
    }
}
