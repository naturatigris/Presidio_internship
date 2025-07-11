using Azure.Storage.Blobs;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace BlobAPI.Services
{
    public class BlobStorageService
    {
        private readonly BlobContainerClient _containerClient;
        private readonly ILogger<BlobStorageService> _logger;

        public BlobStorageService(IConfiguration configuration, ILogger<BlobStorageService> logger)
        {
            _logger = logger;

            var sasUrl = configuration["AzureBlob:ContainerSasUrl"];
            _logger.LogInformation("Initializing BlobContainerClient with SAS URL.");

            _containerClient = new BlobContainerClient(new Uri(sasUrl));
        }

        public async Task UploadFile(Stream fileStream, string fileName)
        {
            try
            {
                _logger.LogInformation("Uploading file: {FileName}", fileName);

                var blobClient = _containerClient.GetBlobClient(fileName);
                await blobClient.UploadAsync(fileStream, overwrite: true);

                _logger.LogInformation("Upload completed: {FileName}", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error uploading file: {FileName}", fileName);
                throw;
            }
        }

        public async Task<Stream> DownloadFile(string fileName)
        {
            try
            {
                _logger.LogInformation("Downloading file: {FileName}", fileName);

                var blobClient = _containerClient.GetBlobClient(fileName);

                if (await blobClient.ExistsAsync())
                {
                    var downloadInfo = await blobClient.DownloadStreamingAsync();
                    _logger.LogInformation("Download completed: {FileName}", fileName);
                    return downloadInfo.Value.Content;
                }

                _logger.LogWarning("File not found: {FileName}", fileName);
                return null;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error downloading file: {FileName}", fileName);
                throw;
            }
        }
    }
}
