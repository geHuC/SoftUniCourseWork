
using _05.BirthdayCelebrations.Interfaces;

namespace _05.BirthdayCelebrations

{
    public class Pet: INamable, IBirthable
    {
        public Pet(string name, string birthday)
        {
            Name = name;
            Birthday = birthday;
        }
        public string Name { get; private set; }
        public string Birthday { get; private set; }
    }
}
