using System;
using System.Collections.Generic;
using System.Text;

namespace _05.GenericCountMethodStrings
{
    class Box <T> where T : IComparable<T>
    {
        T value;
        public Box(T value)
        {
            this.value = value;
        }
        public override string ToString()
        {
            return $"{value.GetType()}: {value}";
        }
    }
}
