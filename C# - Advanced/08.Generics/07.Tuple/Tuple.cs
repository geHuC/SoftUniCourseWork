using System;
using System.Collections.Generic;
using System.Text;

namespace _07.TupleExcersise
{
    class Tuple<item1,item2>
    {
        public item1 Item1 { get; set; }
        public item2 Item2 { get; set; }
        public Tuple(item1 input1,item2 input2)
        {
            Item1 = input1;
            Item2 = input2;
        }
        public override string ToString()
        {
            string str = $"{Item1} -> {Item2}";
            return str;
        }
    }
}
