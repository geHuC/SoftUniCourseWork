using CommandPattern.Commands;
using CommandPattern.Core.Contracts;
using System;
using System.Linq;
using System.Reflection;

namespace CommandPattern.Core
{
    public class CommandFactory : ICommandFactory
    {
        public ICommand CreateCommand(string commandType)
        {
            Type type = Assembly.GetEntryAssembly().GetTypes().FirstOrDefault(c => c.Name == $"{commandType}Command");

            ICommand instance = (ICommand)Activator.CreateInstance(type);

            return instance;
        }
    }
}
