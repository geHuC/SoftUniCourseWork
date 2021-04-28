using System;
using System.IO;
using System.Text.RegularExpressions;

namespace _02.LineNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            string inputFile = "../../../text.txt";
            string outputFile = "../../../output.txt"; //Delete the already existing  file so it can create it again when run
            int rowNumber = 0;
            foreach (var line in File.ReadLines(inputFile))
            {
                int letters = Regex.Matches(line, "[a-zA-Z]").Count;
                int punctuation = Regex.Matches(line, "[-.,!?']").Count;
                rowNumber++;
                string text = $"Line {rowNumber}: {line} ({letters})({punctuation})";
                File.AppendAllText(outputFile, text + Environment.NewLine);
            }
        }
    }
}
