using System;
using System.IO.Compression;

namespace _06.ZipAndExtract
{
    class Program
    {
        static void Main(string[] args)
        {
            string desktop = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);

            using (ZipArchive zip = ZipFile.Open("../../../test.zip", ZipArchiveMode.Create))
            {
                zip.CreateEntryFromFile("../../../copyMe.png","copyMe.png");
            }
            ZipFile.ExtractToDirectory("../../../test.zip", desktop);
        }
    }
}
