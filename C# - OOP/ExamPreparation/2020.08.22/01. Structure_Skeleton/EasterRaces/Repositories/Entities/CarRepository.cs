using EasterRaces.Models.Cars.Contracts;
using EasterRaces.Repositories.Contracts;
using EasterRaces.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EasterRaces.Repositories.Entities
{
    public class CarRepository : IRepository<ICar>
    {
        private readonly IDictionary<string, ICar> models;
        public CarRepository()
        {
            models = new Dictionary<string, ICar>();
        }
        public void Add(ICar model)
        {
            string name = model.Model;
            if (models.ContainsKey(name)) 
            {
                throw new ArgumentException(string.Format(ExceptionMessages.CarExists, name));
            }
            models.Add(name, model);
        }

        public IReadOnlyCollection<ICar> GetAll()
        {
            return models.Values.ToList();
        }

        public ICar GetByName(string name)
        {
            ICar car = null;
            if (models.ContainsKey(name))
            {
                car = models[name];
            }
            return car;
        }

        public bool Remove(ICar model)
        {
            return models.Remove(model.Model);               
        }
    }
}
