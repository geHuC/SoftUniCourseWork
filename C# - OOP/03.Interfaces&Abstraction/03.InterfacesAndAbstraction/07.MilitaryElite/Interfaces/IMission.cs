using _07.MilitaryElite.Enums;

namespace _07.MilitaryElite.Interfaces
{
    public interface IMission
    {
        public string CodeName { get;}
        public Progress Progress { get; }

        void CompleteMission();
    }
}