﻿using System;
using System.Collections.Generic;
using System.Text;

namespace _03.Raiding
{
    public class Paladin:BaseHero
    {
        private const int power = 100;
        public Paladin(string name) : base(name, power)
        {
        }
        public override string CastAbility()
        {
            return $"{ GetType().Name} - { Name} healed for { Power}";
        }
    }
}
