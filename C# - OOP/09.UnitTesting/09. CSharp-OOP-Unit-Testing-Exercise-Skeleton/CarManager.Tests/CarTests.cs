using NUnit.Framework;
using System;

namespace Tests
{
    public class CarTests
    {
        private const string Make = "Make";
        private const string Model = "Model";
        private const double FuelConsumption = 10;
        private const double FuelCapacity = 100;
        private Car car;
        [SetUp]
        public void Setup()
        {
            car = new Car(Make, Model, FuelConsumption, FuelCapacity);
        }

        [Test]
        [TestCase("", "", 10, 100)]
        [TestCase(null, "Model", 10, 100)]
        [TestCase("Make", "", 10, 100)]
        [TestCase("Make", null, 10, 100)]
        [TestCase("Make", "Model", -10, 100)]
        [TestCase("Make", "Model", 0, 100)]
        [TestCase("Make", "Model", 10, -100)]
        [TestCase("Make", "Model", 10, 0)]
        public void Ctor_ThrowsArgumentException_WhenInvalidArgumentsPassed(string make, string model, double fuelConsumption, double fuelCapacity)
        {
            Assert.Throws<ArgumentException>(() => new Car(make, model, fuelConsumption, fuelCapacity));
        }
        [Test]
        public void Ctor_ShoudInitializeFuelAmountOfZero()
        {
            car = new Car("Make","Model",10,100);
            Assert.AreEqual(0, car.FuelAmount);
        }
        [Test]
        [TestCase(0)]
        [TestCase(-1)]
        public void Refuel_ThrowsArgumentException_WhenRefuelAmoutIsZeroOrNegative(double amount)
        {
            Assert.Throws<ArgumentException>(() => car.Refuel(amount));
        }
        [Test]
        public void Refuel_ShouldIncreaseFuelAmount_WhenFuelAdded()
        {
            double fuelToAdd = FuelCapacity / 2;
            car.Refuel(fuelToAdd);
            Assert.AreEqual(fuelToAdd, car.FuelAmount);
        }
        [Test]
        public void Refuel_ShouldFuelToCapacity_WhenAmountExceedsCapacity()
        {
            double fuelToAdd = FuelCapacity * 2;
            car.Refuel(fuelToAdd);
            Assert.AreEqual(FuelCapacity, car.FuelAmount);
        }
        [Test]
        public void Drive_ThrowsInvalidOperationException_WhenNotEnoughFuel()
        {
            double distance = 1000000;
            Assert.Throws<InvalidOperationException>(() => car.Drive(distance));
        }
        [Test]
        public void Drive_ShouldDecreaseFuelAmount_WhenCarIsDriven()
        {
            double distance = 100;
            car.Refuel(FuelCapacity);
            car.Drive(distance);
            Assert.AreEqual(FuelCapacity - FuelConsumption, car.FuelAmount);
        }
    }
}