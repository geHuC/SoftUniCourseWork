using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace _03.WordCount
{
    class Program
    {

        static void Main(string[] args)
        {
            string text = "../../../text.txt";
            string words = "../../../words.txt";
            string actualResult = "../../../actualResult.txt";
            string expectedResult = "../../../expectedResult.txt";
            string readText = string.Empty;
            string sortedText = string.Empty;
            Dictionary<string, int> wordsToSearch = new Dictionary<string, int>();
            foreach (var line in File.ReadLines(words))
            {
                wordsToSearch.Add(line, 0);
            }
            foreach (var line in File.ReadLines(text))
            {
                foreach (var word in wordsToSearch.ToList())
                {
                    wordsToSearch[word.Key] += Regex.Matches(line, "\\b" + word.Key + "\\b", RegexOptions.IgnoreCase).Count;
                }
            }
            foreach (var word in wordsToSearch)
            {
                string strToWrite = $"{word.Key} - {word.Value}";
                File.AppendAllText(actualResult, strToWrite + Environment.NewLine);
            }
            Dictionary<string, int> sortedResults = new Dictionary<string, int>(wordsToSearch.OrderByDescending(words => words.Value));
            //Don't know what to do "Sort the words by frequency in descending order and then compare the result with the file expectedResult.txt"
            // After i compare them what should happen? how do I indicate the comparison is correct? it isn't in the description.
            //Initially I though I had to create the file myself hence the commented out code


            //foreach (var word in wordsToSearch.OrderByDescending(words => words.Value))
            //{
            //    string strToWrite = $"{word.Key} - {word.Value}";
            //    File.AppendAllText(expectedResult, strToWrite + Environment.NewLine);
            //}

            foreach (var line in File.ReadAllLines(expectedResult))
            {
                readText += line;
            }
            foreach (var word in sortedResults)
            {
                sortedText += $"{word.Key} - {word.Value}";
            }
            if (readText == sortedText)
            {
                Console.WriteLine("Sorted Correctly");
            }
            else
            {
                Console.WriteLine("Sorted incorrectly");
            }
        }
    }
}

