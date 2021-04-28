using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace _02.Collection
{
    public class ListyIterator : IEnumerable<string>
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
        public void PrintAll()
        {
            Console.WriteLine(string.Join(" ", list));
        }

        public IEnumerator<string> GetEnumerator()
        {
            foreach (var item in list)
            {
                yield return item;
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            throw new NotImplementedException();
        }
    }
}
