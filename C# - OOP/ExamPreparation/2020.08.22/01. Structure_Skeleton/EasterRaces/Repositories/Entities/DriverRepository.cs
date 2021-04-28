using EasterRaces.Models.Drivers.Contracts;
using EasterRaces.Repositories.Contracts;
using EasterRaces.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EasterRaces.Repositories.Entities
{
    public class DriverRepository : IRepository<IDriver>
    {
        private readonly IDictionary<string, IDriver> models;
        public DriverRepository()
        {
            models = new Dictionary<string, IDriver>();
        }
        public void Add(IDriver model)
        {
            string name = model.Name;
            if (models.ContainsKey(name))
            {
                throw new ArgumentException(string.Format(ExceptionMessages.DriversExists, name));
            }
            models.Add(name, model);
        }

        public IReadOnlyCollection<IDriver> GetAll()
        {
            return models.Values.ToList().AsReadOnly();
        }

        public IDriver GetByName(string name)
        {
            IDriver driver = null;
            if (models.ContainsKey(name))
            {
                driver = models[name];
            }
            return driver;
        }

        public bool Remove(IDriver model)
        {
            return models.Remove(model.Name);
        }
    }
}
