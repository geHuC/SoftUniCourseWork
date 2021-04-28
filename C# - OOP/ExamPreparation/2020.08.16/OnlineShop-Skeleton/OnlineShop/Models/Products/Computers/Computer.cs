using OnlineShop.Common.Constants;
using OnlineShop.Models.Products.Components;
using OnlineShop.Models.Products.Peripherals;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;

namespace OnlineShop.Models.Products.Computers
{
    public abstract class Computer : Product, IComputer
    {
        private List<IComponent> components;
        private List<IPeripheral> peripherals;
        protected Computer(int id, string manufacturer, string model, decimal price, double overallPerformance) : base(id, manufacturer, model, price, overallPerformance)
        {
            components = new List<IComponent>();
            peripherals = new List<IPeripheral>();
        }

        public override decimal Price => base.Price + components.Sum(c => c.Price) + peripherals.Sum(p => p.Price);
        public override double OverallPerformance => base.OverallPerformance + components.Average(c => c.OverallPerformance);

        public IReadOnlyCollection<IComponent> Components => new ReadOnlyCollection<IComponent>(components);

        public IReadOnlyCollection<IPeripheral> Peripherals => new ReadOnlyCollection<IPeripheral>(peripherals);

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine(base.ToString());
            sb.AppendLine($" Components ({components.Count}):");
            foreach (var item in components)
            {
                sb.AppendLine("  " + item.ToString());
            }
            if (peripherals.Count == 0)
            {
                sb.AppendLine($" Peripherals (0); Average Overall Performance (0.00):");
            }
            else
            {
                sb.AppendLine($" Peripherals ({peripherals.Count}); Average Overall Performance ({peripherals.Average(p => p.OverallPerformance):f2}):");
            }
            foreach (var item in peripherals)
            {
                sb.AppendLine("  " + item.ToString());
            }
            return sb.ToString().TrimEnd();
        }
        public void AddComponent(IComponent component)
        {
            if (components.Any(x => x.GetType().Name == component.GetType().Name))
            {
                throw new ArgumentException(String.Format(ExceptionMessages.ExistingComponent, component.GetType().Name, this.GetType().Name, Id));
            }
            else
            {
                components.Add(component);
            }
        }

        public void AddPeripheral(IPeripheral peripheral)
        {
            if (peripherals.Any(x => x.GetType().Name == peripheral.GetType().Name))
            {
                throw new ArgumentException(String.Format(ExceptionMessages.ExistingPeripheral, peripheral.GetType().Name, this.GetType().Name, Id));
            }
            else
            {
                peripherals.Add(peripheral);
            }
        }

        public IComponent RemoveComponent(string componentType)
        {
            if (!components.Any(x => x.GetType().Name == componentType))
            {
                throw new ArgumentException(String.Format(ExceptionMessages.NotExistingComponent, componentType, this.GetType().Name, Id));
            }
            else
            {
                int index = components.FindIndex(p => p.GetType().Name == componentType);
                var component = components[index];
                components.RemoveAt(index);
                return component;
            }
        }

        public IPeripheral RemovePeripheral(string peripheralType)
        {
            if (!peripherals.Any(x => x.GetType().Name == peripheralType))
            {
                throw new ArgumentException(String.Format(ExceptionMessages.NotExistingPeripheral, peripheralType, this.GetType().Name, Id));
            }
            else
            {
                int index = peripherals.FindIndex(p => p.GetType().Name == peripheralType);
                var peripheral = peripherals[index];
                peripherals.RemoveAt(index);
                return peripheral;
            }
        }
    }
}
