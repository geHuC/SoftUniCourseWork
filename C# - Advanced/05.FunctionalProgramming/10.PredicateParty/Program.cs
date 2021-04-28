using System;
using System.Collections.Generic;
using System.Linq;

namespace _10.PredicateParty
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> people = new List<string>(Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries));
            string input = Console.ReadLine();
            while (input != "Party!")
            {
                readCommands(input, people);
                input = Console.ReadLine();

            }
            if (people.Any())
            {
                Console.WriteLine(string.Join(", ", people) + " are going to the party!");
            }
            else
            {
                Console.WriteLine("Nobody is going to the party!");
            }
        }
        static void readCommands(string input, List<string> list)
        {
            string[] commands = input.Split(' ', StringSplitOptions.RemoveEmptyEntries);
            string command = commands[0];
            string criteria = commands[1];
            string criteriaInput = commands[2];
            switch (command)
            {
                case "Double":
                    doubleName(criteria, criteriaInput, list);
                    break;
                case "Remove":
                    removeNames(criteria, criteriaInput, list);
                    break;
            }
        }
        static void doubleName(string criteria, string criteriaInput, List<string> people)
        {
            List<string> matches = criteriaSelect(people, criteria, criteriaInput);
            foreach (var person in matches)
            {
                if (people.Contains(person))
                {
                    people.Insert(people.IndexOf(person), person);
                }
            }
        }
        static void removeNames(string criteria, string criteriaInput, List<string> people)
        {
            List<string> matches = criteriaSelect(people, criteria, criteriaInput);
            foreach (var person in matches)
            {
                if (people.Contains(person))
                {
                    people.Remove(person);
                }
            }
        }
        static List<string> criteriaSelect(List<string> people, string criteria, string criteriaInput)
        {
            switch (criteria)
            {
                case "StartsWith": return startsWith(people, criteriaInput);
                case "EndsWith": return endsWith(people, criteriaInput);
                case "Length": return length(people, criteriaInput);
                default: return null;
            }
        }
        static List<string> startsWith(List<string> people, string toMatch)
        {
            List<string> peopleToReturn = new List<string>();
            foreach (string item in people)
            {
                if (item.StartsWith(toMatch))
                {
                    peopleToReturn.Add(item);
                }
            }
            return peopleToReturn;
        }
        static List<string> endsWith(List<string> people, string toMatch)
        {
            List<string> peopleToReturn = new List<string>();
            foreach (string item in people)
            {
                if (item.EndsWith(toMatch))
                {
                    peopleToReturn.Add(item);
                }
            }
            return peopleToReturn;
        }
        static List<string> length(List<string> people, string toMatch)
        {
            List<string> peopleToReturn = new List<string>();
            foreach (string item in people)
            {
                if (item.Length == int.Parse(toMatch))
                {
                    peopleToReturn.Add(item);
                }
            }
            return peopleToReturn;
        }

    }
}
