using Organization.Interfaces;
using Organization.Models;
using Organization.Contexts;
using Organization.Models.DTOs;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Organization.Services
{
    public class FileService : IFileService
    {
        private readonly OrganizationContext _context;
        private readonly IMapper _mapper;

        public FileService(OrganizationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<UploadedFile> UploadAsync(FileUploadDto fileDto)
        {
            var fileData = _mapper.Map<UploadedFile>(fileDto);

            _context.UploadedFiles.Add(fileData);
            await _context.SaveChangesAsync();
            return fileData;
        }

        public async Task<UploadedFile> DownloadAsync(Guid id)
        {
            return await _context.UploadedFiles.FindAsync(id);
        }
    }
    
}
