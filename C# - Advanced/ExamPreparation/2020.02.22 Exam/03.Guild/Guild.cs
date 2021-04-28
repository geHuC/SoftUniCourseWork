using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Guild
{
    class Guild
    {
        private List<Player> data;
        public string Name { get; set; }
        public int Capacity { get; private set; }
        public int Count { get => data.Count; }

        public Guild(string name, int capacity)
        {
            Name = name;
            Capacity = capacity;
            data = new List<Player>(capacity);
        }
        public void AddPlayer(Player player)
        {
            if (Capacity > data.Count)
            {
                data.Add(player);
            }
        }
        public bool RemovePlayer(string name)
        {
            Player player = data.FirstOrDefault(p => p.Name == name);
            if (player != null)
            {
                data.Remove(player);
                return true;
            }
            return false;
        }
        public void PromotePlayer(string name)
        {
            Player player = data.FirstOrDefault(p => p.Name == name);
            if (player != null)
            {
                player.Rank = "Member";
            }
        }
        public void DemotePlayer(string name)
        {
            Player player = data.FirstOrDefault(p => p.Name == name);
            if (player != null)
            {
                player.Rank = "Trial";
            }
        }
        public Player[] KickPlayersByClass(string klas)
        {
            List<Player> toReturn = new List<Player>();
            List<Player> tempData = new List<Player>();
            foreach (var player in data)
            {
                if (player.Class == klas)
                {
                    toReturn.Add(player);
                }
                else
                {
                    tempData.Add(player);
                }
            }
            data = tempData;
            return toReturn.ToArray();
        }
        public string Report()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Players in the guild: {Name}");
            foreach (var player in data)
            {
                sb.AppendLine(player.ToString());
            }
            return sb.ToString().Trim();
        }
    }
}
