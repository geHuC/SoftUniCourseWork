using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Tests
{
    public class ArenaTests
    {
        private Warrior warrior;
        private Arena arena;
        [SetUp]
        public void Setup()
        {
            arena = new Arena();
            warrior = new Warrior("Warrior", 10, 50);
        }

        [Test]
        public void Ctor_ShouldInitializeWarriorCollen_WhenCreated()
        {
           Assert.AreNotEqual(arena.Warriors, null);
        }
        [Test]
        public void Count_IsZero_WhenArenaIsEmpty()
        {
            Assert.AreEqual(0, arena.Count);
        }
        [Test]
        public void Enroll_AddsWarriorToCollection()
        {
            int warriorCount = 5;
            for (int i = 0; i < warriorCount; i++)
            {
                arena.Enroll(new Warrior($"Warrior{i}", 10, 100));
            }
            Assert.AreEqual(warriorCount, arena.Count);
        }
        [Test]
        public void Enroll_ThrowsInvalidOperationException_WhenWarriorWithSameNameAdded()
        {
            arena.Enroll(new Warrior("Warrior",10,100));
            Assert.Throws<InvalidOperationException>(() => arena.Enroll(new Warrior("Warrior", 10, 100)));
        }
        [Test]
        public void Enroll_ShouldAddWarriorToWarriors()
        {
            string name = "Warrior";
            arena.Enroll(new Warrior(name, 10,100));
            Assert.That(arena.Warriors.Any(w => w.Name == name), Is.True);
        }
        [Test]
        [TestCase("Ivan","Petar")]
        [TestCase("Ivan","Defender")]
        [TestCase("Attacker","Ivan")]
        public void Fight_ThorwsInvalidOperationException_IfWarriorDoesNotExists(string attackerName, string defenderName)
        {
            arena.Enroll(new Warrior("Attacker", 10, 100));
            arena.Enroll(new Warrior("Defender", 10, 100));
            Assert.Throws<InvalidOperationException>(() => arena.Fight(attackerName, defenderName));
        }
        [Test]
        public void Fight_BothWarriorsLooseHealtPointsInFisht()
        {
            int initialHelathPoints = 100;
            Warrior attacker = new Warrior("Attacker", 10, initialHelathPoints);
            Warrior defender = new Warrior("Defender", 10, initialHelathPoints);
            arena.Enroll(attacker);
            arena.Enroll(defender);
            arena.Fight(attacker.Name, defender.Name);
            Assert.AreEqual(initialHelathPoints - defender.Damage, attacker.HP);
            Assert.AreEqual(initialHelathPoints - attacker.Damage, defender.HP);
        }
    }
}
