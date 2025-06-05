using FileUploadAPI.Interfaces;
using FileUploadAPI.Models;
using FileUploadAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace FileUploadAPI.Services
{
    public class FileService : IFileService
    {
        private readonly FileDbContext _context;

        public FileService(FileDbContext context)
        {
            _context = context;
        }

        public async Task<FileData> UploadAsync(IFormFile file)
        {
            using var ms = new MemoryStream();
            await file.CopyToAsync(ms);

            var fileData = new FileData
            {
                FileName = file.FileName,
                ContentType = file.ContentType,
                Data = ms.ToArray()
            };

            _context.Files.Add(fileData);
            await _context.SaveChangesAsync();
            return fileData;
        }

        public async Task<FileData> DownloadAsync(int id)
        {
            return await _context.Files.FindAsync(id);
        }
    }
}
