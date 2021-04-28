using _07.MilitaryElite.Enums;
using _07.MilitaryElite.Interfaces;
using _07.MilitaryElite.Soldiers;
using System;
using System.Collections.Generic;

namespace _07.MilitaryElite
{
    public class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, ISoldier> soldiersById = new Dictionary<string, ISoldier>();
            while (true)
            {
                string input = Console.ReadLine();
                if (input == "End")
                {
                    break;
                }

                string[] split = input.Split(' ', StringSplitOptions.RemoveEmptyEntries);
                string type = split[0];
                string id = split[1];
                string firstName = split[2];
                string lastName = split[3];

                switch (type)
                {
                    case nameof(Private):
                        {
                            decimal salary = decimal.Parse(split[4]);

                            soldiersById.Add(id, new Private(id, firstName, lastName, salary));
                            break;
                        }
                    case nameof(LieutenantGeneral):
                        {
                            decimal salary = decimal.Parse(split[4]);
                            ILieutenantGeneral general = new LieutenantGeneral(id, firstName, lastName, salary);
                            for (int i = 5; i < split.Length; i ++)
                            {
                                if (!soldiersById.ContainsKey(split[i]))
                                {
                                    continue;
                                }
                                general.AddPrivate((IPrivate)soldiersById[split[i]]);
                            }
                            soldiersById.Add(id, general);
                        }
                        break;
                    case nameof(Engineer):
                        {
                            decimal salary = decimal.Parse(split[4]);
                            bool isCorpsValid = Enum.TryParse(split[5], out Corps corps);
                            if (!isCorpsValid)
                            {
                                continue;
                            }
                            IEngineer engineer = new Engineer(id, firstName, lastName, salary, corps);
                            for (int i = 6; i < split.Length; i +=2 )
                            {
                                string part = split[i];
                                int hours = int.Parse(split[i + 1]);
                                IRepair repair = new Repair(part, hours);
                                engineer.AddRepair(repair);                      
                            }
                            soldiersById.Add(id, engineer);
                        }
                        break;
                    case nameof(Commando):
                        {
                            decimal salary = decimal.Parse(split[4]);
                            bool isCorpsValid = Enum.TryParse(split[5], out Corps corps);
                            if (!isCorpsValid)
                            {
                                continue;
                            }
                            ICommando commando = new Commando(id, firstName, lastName, salary, corps);
                            for (int i = 6; i < split.Length; i += 2)
                            {
                                string name = split[i];
                                bool isStateValid = Enum.TryParse(split[i+1], out Progress progress);
                                if (!isStateValid)
                                {
                                    continue;
                                }
                                IMission mission = new Mission(name, progress);
                                commando.AddMission(mission);
                            }
                            soldiersById.Add(id, commando);
                        }
                        break;
                    case nameof(Spy):
                        int codeNumber = int.Parse(split[4]);
                        soldiersById.Add(id,new Spy(id, firstName, lastName, codeNumber));
                        break;
                }

            }
            foreach (var item in soldiersById)
            {
                Console.WriteLine(item.Value);
            }
        }
    }
}
