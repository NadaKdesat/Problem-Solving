using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace problem1
{
    internal class Program
    {
        //static int CountVowels(string str)
        //{
        //    int count = 0;
        //    foreach (char s in str)
        //    {
        //        if (s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u' || s == 'A' || s == 'E' || s == 'I' || s == 'O' || s == 'U')
        //        {
        //            count++;
        //        }
        //    }
        //    return count;
        //}

        static int CountVowels(string str)
        {
            string vowels = "aeiouAEIOU";
            return str.Count(c => vowels.Contains(c));
        }
        static void Main(string[] args)
        {
            Console.Write("Input: ");
            string input = Console.ReadLine();
            Console.WriteLine($"Output: \nThe number of vowels contained in the string: {CountVowels(input)}");

        }
    }
}
