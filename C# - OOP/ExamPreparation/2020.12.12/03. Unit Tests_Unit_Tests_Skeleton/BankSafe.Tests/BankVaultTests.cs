using NUnit.Framework;
using System;

namespace BankSafe.Tests
{
    public class BankVaultTests
    {
        private BankVault sut;
        [SetUp]
        public void Setup()
        {
            sut = new BankVault();
        }

        [Test]
        public void Ctor_Intis()
        {
            Assert.That(sut.VaultCells, Is.Not.Null);
        }
        [Test]
        public void Ctor_fillsCorrecty()
        {
            Assert.That(sut.VaultCells.ContainsKey("A1"));
        }
        [Test]
        public void AddItem_throws()
        {
            var ex =Assert.Throws<ArgumentException>(() => sut.AddItem("C5", null));
            Assert.AreEqual("Cell doesn't exists!", ex.Message);
        }
        [Test]
        public void AddItem_throws2()
        {
            Item item = new Item("Ivan", "ID");
            sut.AddItem("A1",item);
            var ex = Assert.Throws<ArgumentException>(() => sut.AddItem("A1", null));
            Assert.AreEqual("Cell is already taken!", ex.Message);
        }
        [Test]
        public void AddItem_throws3()
        {
            Item item = new Item("Ivan", "ID");
            sut.AddItem("A1", item);
            var ex = Assert.Throws<InvalidOperationException>(() => sut.AddItem("A2", item));
            Assert.AreEqual("Item is already in cell!", ex.Message);
        }
        [Test]
        public void AddItem_Adds()
        {
            Item item = new Item("Ivan", "ID");
            sut.AddItem("A1", item);
            Assert.AreEqual(sut.VaultCells["A1"], item);
        }
        [Test]
        public void AddItem_Returns()
        {
            Item item = new Item("Ivan", "ID");
            string message = sut.AddItem("A1", item);
            Assert.AreEqual($"Item:{item.ItemId} saved successfully!", message);
        }
        [Test]
        public void RemoveItem_Throws()
        {
            var ex = Assert.Throws<ArgumentException>(() => sut.RemoveItem("C5", null));
            Assert.AreEqual("Cell doesn't exists!", ex.Message);
        }
        [Test]
        public void RemoveItem_Throws2()
        {
            Item item = new Item("Ivan", "ID");
            Item item2 = new Item("Ivan2", "ID2");
            sut.AddItem("A1", item);
            var ex = Assert.Throws<ArgumentException>(() => sut.RemoveItem("A1", item2));
            Assert.AreEqual($"Item in that cell doesn't exists!", ex.Message);
        }
        [Test]
        public void RemoveItem_Removes()
        {
            Item item = new Item("Ivan", "ID");
            sut.AddItem("A1", item);
            sut.RemoveItem("A1", item);
            Assert.AreEqual(sut.VaultCells["A1"], null);
        }
        [Test]
        public void RemoveItem_Returns()
        {
            Item item = new Item("Ivan", "ID");
            sut.AddItem("A1", item);
            var message = sut.RemoveItem("A1", item);
            Assert.AreEqual($"Remove item:{item.ItemId} successfully!", message);
        }
    }
}