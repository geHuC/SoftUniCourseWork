using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace VetClinic
{
    public class Clinic
    {
        private List<Pet> data;
        public int Capacity { get; set; }
        public int Count { get => data.Count; }
        public Clinic(int capacity)
        {
            Capacity = capacity;
            data = new List<Pet>();
        }
        public void Add(Pet pet)
        {
            if (data.Count < Capacity)
            {
                data.Add(pet);
            }
        }
        public bool Remove(string name)
        {
            Pet pet = data.FirstOrDefault(x => x.Name == name);
            if (pet != null)
            {
                data.Remove(pet);
                return true;
            }
            return false;
        }
        public Pet GetPet(string name, string owner)
        {
            return data.FirstOrDefault(x => x.Name == name && x.Owner == owner);
        }
        public Pet GetOldestPet()
        {
            return data.OrderByDescending(x => x.Age).FirstOrDefault();
        }
        public string GetStatistics()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("The clinic has the following patients:");
            foreach (Pet item in data)
            {
                sb.AppendLine($"Pet {item.Name} with owner: {item.Owner}");
            }
            return sb.ToString().Trim();
        }

    }
}
