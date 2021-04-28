using NUnit.Framework;
using System;
using System.Linq;

namespace Tests
{
    public class DatabaseTests
    {
        private Database database;
        [SetUp]
        public void Setup()
        {
            database = new Database();
        }

        [Test]
        public void Add_ShouldIncreaseCount_WhenElementIsSuccesfullyAdded()
        {
            int n = 10;
            for (int i = 0; i < n; i++)
            {
                database.Add(i);
            }
            Assert.AreEqual(n, database.Count);
        }
        [Test]
        public void Add_ThrowsInvalidOperationExeption_WhenCapacityExceeded()
        {
            int n = 16;
            for (int i = 0; i < n; i++)
            {
                database.Add(i);
            }
            Assert.Throws<InvalidOperationException>(() => { database.Add(1); });
        }
        [Test]
        public void Add_ShouldAddElementToCollection()
        {
            int element = 5;

            database.Add(element);
            Assert.That(database.Fetch().Contains(element));
        }
        [Test]
        public void Remove_ThrowsInvalidOperationExecption_WhenDatabaseIsEmpty()
        {
            Assert.Throws<InvalidOperationException>(() => database.Remove());
        }
        [Test]
        public void Remove_ShouldDecreaseCount_WhenElementIsSuccesfullyRemoved()
        {
            int n = 5;
            for (int i = 0; i < n; i++)
            {
                database.Add(i);
            }
            database.Remove();
            Assert.AreEqual(n - 1, database.Count);
        }
        [Test]
        public void Remove_ShouldRemoveElementFromDatabase()
        {
            int n = 5;
            for (int i = 0; i < n; i++)
            {
                database.Add(i);
            }
            database.Remove();
            Assert.IsFalse(database.Fetch().Contains(n - 1));
        }
        [Test]
        public void Fetch_ReturnsDatabaseCopyInsteadOfReference()
        {
            int n = 5;
            for (int i = 0; i < n; i++)
            {
                database.Add(i);
            }
            int[] fistCopy = database.Fetch();
            database.Remove();
            int[] secondCopy = database.Fetch();
            Assert.AreNotEqual(fistCopy, secondCopy);
        }
        [Test]
        public void Count_ShouldReturnZero_WhenDataBaseIsEmpty()
        {
            Assert.AreEqual(0, database.Count);
        }
        [Test]
        public void Ctor_ShouldIncreaseCount_WhenUsingParamsCreation()
        {
            int[] data = new int[] { 1, 2, 3, 4, 5 };
            database = new Database(data);
            Assert.AreEqual(data.Length, database.Count);
        }
        [Test]
        public void Ctor_ThrowsException_WhenDatabaseCapacityExceeded()
        {
            int[] data = new int[17];
            Assert.Throws<InvalidOperationException>(() => database = new Database(data));
        }
        [Test]
        public void Ctor_AddsElementsToDatabase()
        {
            int[] data = new int[] { 1, 2, 3, 4, 5 };
            database = new Database(data);
            Assert.That(data, Is.EquivalentTo(database.Fetch()));
        }
    }
}