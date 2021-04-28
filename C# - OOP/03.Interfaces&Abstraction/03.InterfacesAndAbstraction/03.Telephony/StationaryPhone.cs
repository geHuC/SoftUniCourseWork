using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _03.Telephony
{
    public class StationaryPhone : ICall
    {
        public string Call(string phone)
        {
            if (phone.Any(x => !char.IsDigit(x)))
            {
                return "Invalid number!";
            }
            return $"Dialing... {phone}";
        }
    }
}
