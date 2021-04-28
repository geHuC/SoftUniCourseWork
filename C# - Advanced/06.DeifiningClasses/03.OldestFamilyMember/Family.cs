using System;
using System.Collections.Generic;
using System.Text;

namespace DefiningClasses
{
    public class Family
    {
        private List<Person> people = new List<Person>();
        
        public void AddMember(Person person)
        {
            people.Add(person);
        }
        public Person GetOldestMember()
        {
            Person oldestPerson = new Person();
            int age = int.MinValue;
            foreach (var person in people)
            {
                if (person.Age > age)
                {
                    age = person.Age;
                    oldestPerson.Name = person.Name;
                    oldestPerson.Age = person.Age;
                }
            }
            return oldestPerson;
        }
    }
}
