using AutoMapper;
using BlogPlatform.Models;
using BlogPlatform.Models.DTOs;

public class PostProfile : Profile
{
    public PostProfile()
    {
        CreateMap<Postto, Post>()
            .ForMember(dest => dest.UserEmail, opt => opt.MapFrom(src => src.UserEmail))
            .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title))
            .ForMember(dest => dest.Slug, opt => opt.MapFrom(src => src.Slug))
            .ForMember(dest => dest.Content, opt => opt.MapFrom(src => src.Content))
            .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status))
            .ForMember(dest => dest.Categories, opt => opt.Ignore())
           .ForMember(dest => dest.Images, opt => opt.Ignore());


CreateMap<PostUpdateDto, Post>()
    .ForMember(dest => dest.Title, opt => opt.Condition(src => src.Title != null))
    .ForMember(dest => dest.Slug, opt => opt.Condition(src => src.Slug != null))
    .ForMember(dest => dest.Content, opt => opt.Condition(src => src.Content != null))
    .ForMember(dest => dest.Status, opt => opt.Condition(src => src.Status != null))
    .ForMember(dest => dest.Images, opt => opt.Ignore());



    }
}
