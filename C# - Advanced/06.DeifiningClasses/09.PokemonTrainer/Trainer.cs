using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DefiningClasses
{
    public class Trainer
    {
        public string Name { get; set; }
        public int NumberOfBadges { get; set; } = 0;
        public List<Pokemon> Pokemons { get; set; }

        public Trainer(string name)
        {
            Name = name;
            Pokemons = new List<Pokemon>();
        }
        public void Hit(string element)
        {
            if (Pokemons.Any( p => p.Type == element))
            {
                NumberOfBadges++;
            }
            else
            {
                foreach (var pokemon in Pokemons)
                {
                    pokemon.Health -= 10;
                }
            }
            RemoveDeadPokemon();
        }
        private void RemoveDeadPokemon()
        {
            List<Pokemon> tempList = new List<Pokemon>();
            foreach (var pokemon in Pokemons)
            {
                if (pokemon.Health > 0)
                {
                    tempList.Add(pokemon);
                }
            }
            Pokemons = tempList;
        }
        public string Print()
        {
            string toPrint = $"{Name} {NumberOfBadges} {Pokemons.Count}";
            return toPrint;
        }
    }
}
