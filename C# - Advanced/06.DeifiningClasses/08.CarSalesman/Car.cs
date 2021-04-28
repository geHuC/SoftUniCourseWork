using System;
using System.Collections.Generic;
using System.Text;

namespace DefiningClasses
{
    class Car
    {
        public string Model { get; set; }
        public Engine Engine { get; set; }
        public string Weight { get; set; } = "n/a";
        public string Color { get; set; } = "n/a";

        public Car (string model, Engine engine)
        {
            Model = model;
            Engine = engine;
        }
        public Car(string model, Engine engine, string weight)
            :this(model, engine)
        {
            if (int.TryParse(weight, out _))
            {
                Weight = weight;
            }
            else
            {
                Color = weight;
            }
        }
        public Car(string model, Engine engine, string weight, string color)
    : this(model, engine,weight)
        {
            Color = color;
        }
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append(Model);
            sb.Append(":");
            sb.Append(Environment.NewLine);
            sb.Append("  ");
            sb.Append(Engine.ToString());
            sb.Append(Environment.NewLine);
            sb.Append("  Weight: ");
            sb.Append(Weight);
            sb.Append(Environment.NewLine);
            sb.Append("  Color: ");
            sb.Append(Color);
            return sb.ToString();
        }
    }
}
