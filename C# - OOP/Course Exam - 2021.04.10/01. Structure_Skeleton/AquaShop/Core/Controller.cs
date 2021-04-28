using AquaShop.Core.Contracts;
using AquaShop.Models.Aquariums;
using AquaShop.Models.Aquariums.Contracts;
using AquaShop.Models.Decorations;
using AquaShop.Models.Decorations.Contracts;
using AquaShop.Models.Fish;
using AquaShop.Models.Fish.Contracts;
using AquaShop.Repositories;
using AquaShop.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AquaShop.Core
{
    public class Controller : IController
    {
        private DecorationRepository decorations;
        private Dictionary<string, IAquarium> aquariums;
        public Controller()
        {
            decorations = new DecorationRepository();
            aquariums = new Dictionary<string, IAquarium>();
        }
        public string AddAquarium(string aquariumType, string aquariumName)
        {
            Aquarium aquarium = null;

            switch (aquariumType)
            {
                case "FreshwaterAquarium":
                    aquarium = new FreshwaterAquarium(aquariumName);
                    break;
                case "SaltwaterAquarium":
                    aquarium = new SaltwaterAquarium(aquariumName);
                    break;
            }

            if (aquarium == null)
            {
                throw new InvalidOperationException(ExceptionMessages.InvalidAquariumType);
            }
            aquariums.Add(aquariumName, aquarium);

            return string.Format(OutputMessages.SuccessfullyAdded, aquariumType);
        }

        public string AddDecoration(string decorationType)
        {
            IDecoration decoration = null;
            switch (decorationType)
            {
                case "Plant":
                    decoration = new Plant();
                    break;
                case "Ornament":
                    decoration = new Ornament();
                    break;
            }
            if (decoration == null)
            {
                throw new InvalidOperationException(ExceptionMessages.InvalidDecorationType);
            }
            decorations.Add(decoration);

            return string.Format(OutputMessages.SuccessfullyAdded, decorationType);
        }

        public string AddFish(string aquariumName, string fishType, string fishName, string fishSpecies, decimal price)
        {
            IFish fish = null;

            switch (fishType)
            {
                case "FreshwaterFish":
                    fish = new FreshwaterFish(fishName, fishSpecies, price);
                    break;
                case "SaltwaterFish":
                    fish = new SaltwaterFish(fishName, fishSpecies, price);
                    break;
            }

            if (fish == null)
            {
                throw new InvalidOperationException(ExceptionMessages.InvalidFishType);
            }

            IAquarium aquarium = aquariums[aquariumName];

            if (aquarium.GetType().Name == "FreshwaterAquarium" && fishType == "SaltwaterFish")
            {
                return OutputMessages.UnsuitableWater;
            }

            else if (aquarium.GetType().Name == "SaltwaterAquarium" && fishType == "FreshwaterFish")
            {
                return OutputMessages.UnsuitableWater;
            }

            else
            {
                aquarium.AddFish(fish);

                return string.Format(OutputMessages.EntityAddedToAquarium, fishType, aquariumName);

            }
        }

        public string CalculateValue(string aquariumName)
        {
            IAquarium aquarium = aquariums[aquariumName];

            decimal price = aquarium.Fish.Sum(x => x.Price) + aquarium.Decorations.Sum(x => x.Price);

            return string.Format(OutputMessages.AquariumValue, aquariumName, price);
        }

        public string FeedFish(string aquariumName)
        {
            aquariums[aquariumName].Feed();

            return string.Format(OutputMessages.FishFed, aquariums[aquariumName].Fish.Count);
        }

        public string InsertDecoration(string aquariumName, string decorationType)
        {
            IDecoration decoration = decorations.FindByType(decorationType);

            if (decoration == null)
            {
                throw new InvalidOperationException(string.Format(ExceptionMessages.InexistentDecoration, decorationType));
            }

            aquariums[aquariumName].AddDecoration(decoration);

            decorations.Remove(decoration);

            return string.Format(OutputMessages.EntityAddedToAquarium, decorationType, aquariumName);
        }

        public string Report()
        {
            StringBuilder builder = new StringBuilder();

            foreach (var aquarium in aquariums.Values)
            {
                builder.AppendLine(aquarium.GetInfo());
            }

            return builder.ToString().Trim();
        }
    }
}
