using CommandPattern.Core.Contracts;

namespace CommandPattern.Commands
{
    class HelloCommand : ICommand
    {
        public string Execute(string[] args)
        {
            return $"Hello, {args[0]}";
        }
    }
}
