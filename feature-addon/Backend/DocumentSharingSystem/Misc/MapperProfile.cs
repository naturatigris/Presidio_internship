using AutoMapper;
using DocumentSharingSystem.Models;
using DocumentSharingSystem.Models.Dtos;
using DocumentSharingSystem.Models.DTOs;
using Microsoft.Extensions.Options;

namespace DocumentSharingSystem.Misc
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<UserAddRequestDTO, UserAddServiceDTO>();
            CreateMap<UserUpdateRequestDTO, UserAddServiceDTO>()
            .ForMember(u => u.LastloginAt, opt => opt.Ignore())

            .ForMember(u => u.Password, opt => opt.Ignore());

            CreateMap<User, UserResponseDTO>()
                .ForMember(u => u.CreatedByUserName, act => act.MapFrom(src => src.CreatedByUser != null ? src.CreatedByUser.Name : ""))
                .ForMember(u => u.LastUpdatedByUserName, act => act.MapFrom(src => src.LastUpdatedByUser != null ? src.LastUpdatedByUser.Name : ""))
                .ForMember(u => u.CreatedByUserEmail, act => act.MapFrom(src => src.CreatedByUser != null ? src.CreatedByUser.Email : ""))
                .ForMember(u => u.LastUpdatedByUserEmail, act => act.MapFrom(src => src.LastUpdatedByUser != null ? src.LastUpdatedByUser.Email : ""))
                .ForMember(u => u.TeamName, act => act.MapFrom(src => src.Team != null ? src.Team.Name : ""));

            CreateMap<UserAddServiceDTO, User>()
                .ForMember(u => u.Password, opt => opt.Ignore())
                .ForMember(u => u.CreatedByUserId, act => act.MapFrom(src => src.LastUpdatedByUserId))
                .ForMember(u => u.LastUpdatedByUserId, act => act.MapFrom(src => src.LastUpdatedByUserId))
                .ForMember(u => u.CreatedAt, act => act.MapFrom(src => DateTime.UtcNow))
                .ForMember(u => u.LastUpdatedAt, act => act.MapFrom(src => DateTime.UtcNow))
                .ForMember(u => u.Id, act => act.MapFrom(src => Guid.NewGuid()));

            CreateMap<Document, DocumentReponseDTO>()
                .ForMember(d => d.CreatedByUserName, act => act.MapFrom(src => src.CreatedByUser != null ? src.CreatedByUser.Name : ""))
                .ForMember(d => d.LastUpdatedByUserName, act => act.MapFrom(src => src.LastUpdatedByUser != null ? src.LastUpdatedByUser.Name : ""))
                .ForMember(d => d.CreatedByUserEmail, act => act.MapFrom(src => src.CreatedByUser != null ? src.CreatedByUser.Email : ""))
                .ForMember(d => d.LastUpdatedByUserEmail, act => act.MapFrom(src => src.LastUpdatedByUser != null ? src.LastUpdatedByUser.Email : ""))
                .ForMember(d => d.TeamName, act => act.MapFrom(src => src.Team != null ? src.Team.Name : ""));

            CreateMap<Team, TeamResponseDTO>()
                .ForMember(t => t.CreatedByUserName, act => act.MapFrom(src => src.CreatedByUser != null ? src.CreatedByUser.Name : ""))
                .ForMember(t => t.LastUpdatedByUserName, act => act.MapFrom(src => src.LastUpdatedByUser != null ? src.LastUpdatedByUser.Name : ""))
                .ForMember(t => t.CreatedByUserEmail, act => act.MapFrom(src => src.CreatedByUser != null ? src.CreatedByUser.Email : ""))
                .ForMember(t => t.LastUpdatedByUserEmail, act => act.MapFrom(src => src.LastUpdatedByUser != null ? src.LastUpdatedByUser.Email : ""));
            CreateMap<DocumentRestoreRequest, DocumentRestoreRequestDto>()
                .ForMember(d => d.OriginalFileName, act => act.MapFrom(src => src.Document != null ? src.Document.OriginalFileName : ""))
                .ForMember(d => d.RequestedByUserName, act => act.MapFrom(src => src.RequestedByUser != null ? src.RequestedByUser.Name : ""))
                .ForMember(d => d.ReviewedByUserName, act => act.MapFrom(src => src.ReviewedByUser != null ? src.ReviewedByUser.Name : ""));

        }
    }
}