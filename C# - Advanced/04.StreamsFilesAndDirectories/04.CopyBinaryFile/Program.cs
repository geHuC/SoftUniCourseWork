using System;
using System.IO;

namespace _04.CopyBinaryFile
{
    class Program
    {
        static void Main(string[] args)
        {
            string fileToCopy = "../../../copyMe.png";
            string copiedFile = "../../../iDid.png";

            using (FileStream stream = new FileStream(fileToCopy, FileMode.Open, FileAccess.Read))
            {
                using (FileStream streamWrite = new FileStream(copiedFile, FileMode.Create, FileAccess.Write))
                {
                    byte[] buffer = new byte[4096];
                    int bytesRead =0;

                    while ((bytesRead = stream.Read(buffer, 0, buffer.Length)) > 0)
                    {
                        streamWrite.Write(buffer, 0, bytesRead);
                    }
                }
            }
        }
    }
}
