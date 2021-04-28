using System;
using System.Collections.Generic;
using System.Text;

namespace _01.ClassBoxData
{
    public class Box
    {
        private double length;
        private double width;
        private double height;

        public Box(double lenght, double width, double height)
        {
            if (lenght <= 0)
            {
                throw new ArgumentException("Length cannot be zero or negative.");
            }
            if (width <= 0)
            {
                throw new ArgumentException("Width cannot be zero or negative.");
            }
            if (height <= 0)
            {
                throw new ArgumentException("Height cannot be zero or negative.");
            }
            this.length = lenght;
            this.width = width;
            this.height = height;
        }
        public string SurfaceArea()
        {
            return $"Surface Area - {((2 * length * width) + (2 * height * width) + (2 * length * height)).ToString("f2")}";
        }
        public string LateralSurfaceArea()
        {
            return $"Lateral Surface Area - {((2 * height * width) + (2 * length * height)).ToString("f2")}";
        }
        public string Volume()
        {
            return $"Volume - {(width*length* height).ToString("f2")}";
        }
    }
}
