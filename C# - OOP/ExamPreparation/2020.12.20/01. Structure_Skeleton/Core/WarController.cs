using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WarCroft.Constants;
using WarCroft.Entities.Characters;
using WarCroft.Entities.Characters.Contracts;
using WarCroft.Entities.Items;

namespace WarCroft.Core
{
	public class WarController
	{
		private List<Character> party;
		private Stack<Item> pool;
		public WarController()
		{
			party = new List<Character>();
			pool = new Stack<Item>();
		}

		public string JoinParty(string[] args)
		{
			string characterType = args[0];
			string name	 = args[1];
			Character hero;
            switch (characterType)
            {
				case nameof(Warrior):
					hero = new Warrior(name);
                    break;
				case nameof(Priest):
					hero = new Priest(name);
					break;
				default: throw new ArgumentException(string.Format(ExceptionMessages.InvalidCharacterType, characterType));
			}
			party.Add(hero);
			return string.Format(SuccessMessages.JoinParty, name);
        }

		public string AddItemToPool(string[] args)
		{
			string name = args[0];
			Item item;
			switch (name)
			{
				case nameof(HealthPotion):
					item = new HealthPotion();
					break;
				case nameof(FirePotion):
					item = new FirePotion();
					break;
				default: throw new ArgumentException(string.Format(ExceptionMessages.InvalidItem, name));
			}
			pool.Push(item);
			return string.Format(SuccessMessages.AddItemToPool,name);
		}

		public string PickUpItem(string[] args)
		{

			string name = args[0];
			Character hero = party.FirstOrDefault(x => x.Name == name);
            if (hero == null)
            {
				throw new ArgumentException(string.Format(ExceptionMessages.CharacterNotInParty, name));
            }
            if (pool.Count == 0)
            {
				throw new InvalidOperationException(ExceptionMessages.ItemPoolEmpty);
            }
			Item item = pool.Pop();
			string itemName = item.GetType().Name;
			hero.Bag.AddItem(item);
			return string.Format(SuccessMessages.PickUpItem,name, itemName);
		}

		public string UseItem(string[] args)
		{
			string name = args[0];
			string itemName = args[1];
			Character hero = party.FirstOrDefault(x => x.Name == name);
			if (hero == null)
			{
				throw new ArgumentException(string.Format(ExceptionMessages.CharacterNotInParty, name));
			}
			hero.UseItem(hero.Bag.GetItem(itemName));
			return string.Format(SuccessMessages.UsedItem, name, itemName);
		}

		public string GetStats()
		{
			StringBuilder sb = new StringBuilder();
			Character[] heroes = party.OrderByDescending(x => x.IsAlive).ThenByDescending(x => x.Health).ToArray();
            foreach (var x in heroes)
            {
				string status = "Dead";
                if (x.IsAlive)
                {
					status = "Alive";
                }
				sb.AppendLine(string.Format(SuccessMessages.CharacterStats, x.Name, x.Health, x.BaseHealth, x.Armor, x.BaseArmor, status));
            }
			return sb.ToString().Trim();
		}

		public string Attack(string[] args)
		{
			string attackerName = args[0];
			string defenderName = args[1];
			Character attacker = party.FirstOrDefault(x => x.Name == attackerName);
			Character defender = party.FirstOrDefault(x => x.Name == defenderName);
			if (attacker == null )
			{
				throw new ArgumentException(string.Format(ExceptionMessages.CharacterNotInParty, attackerName));
			}
			if (defender == null)
			{
				throw new ArgumentException(string.Format(ExceptionMessages.CharacterNotInParty, defenderName));
			}
            if (attacker.GetType().Name != nameof(Warrior))
            {
				throw new ArgumentException(string.Format(ExceptionMessages.AttackFail, attackerName));
            }
			Warrior att = (Warrior)attacker;
			att.Attack(defender);
			StringBuilder sb = new StringBuilder();
			sb.AppendLine(string.Format(SuccessMessages.AttackCharacter, attackerName, defenderName, att.AbilityPoints, defenderName, defender.Health, defender.BaseHealth, defender.Armor, defender.BaseArmor));
            if (!defender.IsAlive)
            {
				sb.AppendLine(string.Format(SuccessMessages.AttackKillsCharacter, defender.Name));
            }
			return sb.ToString().Trim();
		}

		public string Heal(string[] args)
		{
			string attackerName = args[0];
			string defenderName = args[1];
			Character attacker = party.FirstOrDefault(x => x.Name == attackerName);
			Character defender = party.FirstOrDefault(x => x.Name == defenderName);
			if (attacker == null)
			{
				throw new ArgumentException(string.Format(ExceptionMessages.CharacterNotInParty, attackerName));
			}
			if (defender == null)
			{
				throw new ArgumentException(string.Format(ExceptionMessages.CharacterNotInParty, defenderName));
			}
			if (attacker.GetType().Name != nameof(Priest))
			{
				throw new ArgumentException(string.Format(ExceptionMessages.HealerCannotHeal, attackerName));
			}
			Priest priest = (Priest)attacker;
			priest.Heal(defender);
			return string.Format(SuccessMessages.HealCharacter, attackerName, defenderName, priest.AbilityPoints, defenderName, defender.Health);
		}
	}
}
