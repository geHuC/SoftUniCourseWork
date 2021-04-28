using EasterRaces.Models.Races.Contracts;
using EasterRaces.Repositories.Contracts;
using EasterRaces.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EasterRaces.Repositories.Entities
{
    public class RaceRepository : IRepository<IRace>
    {

        private readonly IDictionary<string, IRace> models;
        public RaceRepository()
        {
            models = new Dictionary<string, IRace>();
        }
        public void Add(IRace model)
        {
            string name = model.Name;
            if (models.ContainsKey(name))
            {
                throw new InvalidOperationException(string.Format(ExceptionMessages.RaceExists, name));
            }
            models.Add(name, model);
        }

        public IReadOnlyCollection<IRace> GetAll()
        {
            return models.Values.ToList().AsReadOnly();
        }

        public IRace GetByName(string name)
        {
            IRace race = null;
            if (models.ContainsKey(name))
            {
                race = models[name];
            }
            return race;
        }

        public bool Remove(IRace model)
        {
            return models.Remove(model.Name);
        }
    }
}
