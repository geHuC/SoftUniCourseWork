using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SoftUniParking
{
    class Parking
    {
        private int capacity;
        private int count;
        public List<Car> Cars { get; set; }
        public int Count
        {
            get => count;
        }
        public Parking(int capacity)
        {
            Cars = new List<Car>();
            this.capacity = capacity;
        }
        public string AddCar(Car car)
        {
            if (Cars.Any(c => c.RegistrationNumber == car.RegistrationNumber))
            {
                return "Car with that registration number, already exists!";
            }
            if (capacity == Cars.Count)
            {
                return "Parking is full!";
            }
            Cars.Add(car);
            count++;
            return $"Successfully added new car {car.Make} {car.RegistrationNumber}";
        }
        public string RemoveCar(string registrationNumber)
        {
            if(Cars.Any(c => c.RegistrationNumber == registrationNumber))
            {
                List<Car> toUpdate = new List<Car>();
                foreach (var car in Cars)
                {
                    if (car.RegistrationNumber != registrationNumber)
                    {
                        toUpdate.Add(car);
                    }
                }
                Cars = toUpdate;
                count--;
                return $"Successfully removed {registrationNumber}";
            }
            return "Car with that registration number, doesn't exist!";
        }
        public Car GetCar(string registrationNumber)
        {
            foreach (var car in Cars)
            {
                if(car.RegistrationNumber == registrationNumber)
                {
                    return car;
                }
            }
            return null;
        }
        public void RemoveSetOfRegistrationNumber(List<string> registrationNumbers)
        {
            List<Car> newCarList = new List<Car>();
            foreach (var car in Cars)
            {
                foreach (var reg in registrationNumbers)
                {
                    if (car.RegistrationNumber==reg)
                    {
                        newCarList.Add(car);
                        count--;
                    }
                }

            }
        }
    }

}
