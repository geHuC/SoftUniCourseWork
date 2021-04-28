using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;

namespace _05.ConaparingObjects
{
    public class Person : IComparable<Person>
    {
        public string Name { get; private set; }
        public int Age { get; private set; }
        public string Town { get; private set; }
        public Person(Person person)
        {
            this.Age = person.Age;
            this.Name = person.Name;
            this.Town = person.Town;
        }
        public Person(string name, int age, string town)
        {
            this.Name = name;
            this.Age = age;
            this.Town = town;
        }
        public int CompareTo(Person other)
        {
            if (Name == other.Name && Age == other.Age && Town == other.Town)
            {
                return 0;
            }
            return 1;
        }
    }
}
