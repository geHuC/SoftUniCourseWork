using System;
using System.Collections.Generic;
using System.Linq;

namespace DefiningClasses
{
    public class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Trainer> trainers = new Dictionary<string, Trainer>();
            string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            while (input[0] != "Tournament")
            {
                string trainerName = input[0];
                string pokemonName = input[1];
                string pokemonElement = input[2];
                int pokemonHealth = int.Parse(input[3]);
                Pokemon pokemon = new Pokemon(pokemonName, pokemonElement, pokemonHealth);
                if (!trainers.ContainsKey(trainerName))
                {
                    trainers.Add(trainerName, new Trainer(trainerName));
                }
                trainers[trainerName].Pokemons.Add(pokemon);
                input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            }
            string element = Console.ReadLine();
            while (element != "End")
            {
                foreach (var trainer in trainers.Keys)
                {
                    trainers[trainer].Hit(element);
                }
                element = Console.ReadLine();
            }
            var sorted = trainers.OrderByDescending(x => x.Value.NumberOfBadges).ToDictionary(x => x.Key, x => x.Value);
            foreach (var trainer in sorted.Keys)
            {
                Console.WriteLine(sorted[trainer].Print());
            }
        }
    }
}
