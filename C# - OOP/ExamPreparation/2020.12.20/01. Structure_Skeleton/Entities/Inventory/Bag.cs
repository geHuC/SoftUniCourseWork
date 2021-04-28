using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WarCroft.Constants;
using WarCroft.Entities.Items;

namespace WarCroft.Entities.Inventory
{
    public abstract class Bag : IBag
    {
        private List<Item> items;
        public Bag(int capacity)
        {
            items = new List<Item>();
            Capacity = capacity;
        }
        public int Capacity { get; set; }

        public int Load
        {
            get
            {
                int weight = 0;
                foreach (var item in items)
                {
                    weight += item.Weight;
                }
                return weight;
            }
        }
        public IReadOnlyCollection<Item> Items => items;

        public void AddItem(Item item)
        {
            if (Load + item.Weight > Capacity)
            {
                throw new InvalidOperationException(ExceptionMessages.ExceedMaximumBagCapacity);
            }
            items.Add(item);
        }

        public Item GetItem(string name)
        {
            if (items.Count == 0)
            {
                throw new InvalidOperationException(string.Format(ExceptionMessages.EmptyBag));
            }
            Item toReturn = items.FirstOrDefault(x => x.GetType().Name == name);
            if (toReturn == null)
            {
                throw new ArgumentException(string.Format(ExceptionMessages.ItemNotFoundInBag, name));
            }
            items.Remove(toReturn);
            return toReturn;
        }
    }
}
