using System;
using System.Collections.Generic;

namespace _06.EqualityLogic
{
    class Program
    {
        static void Main(string[] args)
        {
            SortedSet<Person> sSet = new SortedSet<Person>();
            HashSet<Person> hSet = new HashSet<Person>();
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                Person person = new Person(Console.ReadLine().Split());
                sSet.Add(person);
                hSet.Add(person);
            }
            Console.WriteLine(sSet.Count);
            Console.WriteLine(hSet.Count);
            //foreach (var item in sset)
            //{
            //    console.writeline($"{item.name} {item.age}");
            //}
        }
    }
}
