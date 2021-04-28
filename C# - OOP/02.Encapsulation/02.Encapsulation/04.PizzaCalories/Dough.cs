using System;
using System.Collections.Generic;
using System.Text;

namespace _04.PizzaCalories
{
    public class Dough
    {
        private const int minWeight = 1;
        private const int maxWeight = 200;

        private string flourType;
        private string bakingTechnique;
        private int weight;

        public Dough(string flour, string bakingTechnique, int weight)
        {
            FlourType = flour;
            BakingTechnique = bakingTechnique;
            Weight = weight;
        }
        public string FlourType
        {
            get => FlourType;
            private set
            {
                if (Enum.TryParse(value, true, out FlourTypeEnum fType))
                {
                    flourType = value;
                }
                else
                {
                    throw new ArgumentException("Invalid type of dough.");
                }
            }
        }

        public string BakingTechnique
        {
            get => bakingTechnique; private set
            {
                if (Enum.TryParse(value, true, out BakingTechniqueEnum bTech))
                {
                    bakingTechnique = value;
                }
                else
                {
                    throw new ArgumentException("Invalid type of dough.");
                }
            }
        }

        public int Weight
        {
            get => weight; private set
            {
                if (value < minWeight || value > maxWeight)
                {
                    throw new ArgumentException($"Dough weight should be in the range [{minWeight}..{maxWeight}].");
                }
                weight = value;
            }
        }
        public double GetCalories()
        {
            double flourModifier = GetFlourCalories();
            double techniqueModifier = GetTechniqueCalories();
            return weight * 2 * flourModifier * techniqueModifier;
        }

        private double GetTechniqueCalories()
        {
            BakingTechniqueEnum technique = (BakingTechniqueEnum)Enum.Parse(typeof(BakingTechniqueEnum), bakingTechnique,true);
            switch (technique)
            {
                case BakingTechniqueEnum.Crispy:
                    return 0.9;
                case BakingTechniqueEnum.Chewy:
                    return 1.1;
                case BakingTechniqueEnum.Homemade:
                    return 1.0;
                default:
                    return 1.0;
            }
        }

        private double GetFlourCalories()
        {
            FlourTypeEnum fType = (FlourTypeEnum)Enum.Parse(typeof(FlourTypeEnum), flourType, true);
            switch (fType)
            {
                case FlourTypeEnum.White:
                    return 1.5;
                case FlourTypeEnum.Wholegrain:
                    return 1.0;
                default:
                    return 1.0;
            }
        }
    }
}
