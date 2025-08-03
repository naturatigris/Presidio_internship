using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Services;
using ChienVHShopOnline.Repositories;
using ChienVHShopOnline.Models;
using ChienVHShopOnline.Mapper;
using AutoMapper;


using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ChienVHShopDBEntities>(opts =>
    opts.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
);
//repositories
builder.Services.AddScoped<IRepository<int, User>, UserRepository>();
builder.Services.AddScoped<IRepository<int, Color>, ColorRepository>();
builder.Services.AddScoped<IRepository<int, ContactU>, ContactURepository>();
builder.Services.AddScoped<IRepository<int, News>, NewsRepository>();
builder.Services.AddScoped<IRepository<int, Category>, CategoryRepository>();
builder.Services.AddScoped<IRepository<int, Order>, OrderRepository>();
builder.Services.AddScoped<IRepository<int, OrderDetail>, OrderDetailRepository>();
builder.Services.AddScoped<IRepository<int, Product>, ProductRepository>();




//services
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<ICategoryService, CategoryService>();
builder.Services.AddScoped<IColorService, ColorService>();
builder.Services.AddScoped<IContactUsService, ContactUsService>();
builder.Services.AddScoped<INewsService, NewsService>();
builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<RefreshTokenService>();
builder.Services.AddScoped<IAuthenticationService, AuthenticationService>();
builder.Services.AddScoped<ITokenService, TokenService>();



//misc
builder.Services.AddHttpClient();
builder.Services.AddAutoMapper(typeof(MappingProfile));
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

//cors
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

//serialization
builder.Services.AddControllers().AddJsonOptions(x =>
        x.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles);
; 
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(); 

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger(); 
    app.UseSwaggerUI(); 
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");


app.UseAuthorization();

app.MapControllers(); 

app.Run();
