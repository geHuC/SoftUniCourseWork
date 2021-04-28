using System.Collections.Generic;

namespace _07.MilitaryElite.Interfaces
{
    interface ICommando:ISpecialisedSoldier
    {
        IReadOnlyCollection<IMission> Missions { get; }
        void AddMission(IMission mission);
    }
}
