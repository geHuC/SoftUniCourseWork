using System;
using System.Collections.Generic;

namespace _06.SongsQueue
{
    class Program
    {
        static void Main(string[] args)
        {
            var items = Console.ReadLine().Split(", ");
            Queue<string> que = new Queue<string>(items);
            while(que.Count > 0)
            {
                var command = Console.ReadLine();

                switch(command.Substring(0,4))
                {
                    case "Add ":
                        string songName = command.Substring(4, command.Length - 4);
                        if(que.Contains(songName))
                        {
                            Console.WriteLine(songName + " is already contained!");
                        }    
                        else
                        {
                            que.Enqueue(songName);
                        }
                        break;
                    case "Play":
                        que.Dequeue();
                        break;
                    case "Show":
                        string[] songs = que.ToArray();
                        Console.WriteLine("{0}", string.Join(", ", songs));
                        break;
                }
            }
            Console.WriteLine("No more songs!");
        }
    }
}
