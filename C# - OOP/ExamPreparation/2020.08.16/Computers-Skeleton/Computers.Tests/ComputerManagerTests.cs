using NUnit.Framework;
using System;
using System.Linq;

namespace Computers.Tests
{
    public class Tests
    {
        private ComputerManager computers;
        [SetUp]
        public void Setup()
        {
            computers = new ComputerManager();
        }

        [Test]
        public void CtorInit()
        {
            Assert.That(computers.Computers, Is.Not.Null);
        }
        [Test]
        public void Add_ThrowsArgumentNullException()
        {
            Assert.Throws<ArgumentNullException>(() => computers.AddComputer(null));
        }
        [Test]
        public void Add_ThrowsArgumentException()
        {
            var comp1 = new Computer("M", "model", 1);
            var comp2 = new Computer("M", "model", 2);
            computers.AddComputer(comp1);
            Assert.Throws<ArgumentException>(() => computers.AddComputer(comp2));
        }
        [Test]
        public void AddComputer_Adds()
        {
            var comp1 = new Computer("M", "model", 1);
            computers.AddComputer(comp1);
            Assert.AreEqual(1, computers.Computers.Count);
        }
        [Test]
        public void Count_counts()
        {
            var comp1 = new Computer("M", "model", 1);
            computers.AddComputer(comp1);
            Assert.AreEqual(1, computers.Count);
        }

        [Test]
        public void AddComputer_AddsCorrectly()
        {
            var comp1 = new Computer("M", "model", 1);
            computers.AddComputer(comp1);
            var comp2 = computers.Computers.FirstOrDefault(x => x.Manufacturer == "M" && x.Model == "model");
            Assert.AreEqual(comp1.Model, comp2.Model);
            Assert.AreEqual(comp1.Manufacturer, comp2.Manufacturer);
        }
        [Test]
        [TestCase(null, "model", 1)]
        [TestCase("M", null, 1)]
        public void RemoveComputer_Throws(string manufacturer, string model, decimal price)
        {
            var comp1 = new Computer("M", "model", 1);
            var comp2 = new Computer("M2", "model2", 2);
            computers.AddComputer(comp1);
            computers.AddComputer(comp2);
            Assert.Throws<ArgumentNullException>(() => computers.RemoveComputer(manufacturer, model));
        }
        [Test]
        [TestCase(null, "model", 1)]
        [TestCase("M", null, 1)]
        public void GetComputer_Throws(string manufacturer, string model, decimal price)
        {
            var comp1 = new Computer("M", "model", 1);
            var comp2 = new Computer("M2", "model2", 2);
            computers.AddComputer(comp1);
            computers.AddComputer(comp2);
            Assert.Throws<ArgumentNullException>(() => computers.GetComputer(manufacturer, model));
        }
        [Test]
        public void RemoveComputer_Throwsnotfoud()
        {
            Assert.Throws<ArgumentException>(() => computers.RemoveComputer("m", "model"));
        }[Test]
        public void GetComputer_Throwsnotfoud()
        {
            Assert.Throws<ArgumentException>(() => computers.GetComputer("m", "model"));
        }
        [Test]
        public void RemoveComputer_Removes()
        {
            var comp1 = new Computer("M", "model", 1);
            var comp2 = new Computer("M2", "model2", 2);
            computers.AddComputer(comp1);
            computers.AddComputer(comp2);
            computers.RemoveComputer("M", "model");
            Assert.AreEqual(1, computers.Computers.Count);
        }
        [Test]
        public void RemoveComputer_Returns()
        {
            var comp1 = new Computer("M", "model", 1);
            var comp2 = new Computer("M2", "model2", 2);
            computers.AddComputer(comp1);
            computers.AddComputer(comp2);
            var comp3 = computers.RemoveComputer("M", "model");
            Assert.AreEqual("M", comp3.Manufacturer);
            Assert.AreEqual("model", comp3.Model);
        }
        [Test]
        public void GetComputer_gets()
        {
            var comp1 = new Computer("M", "model", 1);
            var comp2 = new Computer("M2", "model2", 2);
            computers.AddComputer(comp1);
            computers.AddComputer(comp2);
            var comp3 = computers.GetComputer("M", "model");
            Assert.AreEqual(comp1.Manufacturer, comp3.Manufacturer);
            Assert.AreEqual(comp1.Model, comp3.Model);
            Assert.AreEqual(2, computers.Computers.Count);
        }
        [Test]
        public void GetComputersByManufacturer_Throws()
        {
            Assert.Throws<ArgumentNullException>(() => computers.GetComputersByManufacturer(null));
        }
        [Test]
        public void GetComputersByManufacturer_Returns()
        {
            computers.AddComputer(new Computer("Manufacturer", "Model1", 5));
            computers.AddComputer(new Computer("Manufacturer", "Model2", 5));
            computers.AddComputer(new Computer("Manufacturer", "Model3", 5));
            computers.AddComputer(new Computer("Manufacturer2", "Model4", 5));
            computers.AddComputer(new Computer("Manufacturer2", "Model5", 5));
            Assert.AreEqual(3, computers.GetComputersByManufacturer("Manufacturer").Count);
        }
    }
}
