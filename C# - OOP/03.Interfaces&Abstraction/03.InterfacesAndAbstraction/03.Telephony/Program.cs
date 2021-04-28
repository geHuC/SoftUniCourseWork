using System;

namespace _03.Telephony
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] phoneNumbers = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries);
            string[] webSites = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries);
            foreach (var phoneNumber in phoneNumbers)
            {
                ICall call;
                if (phoneNumber.Length > 7)
                {
                    call = new SmartPhone();
                }
                else
                {
                    call = new StationaryPhone();
                }
                Console.WriteLine(call.Call(phoneNumber));
            }
            foreach (var item in webSites)
            {
                IBrowse browse = new SmartPhone();
                Console.WriteLine(  browse.Browse(item));
            }
        }
    }
}
