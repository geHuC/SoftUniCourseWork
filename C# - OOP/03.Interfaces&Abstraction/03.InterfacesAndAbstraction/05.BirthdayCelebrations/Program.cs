using _05.BirthdayCelebrations.Interfaces;
using System;
using System.Collections.Generic;

namespace _05.BirthdayCelebrations
{
    public class Program
    {
        static void Main(string[] args)
        {
            List<IBirthable> list = new List<IBirthable>();
            while (true)
            {
                string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                if (input[0] == "End")
                {
                    break;
                }
                IBirthable entrant = null;
                switch (input[0])
                {
                    case "Citizen":
                        entrant = new Citizen(input[1], int.Parse(input[2]), input[3], input[4]);
                        break;
                    case "Pet":
                        entrant = new Pet(input[1], input[2]);
                        break;
                }
                if (entrant != null)
                {

                    list.Add(entrant);
                }
            }
            string end = Console.ReadLine();
           // int count = 0;
            foreach (var id in list)
            {
                if (id.Birthday.EndsWith(end))
                {
                    Console.WriteLine(id.Birthday);
                  //  count++;
                }
            }
            //if (count <1)
            //{
            //    Console.WriteLine("< empty output >");
            //}
        }
    }
}
