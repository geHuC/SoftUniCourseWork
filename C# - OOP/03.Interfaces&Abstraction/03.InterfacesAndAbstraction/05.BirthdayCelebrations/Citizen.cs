using _05.BirthdayCelebrations.Interfaces;

namespace _05.BirthdayCelebrations
{
   public  class Citizen:IIDAble, IBirthable, INamable
    {
        public Citizen(string name, int age, string id, string birthday)
        {
            Name = name;
            Age = age;
            ID = id;
            Birthday = birthday;
        }
        public string Name { get; private set; }
        public int Age { get; private set; }
        public string ID { get; private set; }
        public string Birthday { get; private set; }
    }
}
