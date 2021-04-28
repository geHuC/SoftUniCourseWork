using OnlineShop.Common.Constants;
using OnlineShop.Common.Enums;
using OnlineShop.Models.Products.Components;
using OnlineShop.Models.Products.Computers;
using OnlineShop.Models.Products.Peripherals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineShop.Core
{
    public class Controller : IController
    {
        private List<IComputer> computers;
        public Controller()
        {
            computers = new List<IComputer>();
        }
        private void ValidateId(int id)
        {
            if (!computers.Any(c => c.Id == id))
            {
                throw new ArgumentException(ExceptionMessages.NotExistingComputerId);
            }
        }
        public string AddComponent(int computerId, int id, string componentType, string manufacturer, string model, decimal price, double overallPerformance, int generation)
        {
            ValidateId(computerId);
            var computer = computers.First(x => x.Id == computerId);
            if (computer.Components.Any(x => x.Id == id))
            {
                throw new ArgumentException(ExceptionMessages.ExistingComponentId);
            }
            if (!Enum.TryParse(componentType, out ComponentType cType))
            {
                throw new ArgumentException(ExceptionMessages.InvalidComponentType);
            }
            else
            {
                switch (cType)
                {
                    case ComponentType.CentralProcessingUnit:
                        computer.AddComponent(new CentralProcessingUnit(id, manufacturer, model, price, overallPerformance, generation));
                        break;
                    case ComponentType.Motherboard:
                        computer.AddComponent(new Motherboard(id, manufacturer, model, price, overallPerformance, generation));
                        break;
                    case ComponentType.PowerSupply:
                        computer.AddComponent(new PowerSupply(id, manufacturer, model, price, overallPerformance, generation));
                        break;
                    case ComponentType.RandomAccessMemory:
                        computer.AddComponent(new RandomAccessMemory(id, manufacturer, model, price, overallPerformance, generation));
                        break;
                    case ComponentType.SolidStateDrive:
                        computer.AddComponent(new SolidStateDrive(id, manufacturer, model, price, overallPerformance, generation));
                        break;
                    case ComponentType.VideoCard:
                        computer.AddComponent(new VideoCard(id, manufacturer, model, price, overallPerformance, generation));
                        break;
                }
                return String.Format(SuccessMessages.AddedComponent, componentType, id, computerId);
            }
        }

        public string AddComputer(string computerType, int id, string manufacturer, string model, decimal price)
        {
            if (computers.Any(c => c.Id == id))
            {
                throw new ArgumentException(ExceptionMessages.ExistingComputerId);
            }

            if (!Enum.TryParse(computerType, out ComputerType computer))
            {
                throw new ArgumentException(ExceptionMessages.InvalidComputerType);
            }
            else
            {
                switch (computer)
                {
                    case ComputerType.DesktopComputer:
                        computers.Add(new DesktopComputer(id, manufacturer, model, price));
                        break;
                    case ComputerType.Laptop:
                        computers.Add(new Laptop(id, manufacturer, model, price));
                        break;
                }
                return String.Format( SuccessMessages.AddedComputer,id);
            }
        }

        public string AddPeripheral(int computerId, int id, string peripheralType, string manufacturer, string model, decimal price, double overallPerformance, string connectionType)
        {
            ValidateId(computerId);
            var computer = computers.First(x => x.Id == computerId);
            if (computer.Peripherals.Any(x => x.Id == id))
            {
                throw new ArgumentException(ExceptionMessages.ExistingPeripheralId);
            }
            if (!Enum.TryParse(peripheralType, out PeripheralType cType))
            {
                throw new ArgumentException(ExceptionMessages.InvalidPeripheralType);
            }
            else
            {
                switch (cType)
                {
                    case PeripheralType.Headset:
                        computer.AddPeripheral(new Headset(id, manufacturer, model, price, overallPerformance, connectionType));
                        break;
                    case PeripheralType.Keyboard:
                        computer.AddPeripheral(new Keyboard(id, manufacturer, model, price, overallPerformance, connectionType));
                        break;
                    case PeripheralType.Monitor:
                        computer.AddPeripheral(new Monitor(id, manufacturer, model, price, overallPerformance, connectionType));
                        break;
                    case PeripheralType.Mouse:
                        computer.AddPeripheral(new Mouse(id, manufacturer, model, price, overallPerformance, connectionType));
                        break;
                }
                return String.Format(SuccessMessages.AddedPeripheral, peripheralType, id, computerId);
            }
        }
        public string BuyBest(decimal budget)
        {
            var computer = computers.Where(x => x.Price < budget).OrderByDescending(x => x.OverallPerformance).FirstOrDefault();
            if (computer == null)
            {
                throw new ArgumentException(string.Format(ExceptionMessages.CanNotBuyComputer, budget));
            }
            computers.Remove(computer);
            return computer.ToString();
        }

        public string BuyComputer(int id)
        {
            ValidateId(id);
            var computer = computers.FirstOrDefault(x => x.Id == id);
            computers.Remove(computer);
            return computer.ToString();
        }

        public string GetComputerData(int id)
        {
            ValidateId(id);
            var computer = computers.FirstOrDefault(x => x.Id == id);
            Console.WriteLine(computer.ToString());
            return computer.ToString();
        }

        public string RemoveComponent(string componentType, int computerId)
        {
            ValidateId(computerId);
            var computer = computers.First(x => x.Id == computerId);
            var component = computer.RemoveComponent(componentType);
            return string.Format(SuccessMessages.RemovedComponent, componentType, component.Id);
        }

        public string RemovePeripheral(string peripheralType, int computerId)
        {
            ValidateId(computerId);
            var computer = computers.First(x => x.Id == computerId);
            var peripheral = computer.RemovePeripheral(peripheralType);
            return string.Format(SuccessMessages.RemovedComponent, peripheralType, peripheral.Id);
        }
    }
}
