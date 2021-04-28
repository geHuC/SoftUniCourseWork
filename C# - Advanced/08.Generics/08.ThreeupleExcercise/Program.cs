using System;

namespace _08.ThreeupleExcercise
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] stringInput = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            string name = stringInput[0] + " " + stringInput[1];
            string address = stringInput[2];
            string town = stringInput[3];
            Threeuple<string,string,string> nameTown = new Threeuple<string, string, string>(name, address, town);
            Console.WriteLine(nameTown);

            string[] drunkInput = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            string drunkName = drunkInput[0];
            int beers = int.Parse(drunkInput[1]);
            bool isDrunk = (stringInput[2] == "Drunk");
            Threeuple<string, int, bool> drunk = new Threeuple<string, int, bool>(drunkName, beers, isDrunk);
            Console.WriteLine(drunk);

            string[] bankAccount = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            string bankAccountName = bankAccount[0];
            double balance = double.Parse(bankAccount[1]);
            string bank = bankAccount[2];
            Threeuple<string, double, string> bankDetails = new Threeuple<string, double, string>(bankAccountName, balance, bank);
            Console.WriteLine(bankDetails);
        }
    }
}
