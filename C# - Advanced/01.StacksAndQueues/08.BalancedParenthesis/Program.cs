using System;
using System.Collections.Generic;

namespace _08.BalancedParenthesis
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            Stack<char> open = new Stack<char>();
            if (input.Length % 2 == 0 && input.Length < 1001)
            {
                char[] parenthesis = input.ToCharArray();
                bool isGood = true;
                foreach (var parenthes in parenthesis)
                {
                    if (parenthes == '(' || parenthes == '{' || parenthes == '[')
                    {
                        open.Push(parenthes);
                    }
                    else
                    {
                        switch(parenthes)
                        {
                            case ')':
                                if (open.Pop()!='(')
                                {
                                    isGood = false;
                                }
                                break;

                            case '}':
                                if (open.Pop() != '{')
                                {
                                    isGood = false;
                                }
                                break;
                            case ']':
                                if (open.Pop() != '[')
                                {
                                    isGood = false;
                                }
                                break;
                        }
                            
                    }
                }
                
                if (isGood)
                {
                    Console.WriteLine("YES");
                }
                else
                {
                    Console.WriteLine("NO");
                }

            }
            else
            {
                Console.WriteLine("NO");
            }
        }
    }
}
