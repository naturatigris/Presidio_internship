using AutoMapper;
using Organization.Models;
using Organization.Models.DTOs;

namespace Organization.Helpers
{
    public class EmployeeProfile : Profile
    {
        public EmployeeProfile()
        {
            CreateMap<HREmployeeDto, HREmployee>()
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.Department, opt => opt.MapFrom(src => src.Department))
                .ForMember(dest => dest.Role, opt => opt.MapFrom(src => "Admin"))

                .ForMember(dest => dest.PasswordHash, opt => opt.Ignore());
                


            CreateMap<ITEmployeeDto, ITEmployee>()
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.Department, opt => opt.MapFrom(src => src.Department))
                .ForMember(dest => dest.Role, opt => opt.MapFrom(src =>"Worker"))
                .ForMember(dest => dest.Specializations, opt => opt.MapFrom(src => src.Specializations))
                .ForMember(dest => dest.PasswordHash, opt => opt.Ignore());

        CreateMap<SpecializationDto, Specialization>()
            .ForMember(dest => dest.Id, opt => opt.Ignore())  // Id should not be mapped from DTO
            .ForMember(dest => dest.ITEmployeeEmail, opt => opt.Ignore())  // set this manually
            .ForMember(dest => dest.ITEmployee, opt => opt.Ignore());  // also ignore navigation properties


        }
    }
}
