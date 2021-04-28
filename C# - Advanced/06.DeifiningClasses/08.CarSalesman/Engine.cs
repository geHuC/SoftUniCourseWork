using System;
using System.Collections.Generic;
using System.Text;

namespace DefiningClasses
{
    class Engine
    {
        public string Model { get; set; }
        public string Power { get; set; }
        public string Displacement { get; set; } = "n/a";
        public string Efficiency { get; set; } = "n/a";

        public Engine(string model, string power)
        {
            Model = model;
            Power = power;
        }
        public  Engine(string model, string power, string displacement)
            :this(model,power)
        {
            if (int.TryParse(displacement, out _))
            {
                Displacement = displacement;
            }
            else
            {
                Efficiency = displacement;
            }
        }
        public Engine(string model, string power, string displacement, string efficiency)
    : this(model, power, displacement)
        {
            Efficiency = efficiency;
        }
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append(Model);
            sb.Append(":");
            sb.Append(Environment.NewLine);
            sb.Append("    Power: ");
            sb.Append(Power);
            sb.Append(Environment.NewLine);
            sb.Append("    Displacement: ");
            sb.Append(Displacement);
            sb.Append(Environment.NewLine);
            sb.Append("    Efficiency: ");
            sb.Append(Efficiency);
            return sb.ToString();

        }

    }
}
