using System;
using DeviceInterfaces;
using DeviceServices;

namespace ISPExampleApp
{
    class Program
    {
        static void Main()
        {
            IPrinter printer = new SimplePrinter();
            printer.Print("Report.pdf");

            IScanner scanner = new SimpleScanner();
            scanner.Scan("Document.jpg");

            IPrinter mfpPrinter = new MultiFunctionPrinter();
            IScanner mfpScanner = new MultiFunctionPrinter();

            mfpPrinter.Print("Invoice.pdf");
            mfpScanner.Scan("Receipt.png");
        }
    }
}
