using System;
using System.Collections.Generic;

namespace _03.Raiding
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine().Trim());
            List<BaseHero> heroes = new List<BaseHero>();

            while(heroes.Count < n)
            { 
                string name = Console.ReadLine();
                string type = Console.ReadLine();
                BaseHero hero = null;
                switch (type)
                {
                    case "Druid":
                        hero = new Druid(name);
                        break;
                    case "Paladin":
                        hero = new Paladin(name);
                        break;
                    case "Rogue":
                        hero = new Rogue(name);
                        break;
                    case "Warrior":
                        hero = new Warrior(name);
                        break;
                    default:
                        Console.WriteLine("Invalid hero!");
                        continue;
                }
                heroes.Add(hero);
            }
            int bossPower = int.Parse(Console.ReadLine());
            int partyPower = 0;
            foreach (var item in heroes)
            {
                Console.WriteLine(item.CastAbility());
                partyPower += item.Power;
            }
            if (partyPower>=bossPower)
            {
                Console.WriteLine("Victory!");
            }
            else
            {
                Console.WriteLine("Defeat...");
            }
        }
    }
}
