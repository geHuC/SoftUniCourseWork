using System;
using System.Collections.Generic;

namespace _03.ShoppingSpree
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] peopleInput = Console.ReadLine().Split(';',StringSplitOptions.RemoveEmptyEntries);
            string[] productInput = Console.ReadLine().Split(';',StringSplitOptions.RemoveEmptyEntries);
            Dictionary<string, Person> people = new Dictionary<string, Person>();
            Dictionary<string, Product> products = new Dictionary<string, Product>();
            try
            {

                foreach (var personData in peopleInput)
                {
                    string[] personProperties = personData.Split('=');
                    Person person = new Person(personProperties[0], decimal.Parse(personProperties[1]));
                    people.Add(personProperties[0], person);
                }
                foreach (var productData in productInput)
                {
                    string[] productProperties = productData.Split('=');
                    Product product = new Product(productProperties[0], decimal.Parse(productProperties[1]));
                    products.Add(productProperties[0], product);
                }
                string[] input = Console.ReadLine().Split();
                while (input[0] != "END")
                {
                    if (people.ContainsKey(input[0]) && products.ContainsKey(input[1]))
                    {
                        people[input[0]].BuyProduct(products[input[1]]);
                    }
                    input = Console.ReadLine().Split();
                }
                foreach (var item in people)
                {
                    Console.WriteLine($"{item.Key} - {item.Value.BagContents()}");
                }
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
