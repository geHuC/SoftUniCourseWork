using _06.FoodShortage.Interfaces;

namespace _06.FoodShortage
{
   public  class Citizen:IIDAble, IBirthable, INamable, IBuyer
    {
        public Citizen(string name, int age, string id, string birthday)
        {
            Name = name;
            Age = age;
            ID = id;
            Birthday = birthday;
            Food = 0;
        }
        public void BuyFood()
        {
            Food += 10;
        }
        public string Name { get; private set; }
        public int Age { get; private set; }
        public string ID { get; private set; }
        public string Birthday { get; private set; }
        public int Food { get; private set; }
    }
}
