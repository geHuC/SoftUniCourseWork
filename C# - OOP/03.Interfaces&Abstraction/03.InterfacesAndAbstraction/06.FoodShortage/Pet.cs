
using _06.FoodShortage.Interfaces;

namespace _06.FoodShortage

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
