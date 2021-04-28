using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace _03.Stack
{
    class CustomStack<T> : IEnumerable<T>
    {
        private T[] stack;
        private int count;
        public CustomStack()
        {
            stack = new T[8];
            count = 0;
        }
        public void Push(T element)
        {
            if (count>stack.Length-1)
            {
                T[] newStack = new T[count * 2];
                for (int i = 0; i < stack.Length; i++)
                {
                    newStack[i] = stack[i];
                }
                stack = newStack;
            }
            if (count <0)
            {
                count = 0;
            }
            stack[count] = element;
            count++;
        }
        public T Pop()
        {
            if (count < stack.Length/2 && count >8)
            {
                T[] newStack = new T[count * 2];
                for (int i = 0; i < stack.Length/2; i++)
                {
                    newStack[i] = stack[i];
                }
                stack = newStack;
            }
            if (count-1 < 0)
            {
                Console.WriteLine("No elements");
            }
            else
            {
                T toReturn = stack[count-1];
                count--;
                return toReturn;
            }
            return default(T);
        }

        public IEnumerator<T> GetEnumerator()
        {
            for (int i = count -1; i >=0 ; i--)
            {
                yield return stack[i];
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            throw new NotImplementedException();
        }
    }
}
