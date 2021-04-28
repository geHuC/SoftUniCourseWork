using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BakeryOpenning
{
    public class Bakery
    {
        private List<Employee> data;
        public int Capacity { get; private set; }
        public string Name { get; private set; }
        public int Count { get => data.Count; }
        public Bakery(string name, int capacity)
        {
            Name = name;
            Capacity = capacity;
            data = new List<Employee>();
        }
        public void Add(Employee employee)
        {
            if (data.Count < Capacity)
            {
                data.Add(employee);
            }
        }
        public bool Remove(string name)
        {
            Employee temp = data.FirstOrDefault(e => e.Name == name);
            if (temp != null)
            {
                data.Remove(temp);
                return true;
            }
            return false;
        }
        public Employee GetOldestEmployee()
        {
            return data.OrderByDescending(e => e.Age).First();
        }
        public Employee GetEmployee(string name)
        {
            return data.FirstOrDefault(e => e.Name == name);
        }
        public string Report()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Employees working at Bakery {Name}:");
            foreach (Employee item in data)
            {
                sb.AppendLine(item.ToString());
            }
            return sb.ToString();
        }
    }

}
