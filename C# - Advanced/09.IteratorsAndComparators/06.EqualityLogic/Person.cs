using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;

namespace _06.EqualityLogic
{
    class Person :IComparable<Person>, IEquatable<Person>
    {
        public string Name { get; private set; }
        public int Age { get; private set; }
        public Person(string[] input)
        {
            Name = input[0];
            Age = int.Parse(input[1]);
        }

        public int CompareTo([AllowNull] Person other)
        {
            if (Name.CompareTo(other.Name) == 0 && Age.CompareTo(other.Age) == 0)
            {
                return 0;
            }
            if (Name.CompareTo(other.Name) == 0 && Age.CompareTo(other.Age) < 0)
            {
                return -1;
            }
            if (Name.CompareTo(other.Name) < 0)
            {
                return -1;
            }
            return 1;

        }

        public bool Equals([AllowNull] Person other)
        {
            if (Name == other.Name && Age == other.Age)
            {
                return true;
            }
            return false;
        }
        public override int GetHashCode()
        {
            int toReturn = 0;
            foreach (char c in Name)
            {
                toReturn += System.Convert.ToInt32(c);
            }
            toReturn *= Name.Length;
            toReturn /= Age;
            return toReturn;
        }
    }
}
