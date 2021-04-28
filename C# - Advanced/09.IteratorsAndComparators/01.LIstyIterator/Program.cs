using System;
using System.Collections.Generic;
using System.Linq;

namespace _1.LIstyIterator
{
    public class Program
    {
        static void Main(string[] args)
        {
            List<string> input = new List<string>();
            string[] rawInput = Console.ReadLine().Split(" ");
            if (rawInput.Length > 1)
            {
                for (int i = 1; i < rawInput.Length; i++)
                {
                    input.Add(rawInput[i]);
                }
            }
            ListyIterator listyIterator = new ListyIterator(input);
            string commands = Console.ReadLine();
            while (commands != "END")
            {
                switch (commands)
                {
                    case "HasNext":
                        listyIterator.HasNext();
                        break;
                    case "Print":
                        listyIterator.Print();
                        break;
                    case "Move":
                        listyIterator.Move();
                        break;
                }
                commands = Console.ReadLine();
            }
        }
    }
}
