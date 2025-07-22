using Azure.Storage.Blobs;
using TrainingVideoPortal.Interfaces;
using TrainingVideoPortal.Models;
using Microsoft.AspNetCore.Http;

namespace TrainingVideoPortal.Services
{
    public class VideoService : IVideoService
    {
        private readonly IVideoRepository _videoRepository;
        private readonly IConfiguration _configuration;

        public VideoService(IVideoRepository videoRepository, IConfiguration configuration)
        {
            _videoRepository = videoRepository;
            _configuration = configuration;
        }

        public async Task<IEnumerable<TrainingVideo>> GetAllAsync()
        {
            return await _videoRepository.GetAllAsync();
        }
         public async Task<(Stream? stream, string? contentType)> GetVideoStreamAsync(Guid id)
{
    var video = await _videoRepository.GetByIdAsync(id);
    if (video == null || string.IsNullOrEmpty(video.BlobUrl))
        return (null, null);

    // Extract blob name from URL
    var blobUri = new Uri(video.BlobUrl);
    var blobName = Path.GetFileName(blobUri.LocalPath); // This assumes your blob URL ends with the blob name

    var blobServiceClient = new BlobServiceClient(_configuration.GetConnectionString("AzureBlobStorage"));
    var containerClient = blobServiceClient.GetBlobContainerClient("training-videos");
    var blobClient = containerClient.GetBlobClient(blobName);

    if (!await blobClient.ExistsAsync())
        return (null, null);

    var props = await blobClient.GetPropertiesAsync();
    var contentType = props.Value.ContentType ?? "application/octet-stream";

    var stream = await blobClient.OpenReadAsync();
    return (stream, contentType);
}

        public async Task UploadAsync(IFormFile file, string title, string description)
        {
            var blobServiceClient = new BlobServiceClient(_configuration["BlobStorage:ConnectionString"]);
            var containerClient = blobServiceClient.GetBlobContainerClient("training-videos");
            await containerClient.CreateIfNotExistsAsync();

            var blobClient = containerClient.GetBlobClient(Guid.NewGuid() + "-" + file.FileName);
            using var stream = file.OpenReadStream();
            await blobClient.UploadAsync(stream, overwrite: true);

            var video = new TrainingVideo
            {
                Title = title,
                Description = description,
                UploadDate = DateTime.UtcNow,
                BlobUrl = blobClient.Uri.ToString()
            };

            await _videoRepository.AddAsync(video);
        }
    }
}
