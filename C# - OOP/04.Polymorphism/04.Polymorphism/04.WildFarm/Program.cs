using System;
using System.Collections.Generic;

namespace _04.WildFarm
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Animal> animals = new List<Animal>();

            while (true)
            {
                string[] input = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries); 
                if (input[0] == "End")
                {
                    break;
                }

                Animal animal = null;
                switch (input[0])
                {
                    case "Cat":
                        animal = new Cat(input[1], double.Parse(input[2]), input[3], input[4]);
                        break;
                    case "Tiger":
                        animal = new Tiger(input[1], double.Parse(input[2]), input[3], input[4]);
                        break;
                    case "Dog":
                        animal = new Dog(input[1], double.Parse(input[2]), input[3]);
                        break;
                    case "Mouse":
                        animal = new Mouse(input[1], double.Parse(input[2]), input[3]);
                        break;
                    case "Owl":
                        animal = new Owl(input[1], double.Parse(input[2]), double.Parse(input[3]));
                        break;
                    case "Hen":
                        animal = new Hen(input[1], double.Parse(input[2]), double.Parse(input[3]));
                        break;
                }
                Console.WriteLine(animal.AskForFood());

                input = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries);
                Food food = null;
                switch (input[0])
                {
                    case "Fruit":
                        food = new Fruit(int.Parse(input[1]));
                        break;
                    case "Meat":
                        food = new Meat(int.Parse(input[1]));
                        break;
                    case "Seeds":
                        food = new Seeds(int.Parse(input[1]));
                        break;
                    case "Vegetable":
                        food = new Vegetable(int.Parse(input[1]));
                        break;
                }
                animal.Feed(food);
                animals.Add(animal);
            }
            foreach (var animal in animals)
            {
                Console.WriteLine(animal);
            }
        }
    }
}
