using System;
using System.Collections.Generic;
using System.Linq;

namespace _11.PartyReservationFileter
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(" ",StringSplitOptions.RemoveEmptyEntries);
            Dictionary<string, string> names = new Dictionary<string, string>();
            foreach (var name in input)
            {
                names.Add(name, "show");
            }
            string commands = Console.ReadLine();
            while (commands!= "Print")
            {
                sortCommands(commands, names);
                commands = Console.ReadLine();
            }
            //Dictionary<string, string> toPrint = names.Where(kvp => kvp.Value == "show").ToDictionary(k => k.Key, k=> k.Value);
            //Console.WriteLine(string.Join(" ", toPrint.Keys));
            foreach (var name in names)
            {
                if (name.Value=="show")
                {
                    Console.Write(name.Key + " ");
                }
            }
        }
        static void sortCommands (string input, Dictionary<string,string> names)
        {
            string[] commands = input.Split(";");
            string command = commands[0];
            string type = commands[1];
            string parameter = commands[2].Trim();
            string action = string.Empty;
            switch (command)
            {
                case "Add filter":
                    action = "hide";
                    break;
                case "Remove filter":
                    action = "show";
                    break;
            }
            executeCommands(names, fileterType(type), parameter, action);
        }
        static void executeCommands(Dictionary<string,string> names, Func<string,string,bool> func, string parameter,string command)
        {
            foreach (string name in names.Keys.ToList())
            {
                if (func(name,parameter))
                {
                    names[name] = command;
                }
            }
        }
        static Func<string,string,bool> fileterType (string type)
        {
            Func<string,string, bool> toReturn = (x,y) => false;
            switch(type)
            {
                case "Starts with": return toReturn = (x,y) => x.StartsWith(y);
                case "Ends with": return toReturn = (x, y) => x.EndsWith(y);
                case "Length": return toReturn = (x, y) => x.Length == int.Parse(y);
                case "Contains": return toReturn = (x, y) => x.Contains(y);
            }
            return toReturn;
        }
    }
}
