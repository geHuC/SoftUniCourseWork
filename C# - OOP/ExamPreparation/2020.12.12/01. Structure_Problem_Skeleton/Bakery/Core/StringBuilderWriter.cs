using Bakery.IO.Contracts;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Bakery.Core
{
    public class StringBuilderWriter : IWriter
    {
        public StringBuilder sb = new StringBuilder();

        public void Write(string message)
        {
            sb.Append(message);
        }

        public void WriteLine(string message)
        {
            sb.AppendLine(message);
        }

    }
}
