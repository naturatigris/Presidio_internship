using Microsoft.EntityFrameworkCore;
using Azure.Storage.Blobs;
using TrainingVideoPortal.contexts;
using TrainingVideoPortal.Interfaces;
using TrainingVideoPortal.Repositories;
using TrainingVideoPortal.Services;

var builder = WebApplication.CreateBuilder(args);

// Add Controllers
builder.Services.AddControllers();

// Swagger (OpenAPI)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// DB Context
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

//cors
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});


// Azure Blob Storage Client
builder.Services.AddSingleton(x =>
{
    var config = x.GetRequiredService<IConfiguration>();
    var blobConnString = config.GetConnectionString("AzureBlobStorage");
    return new BlobServiceClient(blobConnString);
});

// Dependency Injection for Repositories & Services
builder.Services.AddScoped<IVideoRepository, VideoRepository>();
builder.Services.AddScoped<IVideoService, VideoService>();

var app = builder.Build();
app.UseCors("AllowAngularApp");


// Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
