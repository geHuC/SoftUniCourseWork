namespace _09.ExplicitInterfaces
{
    public class Citizen : IPerson, IResident
    {
        public string Name { get; set; }

        public int Age { get; set; }

        public string Country { get; set; }
        public Citizen(string name, string country, int age)
        {
            Name = name;
            Country = country;
            Age = age;
        }
        string IPerson.GetName()
        {
            return Name;
        }
        string IResident.GetName()
        {
            return "Mr/Ms/Mrs " +Name;
        }
    }
}
