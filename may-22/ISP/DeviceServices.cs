using System;
using DeviceInterfaces;

namespace DeviceServices
{
    public class SimplePrinter : IPrinter
    {
        public void Print(string document)
        {
            Console.WriteLine($"Printing: {document}");
        }
    }

    public class SimpleScanner : IScanner
    {
        public void Scan(string document)
        {
            Console.WriteLine($"Scanning: {document}");
        }
    }

    public class MultiFunctionPrinter : IPrinter, IScanner
    {
        public void Print(string document)
        {
            Console.WriteLine($"[MFP] Printing: {document}");
        }

        public void Scan(string document)
        {
            Console.WriteLine($"[MFP] Scanning: {document}");
        }
    }
}
