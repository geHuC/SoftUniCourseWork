using System;
using System.Collections.Generic;
using System.Text;

namespace _1.LIstyIterator
{
    public class ListyIterator
    {
        private List<string> list;
        private int index = 0;
        public ListyIterator(List<string> input)
        {
            list = new List<string>(input);
        }
        public bool Move()
        {
            if (index >= 0 && index < list.Count -1)
            {
                index++;
                Console.WriteLine("True");
                return true;
            }
            Console.WriteLine("False");
            return false;
        }
        public bool HasNext()
        {
            if (index >= 0 && index < list.Count - 1)
            {
                Console.WriteLine("True");
                return true;
            }
            Console.WriteLine("False");
            return false;
        }
        public void Print()
        {
            if (list.Count == 0)
            {
                Console.WriteLine( "Invalid Operation!");
            }
            else
            {

                Console.WriteLine(list[index]);
            }
        }
    }
}
