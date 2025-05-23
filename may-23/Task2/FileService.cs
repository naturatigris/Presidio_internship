using System;
using System.IO;

//service
public class TextFileReader : IFile
{
    private readonly StreamReader _reader;

    public TextFileReader(StreamReader reader)
    {
        _reader = reader;
    }

    public string ReadAll()
    {
        _reader.BaseStream.Seek(0, SeekOrigin.Begin);
        _reader.DiscardBufferedData();
        return _reader.ReadToEnd();
    }

    public string ReadMeta()
    {
        _reader.BaseStream.Seek(0, SeekOrigin.Begin);
        _reader.DiscardBufferedData();
        return _reader.ReadLine();
    }
}

//Proxy
public class ProxyFile : IFile
{
    private readonly IFile _realFile;
    private readonly string _role;

    public ProxyFile(string userRole)
    {
        _role = userRole;
        var fileStream = new FileStream("data.txt", FileMode.OpenOrCreate, FileAccess.ReadWrite);
        var streamReader = new StreamReader(fileStream);
        _realFile = new TextFileReader(streamReader);
    }

    public string ReadAll()
    {
        if (_role == "Guest" || _role=="User")
            return "Access denied to full file content.";
        return _realFile.ReadAll();
    }

    public string ReadMeta()
    {
        if (_role == "Guest")
            return "Access denied to metadata.";
        return _realFile.ReadMeta();
    }
}
