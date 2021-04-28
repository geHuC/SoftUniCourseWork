using System;
using System.Collections.Generic;
using System.Linq;

namespace _08.Ranking
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, string> passwords = new Dictionary<string, string>();
            SortedDictionary<string, Dictionary<string, int>> studentResults = new SortedDictionary<string, Dictionary<string, int>>();

            string input = Console.ReadLine();

            while (input != "end of contests")
            {
                string[] contestsAndPasswords = input.Split(":");
                passwords.Add(contestsAndPasswords[0], contestsAndPasswords[1]);
                input = Console.ReadLine();
            }
            input = Console.ReadLine();
            while (input != "end of submissions")
            {
                string[] data = input.Split("=>");
                string course = data[0];
                string password = data[1];
                string name = data[2];
                int points = int.Parse(data[3]);
                if (passwords.ContainsKey(course))
                {
                    if (passwords[course] == password)
                    {
                        if (!studentResults.ContainsKey(name))
                        {
                            studentResults.Add(name, new Dictionary<string, int>());
                            studentResults[name].Add("Total", 0);
                        }
                        if (!studentResults[name].ContainsKey(course))
                        {
                            studentResults[name].Add(course, points);
                            studentResults[name]["Total"] += points;
                        }
                        if (studentResults[name][course] < points)
                        {
                            studentResults[name]["Total"] -= studentResults[name][course];
                            studentResults[name]["Total"] += points;
                            studentResults[name][course] = points;
                        }
                    }
                }
                input = Console.ReadLine();
            }
            int bestResult = 0;
            string bestCandidate = "";
            foreach (string student in studentResults.Keys)
            {
                if (bestResult < studentResults[student]["Total"])
                {
                    bestResult = studentResults[student]["Total"];
                    bestCandidate = student;
                }
            }
            Console.WriteLine($"Best candidate is {bestCandidate} with total {bestResult} points.");
            Console.WriteLine("Ranking:");
            foreach (string student in studentResults.Keys)
            {
                Console.WriteLine(student);
                var sortedStudentResults = studentResults[student].OrderByDescending(i => i.Value);
                foreach (KeyValuePair<string, int> results in sortedStudentResults)
                {
                    if (results.Key != "Total")
                    {
                        Console.WriteLine($"#  {results.Key} -> {results.Value}");
                    }
                }
            }
        }
    }
}
