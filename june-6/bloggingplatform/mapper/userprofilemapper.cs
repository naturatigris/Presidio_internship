using AutoMapper;
using BlogPlatform.Models;
using BlogPlatform.Models.DTOs;

namespace BlogPlatform.Helpers
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<UserDto, User>()
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.Role, opt => opt.MapFrom(src => src.Role))
                .ForMember(dest => dest.PasswordHash, opt => opt.Ignore());
            CreateMap<UpdateUserDto, User>()
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
            .ForMember(dest => dest.Role, opt => opt.Condition(src => src.Role != null))
            .ForMember(dest => dest.IsSuspended, opt => opt.Condition(src => src.IsSuspended.HasValue))
            .ForMember(dest => dest.SuspensionReason, opt => opt.Condition(src => src.SuspensionReason != null))
            .ForMember(dest => dest.SuspendedUntil, opt => opt.Condition(src => src.SuspendedUntil.HasValue))


            .ForMember(dest => dest.PasswordHash, opt => opt.Ignore()); 

            


        }
    }
}
