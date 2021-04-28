using System;
using System.Collections.Generic;
using System.Text;

namespace _05.FootballTeamGenerator
{
    public static class Validator
    {
        public static void ThrowOutsideOfRange(int number, int min, int max, string message)
        {
            if (number < min || number > max)
            {
                throw new ArgumentException(message);
            }
        }
        public static void ThrowIfNullOrWhitespace(string str, string message)
        {
            if (string.IsNullOrWhiteSpace(str))
            {
                throw new ArgumentException(message);
            }
        }
    }
}
