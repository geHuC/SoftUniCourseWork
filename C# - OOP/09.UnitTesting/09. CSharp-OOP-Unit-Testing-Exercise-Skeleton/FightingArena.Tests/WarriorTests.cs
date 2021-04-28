using NUnit.Framework;
using System;
namespace Tests
{
    public class WarriorTests
    {
        [Test]
        [TestCase("",10,100)]
        [TestCase(null,10,100)]
        [TestCase("Warrior",0,100)]
        [TestCase("Warrior",-10,100)]
        [TestCase("Warrior",10,-100)]
        public void Ctor_ThrowsArgumentException_WhenDataIsInvalid(string name, int damage, int hp)
        {
           Assert.Throws<ArgumentException>(()=> new Warrior(name, damage, hp));
        }
        [Test]
        [TestCase(15,50)]
        [TestCase(30,50)]
        [TestCase(50,15)]
        [TestCase(50,30)]
        public void Attack_ThrowsInvalidOperationException_WhenHpIsLessThanOrMinimum(int attackerHp, int defenderHp)
        {
            Warrior attacker = new Warrior("Attacker", 10, attackerHp);
            Warrior defender = new Warrior("Defender", 10, defenderHp);
            Assert.Throws<InvalidOperationException>(() => attacker.Attack(defender));
        }

        [Test]
        public void Attack_ThrowsInvalidOperationException_WhenOpponentIsTooStrong()
        {
            Warrior attacker = new Warrior("Attacker", 10, 50);
            Warrior defender = new Warrior("Defender", attacker.HP+1, 50);
            Assert.Throws<InvalidOperationException>(() => attacker.Attack(defender));
        }
        [Test]
        public void Attack_ShouldDecreaseAttackerHp()
        {
            int attakerHealtPoints = 100;
            int defenderDamegePoints = 30;

            Warrior attacker = new Warrior("Attacker", 10, attakerHealtPoints);
            Warrior defender = new Warrior("Defender", defenderDamegePoints, 50);
            attacker.Attack(defender);
            Assert.AreEqual(attakerHealtPoints - defenderDamegePoints, attacker.HP);
        }
        [Test]
        public void Attack_ShouldDecreaseDefendantHealt_WhenSuccesfullAttack()
        {
            int attackerDamage = 10;
            int defenderHealth = 50;

            Warrior attacker = new Warrior("Attacker", attackerDamage, 50);
            Warrior defender = new Warrior("Defender", 10, defenderHealth);
            attacker.Attack(defender);
            Assert.AreEqual(defenderHealth-attackerDamage, defender.HP);
        }
        [Test]
        public void Attack_ShouldZeroHealth_WhenDamageDeltHighherThanHP()
        {
            int attackerDamage = 60;
            int defenderHealth = 50;

            Warrior attacker = new Warrior("Attacker", attackerDamage, 50);
            Warrior defender = new Warrior("Defender", 10, defenderHealth);
            attacker.Attack(defender);
            Assert.AreEqual(0, defender.HP);
        }
    }
}