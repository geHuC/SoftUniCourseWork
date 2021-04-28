using System;
using System.Collections.Generic;
using System.Text;

namespace DefiningClasses
{
    public class Person
    {
        private string name = "No name";
        private int age = 1;

        public int Age
        {
            get { return age; }
            set { age = value; }
        }
        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        public Person()
        {
        }
        public Person(string n, int a)
        {
            name = n;
            age = a;
        }
        public Person(int a)
        {
            age = a;
        }

    }
}


