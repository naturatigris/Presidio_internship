using Microsoft.Extensions.Logging;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
using System.Text;

public class BlobLogger : ILogger
{
    private readonly string _categoryName;
    private readonly BlobContainerClient _containerClient;

    public BlobLogger(string categoryName, BlobContainerClient containerClient)
    {
        _categoryName = categoryName;
        _containerClient = containerClient;
    }

    public IDisposable BeginScope<TState>(TState state) => null!;
    public bool IsEnabled(LogLevel logLevel) => true;

    public void Log<TState>(LogLevel logLevel, EventId eventId,
        TState state, Exception? exception, Func<TState, Exception?, string> formatter)
    {
        if (!IsEnabled(logLevel)) return;

        var message = $"[{DateTime.UtcNow:O}] [{logLevel}] [{_categoryName}] {formatter(state, exception)}{Environment.NewLine}";

        // Fire-and-forget (safe non-blocking)
        _ = AppendToBlobAsync(message);
    }

    private async Task AppendToBlobAsync(string content)
    {
        Console.WriteLine("⏳ Writing to blob...");

        try
        {
            await _containerClient.CreateIfNotExistsAsync();
            var logFileName = $"log-{DateTime.UtcNow:yyyy-MM-dd}.txt";

            var appendBlobClient = _containerClient.GetAppendBlobClient(logFileName);
            if (!await appendBlobClient.ExistsAsync())
            {
                await appendBlobClient.CreateAsync();
            }

            using var stream = new MemoryStream(Encoding.UTF8.GetBytes(content));
            await appendBlobClient.AppendBlockAsync(stream);
        }
catch (Exception ex)
{
    Console.WriteLine($"❌ Logging failed: {ex.Message}");
}    }
}
