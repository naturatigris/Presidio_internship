using FileUploadAPI.Models;

namespace FileUploadAPI.Interfaces
{
    public interface IFileService
    {
        Task<FileData> UploadAsync(IFormFile file);
        Task<FileData> DownloadAsync(int id);
    }
}
