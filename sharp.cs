using System;

class Program
{
    static void Main()
    {
        // Declare and initialize an array
        int[] numbers = { 1, 2, 3, 4, 5 };

        // Access and print array elements
        for (int i = 0; i < numbers.Length; i++)
        {
            Console.WriteLine("Element " + i + ": " + numbers[i]);
        }
    }
}
