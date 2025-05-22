namespace DeviceInterfaces
{
    public interface IPrinter
    {
        void Print(string document);
    }

    public interface IScanner
    {
        void Scan(string document);
    }
}
