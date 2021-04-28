using System;
using System.Collections.Generic;

namespace _05.FootballTeamGenerator
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Team> teamsByName = new Dictionary<string, Team>();
            while (true)
            {
                string line = Console.ReadLine();
                if (line == "END")
                {
                    break;
                }
                string[] split = line.Split(';', StringSplitOptions.RemoveEmptyEntries);
                switch (split[0])
                {
                    case "Team":
                        try
                        {
                            Team team = new Team(split[1]);
                            teamsByName.Add(split[1], team);
                        }
                        catch (ArgumentException ex)
                        {
                            Console.WriteLine(ex.Message);
                        }
                        break;
                    case "Add":
                        if (!teamsByName.ContainsKey(split[1]))
                        {
                            Console.WriteLine($"Team {split[1]} does not exist.");
                            continue;
                        }
                        try
                        {
                            string pName = split[2];
                            int endurance = int.Parse(split[3]);
                            int sprint = int.Parse(split[4]);
                            int dribble = int.Parse(split[5]);
                            int passing = int.Parse(split[6]);
                            int shooting = int.Parse(split[7]);
                            Player player = new Player(pName, endurance, sprint, dribble, passing, shooting);
                            teamsByName[split[1]].AddPlayer(player);
                        }
                        catch (ArgumentException ex)
                        {
                            Console.WriteLine(ex.Message);
                        }
                        break;
                    case "Remove":
                        if (!teamsByName.ContainsKey(split[1]))
                        {
                            Console.WriteLine($"Team {split[1]} does not exist.");
                            continue;
                        }
                        try
                        {
                            teamsByName[split[1]].RemovePlayer(split[2]);
                        }
                        catch (InvalidOperationException ex)
                        {
                            Console.WriteLine(ex.Message);
                        }
                        break;
                    case "Rating":
                        if (!teamsByName.ContainsKey(split[1]))
                        {
                            Console.WriteLine($"Team {split[1]} does not exist.");
                            continue;
                        }
                        Console.WriteLine($"{split[1]} - {teamsByName[split[1]].AverageRating}");
                        break;
                }
            }
        }
    }
}
