using NUnit.Framework;
using System;
using TheRace;

namespace TheRace.Tests
{
    public class RaceEntryTests
    {
        private const string ExistingDriver = "Driver {0} is already added.";
        private const string DriverInvalid = "Driver cannot be null.";
        private const string DriverAdded = "Driver {0} added in race.";
        private const int MinParticipants = 2;
        private const string RaceInvalid = "The race cannot start with less than {0} participants.";
        private RaceEntry sut;
        [SetUp]
        public void Setup()
        {
            sut = new RaceEntry();
        }

        [Test]
        public void Counter_increase()
        {
            UnitCar car = new UnitCar("Mazda", 500, 2000);
            UnitDriver driver = new UnitDriver("Ivan", car);
            sut.AddDriver(driver);
            Assert.AreEqual(1, sut.Counter);
        }
        [Test]
        public void Ctor_init()
        {
            Assert.That(sut.Counter, Is.Not.Null);
        }
        [Test]
        public void AddDriver_ThrowsNullDriver()
        {
            var ex = Assert.Throws<InvalidOperationException>(() => sut.AddDriver(null));
            Assert.AreEqual(DriverInvalid, ex.Message);
        }
        [Test]
        public void AddDriver_ThrowsSamedriver()
        {
            UnitCar car = new UnitCar("Mazda", 500, 2000);
            UnitDriver driver = new UnitDriver("Ivan", car);
            sut.AddDriver(driver);
            var ex = Assert.Throws<InvalidOperationException>(() => sut.AddDriver(driver));
            Assert.AreEqual(string.Format(ExistingDriver, driver.Name), ex.Message);
        }
        [Test]
        public void AddDriver_returns()
        {
            UnitCar car = new UnitCar("Mazda", 500, 2000);
            UnitDriver driver = new UnitDriver("Ivan", car);
           Assert.AreEqual(string.Format(DriverAdded, driver.Name),sut.AddDriver(driver));
        }
        [Test]
        public void Calculate_Throws()
        {
            Assert.Throws<InvalidOperationException>(() => sut.CalculateAverageHorsePower());
        }
        [Test]
        public void Calclulate_calculates()
        {
            UnitCar car = new UnitCar("Mazda", 500, 2000);
            UnitDriver driver = new UnitDriver("Ivan", car);
            UnitDriver driver2 = new UnitDriver("Ivan2", car);
            UnitDriver driver3 = new UnitDriver("Ivan3", car);
            sut.AddDriver(driver);
            sut.AddDriver(driver2);
            sut.AddDriver(driver3);
            Assert.AreEqual(car.HorsePower, sut.CalculateAverageHorsePower());
        }
    }
}