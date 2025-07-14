using Azure.Identity;
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;
using Azure.Storage.Blobs;

namespace BlobAPI.Services
{
    public class BlobStorageService
    {
        private  BlobContainerClient _containerClinet;
        private readonly IConfiguration _configuration;

        public BlobStorageService(IConfiguration configuration)
        {
            _configuration = configuration;
            
        }

        private async Task UpdateContainerClient()
        {
            var blobUrl = _configuration["AzureBlob:KeyVaultUrl"];
                if (string.IsNullOrWhiteSpace(blobUrl))
        throw new Exception("KeyVaultUrl is missing or empty in configuration.");

            SecretClient secretClient = new SecretClient(new Uri(blobUrl), new DefaultAzureCredential());
            KeyVaultSecret secret = await secretClient.GetSecretAsync("SasUrl");
            var blobUrlValue = secret.Value;
            Console.WriteLine($"DEBUG blobUrlValue: '{blobUrlValue}'");

            _containerClinet = new BlobContainerClient(new Uri(blobUrlValue));
        }

        public async Task UploadFile(Stream fileStream,string fileName)
        {
            await UpdateContainerClient();
            var blobClient = _containerClinet.GetBlobClient(fileName);
            await blobClient.UploadAsync(fileStream,overwrite:true);
        }

        public async Task<Stream> DownloadFile(string fileName)
        {
            await UpdateContainerClient();
            var blobClient = _containerClinet?.GetBlobClient(fileName);
            if(await blobClient.ExistsAsync())
            {
                var downloadInfor = await blobClient.DownloadStreamingAsync();
                return downloadInfor.Value.Content;
            }
            return null;
        }
    }
}
