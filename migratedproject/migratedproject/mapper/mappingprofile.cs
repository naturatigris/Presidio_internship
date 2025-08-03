using AutoMapper;
using ChienVHShopOnline.Models;
namespace ChienVHShopOnline.Mapper
{
  public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Order, OrderCreateDto>();
        CreateMap<OrderCreateDto, Order>();
    }
}  
}

