using AutoMapper;
using BlogPlatform.Models;
using BlogPlatform.Models.DTOs;

public class CommentProfile : Profile
{
    public CommentProfile()
    {
        CreateMap<CommentDto, Comment>()
        .ForMember(dest => dest.UserEmail, opt => opt.MapFrom(src => src.UserEmail))
        .ForMember(dest => dest.PostId, opt => opt.MapFrom(src => src.PostId))
        .ForMember(dest => dest.Content, opt => opt.MapFrom(src => src.Content))
        .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status));

        CreateMap<UpdateCommentDto, Comment>()
        .ForMember(dest => dest.Content, opt => opt.MapFrom(src => src.Content));






    }
}
