using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _03.Telephony
{
    public class SmartPhone : ICall, IBrowse
    {
        public string Browse(string website)
        {
            if (website.Any(x => char.IsDigit(x)))
            {
                return "Invalid URL!";
            }
            return $"Browsing: {website}!";
        }

        public string Call(string phone)
        {
            if (phone.Any(x => !char.IsDigit(x)))
            {
                return "Invalid number!";
            }
            return $"Calling... {phone}";
        }
    }
}
