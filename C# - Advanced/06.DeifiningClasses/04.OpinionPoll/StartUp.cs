using System;
using System.Collections.Generic;
using System.Linq;

namespace DefiningClasses
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            List<Person> people = new List<Person>();
            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(" ");
                Person newPerson = new Person(input[0], int.Parse(input[1]));
                people.Add(newPerson);
            }
            people = people.OrderBy(n => n.Name).ToList();
            foreach (var person in people)
            {
                if (person.Age>30)
                {
                    Console.WriteLine($"{person.Name} - {person.Age}");
                }
            }

        }
    }
}
