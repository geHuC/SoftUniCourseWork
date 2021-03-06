using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _05.FootballTeamGenerator
{
    public class Team
    {
        private string name;
        private Dictionary<string, Player> playersByName;

        public Team(string name)
        {
            Name = name;
            playersByName = new Dictionary<string, Player>();
        }
        public string Name
        {
            get => name;
            private set
            {
                Validator.ThrowIfNullOrWhitespace(value, "A name should not be empty.");

                name = value;
            }
        }
        public void AddPlayer(Player player)
        {
            playersByName.Add(player.Name, player);
        }
        public void RemovePlayer(string playerName)
        {
            if (!playersByName.ContainsKey(playerName))
            {
                throw new InvalidOperationException($"Player {playerName} is not in {Name} team.");
            }

            playersByName.Remove(playerName);
        }
        public double AverageRating
        {
            get
            {
                if (playersByName.Count == 0)
                {
                    return 0;
                }
                return Math.Round(playersByName.Values.Average(p => p.AverageSkillPoints));
            }
        }
    }
}
