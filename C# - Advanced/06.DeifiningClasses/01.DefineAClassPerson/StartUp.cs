using System;

namespace DefiningClasses
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            Person pesho = new Person();
            pesho.Name = "Pesho";
            pesho.Age = 20;
            Person gosho = new Person("Gosho", 20);
            Person stamat = new Person("Stamat", 43);
        }
    }
}
