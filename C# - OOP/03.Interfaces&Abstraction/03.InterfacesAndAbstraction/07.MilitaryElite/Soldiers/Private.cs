
using _07.MilitaryElite.Interfaces;

namespace _07.MilitaryElite.Soldiers
{
    public class Private : Soldier, IPrivate
    {
        private decimal salary;
        public Private(string id, string firstName, string lastName, decimal salary) 
            : base(id, firstName, lastName)
        {
            Salary = salary;
        }

        public decimal Salary { get => salary; private set => salary = value; }
        public override string ToString()
        {
            return base.ToString() + $" Salary: {Salary:F2}";
        }
    }
}
