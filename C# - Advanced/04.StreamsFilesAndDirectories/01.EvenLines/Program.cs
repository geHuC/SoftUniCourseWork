using System;
using System.IO;
using System.Text.RegularExpressions;

namespace _01.EvenLines
{
    class Program
    {
        static void Main(string[] args)
        {
            string file = "../../../text.txt";
            int rowNumber = 1;
            using (StreamReader sr = File.OpenText(file)) 
            {
                string rowData = sr.ReadLine();
                while (rowData != null)
                { 
                    if (rowNumber % 2 != 0)
                    {
                        Regex regex = new Regex("[-,.!?]");
                        string regData = regex.Replace(rowData, "@");
                        string[] toPrint = regData.Split(' ');
                        Array.Reverse(toPrint);
                        Console.WriteLine(string.Join(" ", toPrint));
                    }
                    rowData = sr.ReadLine();
                    rowNumber++;
                }
            }
        }
    }
}
