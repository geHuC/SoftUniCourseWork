using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DefiningClasses
{
   public class DateModifier
    {
        private DateTime date1;
        private DateTime date2;

        public double getDifference(string input1, string input2)
        {
            double days = 0;
            int[] firstDate = input1.Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int[] secondDate = input2.Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();

            date1 = new DateTime(firstDate[0], firstDate[1], firstDate[2]);
            date2 = new DateTime(secondDate[0], secondDate[1], secondDate[2]);

            if (date1 > date2)
            {
                days = (date1 - date2).TotalDays;
            }
            else
            {

                days = (date2 - date1).TotalDays;
            }
            return days;
        }
    }
    
}
