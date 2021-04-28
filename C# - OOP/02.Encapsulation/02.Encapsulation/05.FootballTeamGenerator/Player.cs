using System;
using System.Collections.Generic;
using System.Text;

namespace _05.FootballTeamGenerator
{
    public class Player
    {
        private const int MinSkillLevel = 0;
        private const int MaxSkillLevel = 100;
        private string name;
        private int endurance;
        private int sprint;
        private int dribble;
        private int passing;
        private int shooting;

        public Player(string name, int endurance, int sprint, int dribble, int passing, int shooting)
        {
            Name = name;
            Endurance = endurance;
            Sprint = sprint;
            Dribble = dribble;
            Passing = passing;
            Shooting = shooting;
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
        public int Endurance
        {
            get => endurance;
            private set
            {
                Validator.ThrowOutsideOfRange(
                    value,
                    MinSkillLevel,
                    MaxSkillLevel,
                    $"{nameof(Endurance)} should be between {MinSkillLevel} and {MaxSkillLevel}.");

                endurance = value;
            }
        }
        public int Sprint
        {
            get => sprint;
            private set
            {
                Validator.ThrowOutsideOfRange(
                    value,
                    MinSkillLevel,
                    MaxSkillLevel,
                    $"{nameof(Sprint)} should be between {MinSkillLevel} and {MaxSkillLevel}.");

                sprint = value;
            }
        }
        public int Dribble
        {
            get => dribble;
            private set
            {

                Validator.ThrowOutsideOfRange(
                    value,
                    MinSkillLevel,
                    MaxSkillLevel,
                    $"{nameof(Dribble)} should be between {MinSkillLevel} and {MaxSkillLevel}.");

                dribble = value;
            }
        }
        public int Passing
        {
            get => passing;
            private set
            {
                Validator.ThrowOutsideOfRange(
                    value,
                    MinSkillLevel,
                    MaxSkillLevel,
                    $"{nameof(Passing)} should be between {MinSkillLevel} and {MaxSkillLevel}.");

                passing = value;
            }
        }
        public int Shooting
        {
            get => shooting;
            private set
            {
                Validator.ThrowOutsideOfRange(
                    value,
                    MinSkillLevel,
                    MaxSkillLevel,
                    $"{nameof(Shooting)} should be between {MinSkillLevel} and {MaxSkillLevel}.");

                shooting = value;
            }
        }
        public double AverageSkillPoints
        {
            get => Math.Round((Endurance + Sprint + Dribble + Passing + Shooting) / 5.0);                                                                                                                                                                                           
        }
    }
}
