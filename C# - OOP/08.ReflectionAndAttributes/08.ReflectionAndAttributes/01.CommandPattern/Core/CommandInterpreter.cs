using CommandPattern.Commands;
using CommandPattern.Core.Contracts;
using System;
using System.Linq;

namespace CommandPattern.Core
{
    class CommandInterpreter : ICommandInterpreter
    {
        private readonly ICommandFactory commandFactory;
        public CommandInterpreter()
        {
            commandFactory = new CommandFactory();
        }
        public string Read(string args)
        {
            string[] parts = args.Split(' ', StringSplitOptions.RemoveEmptyEntries);
            string commandType = parts[0];
            string[] commandArgs = parts.Skip(1).ToArray();

            //CommandCreation

            ICommand command = commandFactory.CreateCommand(commandType);

            return command.Execute(commandArgs);
        }
    }
}
