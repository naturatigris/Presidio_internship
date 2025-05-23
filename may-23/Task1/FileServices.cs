//abstract method
public abstract class FileIOFactory
{
    public abstract IReader GetReader();
    public abstract IWriter GetWriter();
}
public class TextFileIOFactory : FileIOFactory
{
    public override IReader GetReader()
    {
        return new TextFileReader(FileHandler.GetInstance().GetReader());
    }

    public override IWriter GetWriter()
    {
        return new TextFileWriter(FileHandler.GetInstance().GetWriter());
    }
}
//factory method
public class TextFileReader : IReader
{
    private readonly StreamReader _reader;

    public TextFileReader(StreamReader reader)
    {
        _reader = reader;
    }

    public string ReadAll()
    {
        return _reader.ReadToEnd();
    }
}

public class TextFileWriter : IWriter
{
    private readonly StreamWriter _writer;

    public TextFileWriter(StreamWriter writer)
    {
        _writer = writer;
    }

    public void Write(string text)
    {
        _writer.WriteLine(text);
    }
}
