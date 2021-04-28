using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Parking
{
    public class Parking
    {
        private List<Car> data;
        public string Type { get; private set; }
        public int Capacity { get; private set; }
        public int Count { get => data.Count; }

        public Parking(string type, int capacity)
        {
            Type = type;
            Capacity = capacity;
            data = new List<Car>();
        }

        public void Add(Car car)
        {
            if (data.Count < Capacity)
            {
                data.Add(car);
            }
        }
        public bool Remove(string manufacturer, string model)
        {
            Car car = data.FirstOrDefault(c => c.Manufacturer == manufacturer && c.Model == model);
            if (car != null)
            {
                data.Remove(car);
                return true;
            }
            return false;
        }
        public Car GetLatestCar()
        {
            return data.OrderByDescending(c => c.Year).FirstOrDefault();
        }
        public Car GetCar(string manufacturer, string model)
        {
            return data.FirstOrDefault(c => c.Manufacturer == manufacturer && c.Model == model);
        }
        public string GetStatistics()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"The cars are parked in {Type}:");
            foreach (Car item in data)
            {
                sb.AppendLine(item.ToString());
            }
            return sb.ToString();
        }

    }
}
