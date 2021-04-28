using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace _05.DirectoryTraversal
{
    class Program
    {
        static void Main(string[] args)
        {
            string path = Console.ReadLine();
            string[] files = Directory.GetFiles(path);
            string desktop = Environment.GetFolderPath(Environment.SpecialFolder.Desktop)+"\\report.txt";
            Dictionary<string,SortedDictionary<string, double>> data = new Dictionary<string, SortedDictionary<string, double>>();
            foreach (string filePath in files)
            {
                FileInfo file = new FileInfo(filePath);
                if (!data.ContainsKey(file.Extension))
                {
                    data.Add(file.Extension, new SortedDictionary<string, double>());
                }
                data[file.Extension].Add(file.Name,file.Length);
            }
            using (StreamWriter writer = new StreamWriter(desktop))
            {
                foreach (var keyvalue in data.OrderByDescending(k => k.Value.Count).ThenBy(name => name.Key))
                {
                    writer.WriteLine(keyvalue.Key);
                    foreach (var kv in keyvalue.Value.OrderBy(size => size.Value))
                    {
                        writer.WriteLine("--" + kv.Key + " - {0:F3}kb", kv.Value / 1024);
                    }
                }
            }
        }
    }
}
