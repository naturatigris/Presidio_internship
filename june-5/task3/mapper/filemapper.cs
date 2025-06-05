using AutoMapper;
using Organization.Models;
using Organization.Models.DTOs;

namespace Organization.Helpers
{
    public class FileProfile : Profile
    {
        public FileProfile()
        {
            CreateMap<FileUploadDto, UploadedFile>();
        }
    }
}
