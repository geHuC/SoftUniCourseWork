using Bakery.Core.Contracts;
using Bakery.Models.BakedFoods;
using Bakery.Models.BakedFoods.Contracts;
using Bakery.Models.Drinks;
using Bakery.Models.Drinks.Contracts;
using Bakery.Models.Tables;
using Bakery.Models.Tables.Contracts;
using Bakery.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Bakery.Core
{
    public class Controller : IController
    {
        private List<IBakedFood> bakedFoods;
        private List<IDrink> drinks;
        private List<ITable> tables;
        private decimal totalIncome;
        public Controller()
        {
            bakedFoods = new List<IBakedFood>();
            drinks = new List<IDrink>();
            tables = new List<ITable>();
        }
        public string AddDrink(string type, string name, int portion, string brand)
        {
            IDrink drink = null;
            switch (type)
            {
                case nameof(Water):
                    drink = new Water(name, portion,brand);
                    break;
                case nameof(Tea):
                    drink = new Tea(name, portion, brand);
                    break;
            }
            if (drink != null)
            {
                drinks.Add(drink);
                return string.Format(OutputMessages.DrinkAdded, name, brand);
            }
            return "";
        }

        public string AddFood(string type, string name, decimal price)
        {
            IBakedFood food = null;
            switch (type)
            {
                case nameof(Bread):
                    food = new Bread(name, price);
                    break;
                case nameof(Cake):
                    food = new Cake(name, price);
                    break;
            }
            if (food != null)
            {
                bakedFoods.Add(food);
                return string.Format(OutputMessages.FoodAdded, name, type);
            }
            return "";
        }

        public string AddTable(string type, int tableNumber, int capacity)
        {
            ITable table = null;
            switch (type)
            {
                case nameof(OutsideTable):
                    table = new OutsideTable(tableNumber, capacity);
                    break;
                case nameof(InsideTable):
                    table = new InsideTable(tableNumber, capacity);
                    break;
            }
            if (table != null)
            {
                tables.Add(table);
                return string.Format(OutputMessages.TableAdded, tableNumber);
            }
            return "";
        }

        public string GetFreeTablesInfo()
        {
            StringBuilder sb = new StringBuilder();
            ITable[] emptyTables = tables.Where(x => x.IsReserved == false).ToArray();
            foreach (var item in emptyTables)
            {
                sb.AppendLine(item.GetFreeTableInfo());
            }
            return sb.ToString().TrimEnd();
        }

        public string GetTotalIncome()
        {
            return string.Format(OutputMessages.TotalIncome, totalIncome);
        }

        public string LeaveTable(int tableNumber)
        {
            ITable table = tables.FirstOrDefault(x => x.TableNumber == tableNumber);
            decimal bill = table.GetBill();
            totalIncome += bill;
            table.Clear();
            return $"Table: {tableNumber}" + Environment.NewLine + $"Bill: {bill:f2}";
        }

        public string OrderDrink(int tableNumber, string drinkName, string drinkBrand)
        {
            ITable table = tables.FirstOrDefault(x => x.TableNumber == tableNumber);
            if (table == null)
            {
                return string.Format(OutputMessages.WrongTableNumber, tableNumber);
            }
            IDrink drink = drinks.FirstOrDefault(x => x.Name == drinkName && x.Brand == drinkBrand);
            if (drink == null)
            {
                return string.Format(OutputMessages.NonExistentDrink, drinkName, drinkBrand);
            }
            table.OrderDrink(drink);
            return $"Table {tableNumber} ordered {drinkName} {drinkBrand}";
        }

        public string OrderFood(int tableNumber, string foodName)
        {
            ITable table = tables.FirstOrDefault(x => x.TableNumber == tableNumber);
            if (table == null)
            {
                return string.Format(OutputMessages.WrongTableNumber, tableNumber);
            }
            IBakedFood food = bakedFoods.FirstOrDefault(x => x.Name == foodName);
            if (food == null)
            {
                return string.Format(OutputMessages.NonExistentFood, foodName);
            }
            table.OrderFood(food);
            return string.Format(OutputMessages.FoodOrderSuccessful, tableNumber, foodName);
        }

        public string ReserveTable(int numberOfPeople)
        {
            ITable table = tables.Where(x => x.IsReserved == false).FirstOrDefault(x => x.Capacity >= numberOfPeople);
            if (table == null)
            {
                return string.Format(OutputMessages.ReservationNotPossible, numberOfPeople);
            }
            table.Reserve(numberOfPeople);
            return string.Format(OutputMessages.TableReserved, table.TableNumber, numberOfPeople);
        }
    }
}
