using TrainingVideoPortal.Models;
using Microsoft.AspNetCore.Http;

namespace TrainingVideoPortal.Services
{
    public interface IVideoService
    {
        Task<IEnumerable<TrainingVideo>> GetAllAsync();
        Task UploadAsync(IFormFile file, string title, string description);    Task<(Stream? stream, string? contentType)> GetVideoStreamAsync(Guid id);


    }
}
