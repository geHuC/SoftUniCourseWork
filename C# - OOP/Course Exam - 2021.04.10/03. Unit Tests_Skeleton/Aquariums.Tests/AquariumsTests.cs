using NUnit.Framework;
using System;

namespace Aquariums.Tests
{
    using System;

    public class AquariumsTests
    {
        private Aquarium sut;
        [SetUp]
        public void Setup()
        {
            sut = new Aquarium("Cup",10);
        }

        [Test]
        [TestCase(null)]
        [TestCase("")]
        public void Ctor_Init_throws(string name)
        {
            Assert.Throws<ArgumentNullException>(() => sut = new Aquarium(name, 10));
        }
        [Test]
        public void Ctor_Init_throws2()
        {
            Assert.Throws<ArgumentException>(() => sut = new Aquarium("Pesho", -10));
        }
        [Test]
        public void Ctor_Inits()
        {
            Assert.AreEqual("Cup", sut.Name);
            Assert.AreEqual(10, sut.Capacity);
            Assert.AreEqual(0, sut.Count);
        }
        [Test]
        public void Add_throws()
        {
            Fish fish = new Fish("Pesho");
            Fish fish2 = new Fish("Gosho");

            sut = new Aquarium("Kofa", 1);
            sut.Add(fish);
            Assert.Throws<InvalidOperationException>(() => sut.Add(fish2));

        }
        [Test]
        public void Add_adds()
        {
            Fish fish = new Fish("Pesho");
            Fish fish2 = new Fish("Gosho");
            sut.Add(fish);
            sut.Add(fish2);
            Assert.AreEqual(2, sut.Count);
        }
        [Test]
        public void Add_adds_correctly()
        {
            Fish fish = new Fish("Pesho");
            Fish fish2 = new Fish("Gosho");
            sut.Add(fish);
            sut.Add(fish2);
            Fish fish3 = sut.SellFish("Gosho");
            Assert.AreEqual(fish2, fish3);
        }
        [Test]
        public void Remove_Throws()
        {
            Fish fish = new Fish("Pesho");
            Fish fish2 = new Fish("Gosho");
            sut.Add(fish);
            sut.Add(fish2); Assert.Throws<InvalidOperationException>(() => sut.RemoveFish("Ivan"));
        }
        [Test]
        public void Remove_Removes()
        {
            Fish fish = new Fish("Pesho");
            Fish fish2 = new Fish("Gosho");
            sut.Add(fish);
            sut.Add(fish2); sut.RemoveFish("Gosho");
            Assert.AreEqual(1, sut.Count);
        }
        [Test]
        public void Sell_Throws()
        {
            Fish fish = new Fish("Pesho");
            Fish fish2 = new Fish("Gosho");
            sut.Add(fish);
            sut.Add(fish2); Assert.Throws<InvalidOperationException>(() => sut.SellFish("Ivan"));
        }
        [Test]
        public void Sell_returnsFalse()
        {
            Fish fish = new Fish("Pesho");
            Fish fish2 = new Fish("Gosho");
            sut.Add(fish);
            sut.Add(fish2);
            Fish fish3 = sut.SellFish("Gosho");
            Assert.AreEqual(false, fish3.Available);
        }
        [Test]
        public void Report_reports()
        {
            Fish fish = new Fish("Pesho");
            Fish fish2 = new Fish("Gosho");
            sut.Add(fish);
            sut.Add(fish2);
            string report = "Fish available at Cup: Pesho, Gosho";
            Assert.AreEqual(report, sut.Report());
        }
    }
}

