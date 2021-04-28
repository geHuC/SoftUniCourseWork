using System;
using System.Collections.Generic;
using System.Text;

namespace SoftUniParking
{
    public class Car
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public int HorsePower { get; set; }
        public string RegistrationNumber { get; set; }

        public Car (string make, string model, int horsePower, string registrationNumber)
        {
            Make = make;
            Model = model;
            HorsePower = horsePower;
            RegistrationNumber = registrationNumber;
        }
        public override string ToString()
        {
            string toReturn = $"Make: {Make}";
            toReturn += Environment.NewLine + $"Model: {Model}";
            toReturn += Environment.NewLine + $"HorsePower: {HorsePower}";
            toReturn += Environment.NewLine + $"RegistrationNumber: {RegistrationNumber}";
            return toReturn;
        }
    }
}
