using NUnit.Framework;
using System;

namespace Tests
{
    public class ExtendedDatabaseTests
    {
        private ExtendedDatabase database;

        [SetUp]
        public void Setup()
        {
            database = new ExtendedDatabase();
        }
        [Test]
        public void Ctor_ThrowsArgumentException_WhenExceedingCapacity()
        {
            Person[] people = new Person[17];
            for (int i = 0; i < 17; i++)
            {
                people[i] = new Person(i, $"User{i}");
            }

            Assert.Throws<ArgumentException>(() => database = new ExtendedDatabase(people));
        }
        [Test]
        public void Ctor_ShouldIncreaseCount_WhenCreated()
        {
            int numberOfPeople = 10;
            Person[] people = new Person[numberOfPeople];
            for (int i = 0; i < numberOfPeople; i++)
            {
                people[i] = new Person(i, $"User{i}");
            }

            database = new ExtendedDatabase(people);

            Assert.AreEqual(people.Length, database.Count);

        }
        [Test]
        public void Add_ThorowsInvalidOperationException_WhenUserIdIsUsed()
        {
            long sameId = long.MaxValue;
            database.Add(new Person(sameId, "UserName"));

            var exception = Assert.Throws<InvalidOperationException>(() => database.Add(new Person(sameId, "DifferentUser")));
            Assert.AreEqual("There is already user with this Id!", exception.Message);
        }
        [Test]
        public void Add_ThorowsInvalidOperationException_WhenUserNameIsUsed()
        {
            string userName = "SameUser";
            database.Add(new Person(1, userName));

            var exception = Assert.Throws<InvalidOperationException>(() => database.Add(new Person(2, userName)));
            Assert.AreEqual("There is already user with this username!", exception.Message);
        }
        [Test]
        public void Add_ThorowsInvalidOperationException_WhenCapcityExceeded()
        {
            for (int i = 0; i < 16; i++)
            {
                database.Add(new Person(i, $"User{i}"));
            }

            var exception = Assert.Throws<InvalidOperationException>(() => database.Add(new Person(17, "InvalidUser")));
            Assert.AreEqual("Array's capacity must be exactly 16 integers!", exception.Message);
        }
        [Test]
        public void Add_ShouldIncreaseCount_WhenUserAddedSuccessfully()
        {
            int peopleAdded = 5;
            for (int i = 0; i < peopleAdded; i++)
            {
                database.Add(new Person(i, $"User{i}"));
            }
            Assert.AreEqual(peopleAdded, database.Count);
        }
        [Test]
        public void Remove_ThrowsInvalidOperationException_WhenCalledEmpty()
        {
            Assert.Throws<InvalidOperationException>(() => database.Remove());
        }
        [Test]
        public void Remove_ShouldDecreaseCount_WhenRemovedSuccessfully()
        {
            int peopleAdded = 5;
            for (int i = 0; i < peopleAdded; i++)
            {
                database.Add(new Person(i, $"User{i}"));
            }
            database.Remove();
            Assert.AreEqual(peopleAdded - 1, database.Count);
        }
        [Test]
        public void FindByUsername_ThrowsArgumentNullException_WhenUsernameIsNull()
        {
            int peopleAdded = 5;
            for (int i = 0; i < peopleAdded; i++)
            {
                database.Add(new Person(i, $"User{i}"));
            }
            Assert.Throws<ArgumentNullException>(() => database.FindByUsername(null));
        }
        [Test]
        public void FindByUsername_ThrowsArgumentNullException_WhenUsernameIsEmpty()
        {
            int peopleAdded = 5;
            for (int i = 0; i < peopleAdded; i++)
            {
                database.Add(new Person(i, $"User{i}"));
            }
            Assert.Throws<ArgumentNullException>(() => database.FindByUsername(""));
        }
        [Test]
        public void FindByUsername_ThrowsInvalidOperationException_WhenUserNameDoesNotExist()
        {
            int peopleAdded = 5;
            for (int i = 0; i < peopleAdded; i++)
            {
                database.Add(new Person(i, $"User{i}"));
            }
            Assert.Throws<InvalidOperationException>(() => database.FindByUsername("User6"));
        }
        [Test]
        public void FindByUsername_SouldReturnPerson_WhenPersonWithUsernameExists()
        {
            int peopleAdded = 5;
            for (int i = 0; i < peopleAdded; i++)
            {
                database.Add(new Person(i, $"User{i}"));
            }
            Person person = database.FindByUsername($"User{peopleAdded-1}");
            Assert.AreEqual($"User{peopleAdded-1}", person.UserName);
        }
        [Test]
        public void FindById_ArgumentOutOfRangeException_WhenIdIsNegative()
        {
            int peopleAdded = 5;
            for (int i = 0; i < peopleAdded; i++)
            {
                database.Add(new Person(i, $"User{i}"));
            }
            Assert.Throws<ArgumentOutOfRangeException>(() => database.FindById(-1));
        }

        [Test]
        public void FindById_ThrowsInvalidOperationException_WhenIdDoesNotExist()
        {
            int peopleAdded = 5;
            for (int i = 0; i < peopleAdded; i++)
            {
                database.Add(new Person(i, $"User{i}"));
            }
            Assert.Throws<InvalidOperationException>(() => database.FindById(peopleAdded+1));
        }
        [Test]
        public void FindById_SouldReturnPerson_WhenPersonWithIdExists()
        {
            int peopleAdded = 5;
            for (int i = 0; i < peopleAdded; i++)
            {
                database.Add(new Person(i, $"User{i}"));
            }
            Person person = database.FindById(peopleAdded-1);
            Assert.AreEqual(peopleAdded-1, person.Id);
        }
    }
}