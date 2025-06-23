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
                .ForMember(dest => dest.PasswordHash, opt => opt.Ignore())
                .ForMember(dest => dest.ProfileImage, opt => opt.Ignore())
                .ForMember(dest => dest.Location, opt => opt.Ignore())
                .ForMember(dest => dest.Website, opt => opt.Ignore())
                .ForMember(dest => dest.Bio, opt => opt.Ignore())
                .ForAllMembers(opt => opt.Condition((src, dest, srcMember) => srcMember != null));




            CreateMap<UpdateUserDto, User>()
            .ForMember(dest => dest.Name, opt => opt.Condition(src => src.Name!=null))
            .ForMember(dest => dest.Role, opt => opt.Condition(src => src.Role != null))
            .ForMember(dest => dest.IsSuspended, opt =>
            {
                opt.PreCondition(src => src.IsSuspended.HasValue);
                opt.MapFrom(src => src.IsSuspended.Value);
            })
            .ForMember(dest => dest.SuspensionReason, opt => opt.Condition(src => src.SuspensionReason != null))
            .ForMember(dest => dest.SuspendedUntil, opt => opt.Condition(src => src.SuspendedUntil.HasValue))
            .ForMember(dest => dest.Bio, opt => opt.Condition(src => src.Bio != null))
            .ForMember(dest => dest.Location, opt => opt.Condition(src => src.Location != null))
            .ForMember(dest => dest.Website, opt => opt.Condition(src => src.Website != null))
                .ForMember(dest => dest.ProfileImage, opt => opt.Ignore())


            .ForMember(dest => dest.PasswordHash, opt => opt.Ignore()); 

            


        }
    }
}
