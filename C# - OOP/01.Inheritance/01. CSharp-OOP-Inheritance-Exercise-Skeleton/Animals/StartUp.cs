
using System;
using System.Collections.Generic;
using System.Linq;

namespace Animals
{
    public class StartUp
    {
        static void Main(string[] args)
        {

            string type = string.Empty;
            List<Animal> list = new List<Animal>();
            while ((type = Console.ReadLine()) != "Beast!")
            {
                try
                {
                    CreateAnimal(list, type);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }
            PrintResult(list);
        }
        public static void CreateAnimal(List<Animal> list, string type)
        {
            var data = Console.ReadLine()
                    .Split(" ", StringSplitOptions.RemoveEmptyEntries)
                    .ToArray();
            var name = data[0];
            var age = int.Parse(data[1]);
            var gender = string.Empty;
            if (data.Length == 3)
            {
                gender = data[2];
            }
            if (type == "Cat")
            {
                Cat cat = new Cat(name, age, gender);
                list.Add(cat);
            }
            else if (type == "Dog")
            {
                Dog dog = new Dog(name, age, gender);
                list.Add(dog);
            }
            else if (type == "Frog")
            {
                Frog frog = new Frog(name, age, gender);
                list.Add(frog);
            }
            else if (type == "Kitten")
            {
                Kitten kitten = new Kitten(name, age);
                list.Add(kitten);
            }
            else if (type == "Tomcat")
            {
                Tomcat tomcat = new Tomcat(name, age);
                list.Add(tomcat);
            }
            else
            {
                throw new ArgumentException("Invalid input!");
            }
        }
        public static void PrintResult(List<Animal> list)
        {
            foreach (var animal in list)
            {
                Console.WriteLine(animal);
            }
        }
    }
}