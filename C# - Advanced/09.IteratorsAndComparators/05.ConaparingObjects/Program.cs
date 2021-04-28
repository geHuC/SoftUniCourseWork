using System;
using System.Collections.Generic;

namespace _05.ConaparingObjects
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Person> people = new List<Person>();
            string[] input = Console.ReadLine().Split();
            while (input[0] != "END")
            {
                Person person = new Person(input[0], int.Parse(input[1]), input[2]);
                people.Add(person);
                input = Console.ReadLine().Split();
            }
            int index = int.Parse(Console.ReadLine())-1;
            int matches = 0;         
            foreach (var person in people)
            {
                if (people[index].CompareTo(person) ==0)
                {
                    matches++;
                }
            }
            if (matches>1)
            {
                Console.WriteLine($"{matches} {people.Count - matches} {people.Count}");
            }
            else
            {
                Console.WriteLine("No matches");
            }
        }
    }
}
