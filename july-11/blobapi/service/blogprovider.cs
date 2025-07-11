using Azure.Storage.Blobs;
using Microsoft.Extensions.Logging;
using System;

public class BlobLoggerProvider : ILoggerProvider
{
    private readonly BlobContainerClient _containerClient;

    // Updated constructor to accept SAS URI
    public BlobLoggerProvider(Uri containerSasUri)
    {
        _containerClient = new BlobContainerClient(containerSasUri);
    }

    public ILogger CreateLogger(string categoryName)
    {
        return new BlobLogger(categoryName, _containerClient);
    }

    public void Dispose() { }
}
