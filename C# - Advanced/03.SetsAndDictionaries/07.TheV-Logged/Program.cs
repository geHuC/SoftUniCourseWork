using System;
using System.Collections.Generic;
using System.Linq;

namespace _07.TheV_Logger
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            HashSet<string> vLoggers = new HashSet<string>();
            Dictionary<string, HashSet<string>> follows = new Dictionary<string, HashSet<string>>();
            Dictionary<string, SortedSet<string>> followers = new Dictionary<string, SortedSet<string>>();

            while (input != "Statistics")
            {
                string[] data = input.Split(" ");
                string keyWord = data[1];
                string name = data[0];
                switch (keyWord)
                {
                    case "joined":
                        if (!vLoggers.Contains(name))
                        {
                            vLoggers.Add(name);
                            follows.Add(name, new HashSet<string>());
                            followers.Add(name, new SortedSet<string>());
                        }
                        break;

                    case "followed":
                        string followed = data[2];
                        if (name != followed)
                        {
                            if (vLoggers.Contains(name) && vLoggers.Contains(followed))
                            {
                                follows[name].Add(followed);
                                followers[followed].Add(name);

                            }
                        }
                        break;
                }
                input = Console.ReadLine();
            }

            Console.WriteLine($"The V-Logger has a total of {vLoggers.Count} vloggers in its logs.");
            List<vlog> vloggerList = new List<vlog>();
            foreach (var item in vLoggers)
            {
                int numberOfFollowers = followers[item].Count;
                int numberFollowing = follows[item].Count;
                vlog v = new vlog();
                v.followers = numberOfFollowers;
                v.following = numberFollowing;
                v.name = item;
                vloggerList.Add(v);
            }
            var orderedVloggerList = vloggerList.OrderByDescending(vlog => vlog.followers).ThenBy(vlog => vlog.following);
            int count = 1;
            foreach (var item in orderedVloggerList)
            {
                if (count == 1)
                {
                    Console.WriteLine($"1. {item.name} : {item.followers} followers, {item.following} following");
                    foreach (var memeber in followers[item.name])
                    {
                        Console.WriteLine($"*  {memeber}");
                    }
                    count++;
                }
                else
                {
                    Console.WriteLine($"{count}. {item.name} : {item.followers} followers, {item.following} following");
                    count++;
                }

            }
        }
        public class vlog
        {
            public int followers { get; set; }
            public int following { get; set; }
            public string name { get; set; }
        }
    }
}
