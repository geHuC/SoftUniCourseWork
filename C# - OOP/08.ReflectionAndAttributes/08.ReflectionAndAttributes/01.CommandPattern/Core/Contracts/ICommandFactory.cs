﻿
using CommandPattern.Commands;

namespace CommandPattern.Core.Contracts
{
    public interface ICommandFactory
    {
        ICommand CreateCommand(string commandType);
    }
}
