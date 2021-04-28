using AquaShop.Models.Aquariums.Contracts;
using AquaShop.Models.Decorations.Contracts;
using AquaShop.Models.Fish.Contracts;
using AquaShop.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AquaShop.Models.Aquariums
{
    public abstract class Aquarium : IAquarium
    {
        private string name;
        private Dictionary<string, IFish> fishes;
        private List<IDecoration> decorations;
        public Aquarium(string name, int capacity)
        {
            Name = name;
            Capacity = capacity;
            fishes = new Dictionary<string, IFish>();
            decorations = new List<IDecoration>();
        }
        public string Name
        {
            get => name;
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException(ExceptionMessages.InvalidAquariumName);
                }
                name = value;
            }
        }

        public int Capacity { get; private set; }

        public int Comfort
        {
            get
            {
                int comfort = 0;
                foreach (var item in Decorations)
                {
                    comfort += item.Comfort;
                }
                return comfort;
            }
        }

        public ICollection<IDecoration> Decorations => decorations;

        public ICollection<IFish> Fish => fishes.Values;

        public void AddDecoration(IDecoration decoration)
        {
            decorations.Add(decoration);
        }

        public void AddFish(IFish fish)
        {
            if (fishes.Count == Capacity)
            {
                throw new InvalidOperationException(ExceptionMessages.NotEnoughCapacity);
            }
            fishes.Add(fish.Name, fish);
        }

        public void Feed()
        {
            foreach (var item in fishes.Values)
            {
                item.Eat();
            }
        }

        public string GetInfo()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"{Name} ({this.GetType().Name}):");

            if (fishes.Count == 0)
            {
                sb.AppendLine("Fish: none");
            }
            else
            {
                sb.AppendLine("Fish: " + string.Join(", ", fishes.Values.Select(x => x.Name).ToList()));
            }
            sb.AppendLine("Decorations: " + decorations.Count.ToString());
            sb.AppendLine("Comfort: " + Comfort.ToString());
            return sb.ToString().TrimEnd();
        }

        public bool RemoveFish(IFish fish)
        {
            return fishes.Remove(fish.Name);
        }
    }
}
