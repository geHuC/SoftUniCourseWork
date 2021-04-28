using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace AquaShop.IO.Contracts
{

        public class FileWriter : IWriter
        {
            private readonly string filePath;

            public FileWriter(string filePath)
            {
                this.filePath = filePath;
            }
            public void WriteLine(string text)
            {
                File.AppendAllText(this.filePath, text + Environment.NewLine);
            }

            public void Write(string text)
            {
                File.AppendAllText(this.filePath, text);
            }

    }
}
