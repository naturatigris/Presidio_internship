using System.IO;

public sealed class FileHandler
{
    private static FileHandler instance = null;
    private static readonly object lockedInstance = new object();
    private readonly FileStream fileStream;
    private readonly StreamReader reader;
    private readonly StreamWriter writer;

    private FileHandler(string filePath)
    {
        fileStream = new FileStream(filePath, FileMode.OpenOrCreate, FileAccess.ReadWrite);
        reader = new StreamReader(fileStream);
        writer = new StreamWriter(fileStream) { AutoFlush = true };
    }

    public static FileHandler GetInstance(string filePath = "data.txt")
    {
        lock (lockedInstance)
        {
            if (instance == null)
                instance = new FileHandler(filePath);
        }
        return instance;
    }

    public StreamReader GetReader()
    {
        fileStream.Seek(0, SeekOrigin.Begin);
        return reader;
    }

    public StreamWriter GetWriter()
    {
        fileStream.Seek(0, SeekOrigin.End);
        return writer;
    }

    public void Close()
    {
        writer.Flush();
        writer.Close();
        reader.Close();
        fileStream.Close();
        instance = null;
    }
}
