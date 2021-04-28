using _07.MilitaryElite.Enums;
using _07.MilitaryElite.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite.Soldiers
{
    public class Mission : IMission
    {
        public Mission(string codeName, Progress progress)
        {
            CodeName = codeName;
            Progress = progress;
        }
        public void CompleteMission()
        {
            Progress = Progress.Finished;
        }
        public string CodeName { get; private set; }

        public Progress Progress { get; private set; }
        public override string ToString()
        {
            return $"Code Name: {CodeName} State: {Progress}";
        }
    }
}
