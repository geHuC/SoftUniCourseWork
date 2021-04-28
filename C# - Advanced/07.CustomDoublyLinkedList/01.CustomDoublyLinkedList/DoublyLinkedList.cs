using System;
using System.Collections.Generic;
using System.Text;

namespace CustomDoublyLinkedList
{
    class DoublyLinkedList<T>
    {
        private class ListNode
        {
            public T Value { get; set; }
            public ListNode NextNode { get; set; }
            public ListNode PreviousNode { get; set; }
            public ListNode(T value)
            {
                Value = value;
            }
        }
        private ListNode Head;
        private ListNode Tail;
        public int Count { get; private set; } = 0;

        public void AddFirst(T element)
        {
            if (Count == 0)
            {
                CreateFirstElement(element);
                return;
            }
            ListNode newNode = new ListNode(element);
            newNode.NextNode = Head;
            Head.PreviousNode = newNode;
            Head = newNode;
            Count++;
        }
        public void AddLast(T element)
        {
            if (Count == 0)
            {
                CreateFirstElement(element);
                return;
            }
            ListNode newNode = new ListNode(element);
            newNode.PreviousNode = Tail;
            Tail.NextNode = newNode;
            Tail = newNode;
            Count++;
        }
        public T RemoveFirst()
        {
            if (Count == 0)
            {
                throw new InvalidOperationException("The list is empty");
            }
            if (Count == 1)
            {
                T temp = Head.Value;
                Head = null;
                Tail = null;
                Count--;
                return temp;
            }
            T value = Head.Value;
            Head.NextNode.PreviousNode = null;
            Head = Head.NextNode;
            Count--;
            return value;
        }
        public T RemoveLast()
        {
            if (Count == 0)
            {
                throw new InvalidOperationException("The list is empty");
            }
            if (Count == 1)
            {
                T temp = Head.Value;
                Head = null;
                Tail = null;
                Count--;
                return temp;
            }
            T value = Tail.Value;
            Tail.PreviousNode.NextNode = null;
            Tail = Tail.PreviousNode;
            Count--;
            return value;
        }
        public void ForEach(Action<T> action)
        {
            var currentNode = Head;
            for (int i = 0; i < Count; i++)
            {
                action(currentNode.Value);
                currentNode = currentNode.NextNode;
            }
        }
        public T[] ToArray()
        {
            T[] array = new T[Count];
            var currentNode = Head;
            for (int i = 0; i < Count; i++)
            {
                array[i] = currentNode.Value;
                currentNode = currentNode.NextNode;
            }
            return array;
        }
        private void CreateFirstElement(T element)
        {
            ListNode firstNode = new ListNode(element);
            Head = firstNode;
            Tail = firstNode;
            Count++;
        }
    }

}

