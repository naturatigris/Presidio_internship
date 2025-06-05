using Organization.Models;
using Organization.Models.DTOs;


namespace Organization.Interfaces
{
    public interface IFileService
    {
        Task<UploadedFile> UploadAsync(FileUploadDto file);
        Task<UploadedFile> DownloadAsync(Guid id);
    }
}
