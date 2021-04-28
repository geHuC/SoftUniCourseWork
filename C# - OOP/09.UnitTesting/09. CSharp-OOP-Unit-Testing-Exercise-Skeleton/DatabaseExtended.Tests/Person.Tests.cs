using NUnit.Framework;

namespace Tests
{
    public class PersonTests
    {
        private long id = long.MaxValue;
        private string userName = "UserName";
        private Person person;
        [SetUp]
        public void Setup()
        {
            person = new Person(id, userName);
        }
        [Test]
        public void Ctor_ShouldAddName_WhenCalled()
        {
            Assert.AreEqual(userName, person.UserName);
        }
        [Test]
        public  void Ctor_ShouldAddId_WhenCalled()
        {
            Assert.AreEqual(id, person.Id);
        }
    }
}
