using _07.MilitaryElite.Interfaces;

namespace _07.MilitaryElite.Soldiers
{
    public abstract class Soldier : ISoldier
    {
        public Soldier(string id, string firstName, string lastName)
        {
            ID = id;
            FirstName = firstName;
            LastName = lastName;

        }
        public string ID { get; private set; }
        public string  FirstName { get; private set; }
        public string  LastName { get; private set; }

        public override string ToString()
        {
            return $"Name: {FirstName} {LastName} Id: {ID}";
        }
    }
}
