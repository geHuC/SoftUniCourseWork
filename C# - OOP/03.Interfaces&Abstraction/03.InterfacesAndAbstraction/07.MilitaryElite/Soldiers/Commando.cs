﻿using _07.MilitaryElite.Enums;
using _07.MilitaryElite.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite.Soldiers
{
    public class Commando : SpecialisedSoldier, ICommando
    {
        private List<IMission> missions;
        public Commando(
            string id,
            string firstName,
            string lastName,
            decimal salary,
            Corps corps) 
            : base(id, firstName, lastName, salary, corps)
        {
            missions = new List<IMission>();
        }

        public IReadOnlyCollection<IMission> Missions => missions.AsReadOnly();

        public void AddMission(IMission mission)
        {
            missions.Add(mission);
        }
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine(base.ToString());
            sb.AppendLine("Missions :");
            foreach (var item in missions)
            {
                sb.AppendLine($"  {item.ToString()}");
            }
            return sb.ToString().Trim();
        }

    }
}
