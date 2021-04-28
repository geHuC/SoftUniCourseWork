using System;

using WarCroft.Constants;
using WarCroft.Entities.Inventory;
using WarCroft.Entities.Items;

namespace WarCroft.Entities.Characters.Contracts
{
    public abstract class Character
    {
        // TODO: Implement the rest of the class.
        private string name;
        private double health;
        private double armor;
        public Character(string name, double health, double armor, double abilityPoints, Bag bag)
        {
            Name = name;
            Bag = bag;
            BaseHealth = health;
            Health = health;
            BaseArmor = armor;
            Armor = armor;
            AbilityPoints = abilityPoints;
        }
        public bool IsAlive { get; set; } = true;
        public double BaseHealth { get; private set; }
        public double Health
        {
            get => health; private set
            {
                if (value <= 0)
                {
                    health = 0;
                    IsAlive = false;
                    return;
                }
                if (value > BaseHealth)
                {
                    health = BaseHealth;
                    return;
                }
                health = value;
            }
        }
        public double BaseArmor { get; private set; }
        public double Armor
        {
            get => armor; private set
            {
                if (value < 0)
                {
                    armor = 0;
                    return;
                }
                if (value > BaseArmor)
                {
                    armor = BaseArmor;
                    return;
                }
                armor = value;
            }
        }

        public double AbilityPoints { get; private set; }
        public Bag Bag { get; private set; }
        public string Name
        {
            get => name; 
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException(ExceptionMessages.CharacterNameInvalid);
                }
                name = value;
            }
        }
        public void UseItem(Item item)
        {
            EnsureAlive();
            switch (item.GetType().Name)
            {
                case nameof(FirePotion):
                    Health -= 20;
                    break;
                case nameof(HealthPotion):
                    Health += 20;
                    break;
            }
        }
        public void TakeDamage(double hitPoints)
        {
            EnsureAlive();
            if (Armor - hitPoints < 0)
            {
                if (Health - (hitPoints - Armor) < 0)
                {
                    Armor = 0;
                    Health = 0;
                    IsAlive = false;
                    return;
                }
               
                Health -= (hitPoints - Armor);
                if (Health == 0)
                {
                    IsAlive = false;
                }
                Armor = 0;
                return;
            }
            Armor -= hitPoints;
        }
        protected void EnsureAlive()
        {
            if (!this.IsAlive)
            {
                throw new InvalidOperationException(ExceptionMessages.AffectedCharacterDead);
            }

        }
    }
}