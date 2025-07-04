using Microsoft.EntityFrameworkCore;
using BlogPlatform.Contexts;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text.Json.Serialization;
using BlogPlatform.Interfaces;
using BlogPlatform.Helpers;
using BlogPlatform.Repositories;
using BlogPlatform.Services;
using Microsoft.AspNetCore.Mvc;
using BlogPlatform.Hubs;
using BlogPlatform.Models;
using BlogPlatform.Validations;
using System.Security.Claims;
using Serilog;
using System.Diagnostics;
using System.Text;
using BlogPlatform.Filters;
using BlogPlatform.Middleware;
using Microsoft.AspNetCore.RateLimiting;
using System.Threading.RateLimiting;









var builder = WebApplication.CreateBuilder(args);
//dbcontext
builder.Services.AddDbContext<BlogPlatformContext>(opts =>
    opts.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
);
// Controllers + JSON
builder.Services.AddControllers(options =>
{
    options.Filters.Add<ModelStateValidationFilter>();
        options.Filters.Add<SanitizeInputFilter>();

})

    .AddJsonOptions(opt => opt.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
//https
builder.Services.AddHttpContextAccessor();


// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(opt =>
{
    opt.SwaggerDoc("v1", new OpenApiInfo { Title = "Blogplatform API", Version = "v1" });
    opt.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "bearer"
    });
    opt.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" }
            },
            new string[] { }
        }
    });
});

//Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
policy.WithOrigins("http://localhost:5147", "https://localhost:5147","http://127.0.0.1:55100","http://localhost:4200","http://localhost:8080")
       .AllowAnyHeader()
       .AllowAnyMethod()
       .AllowCredentials();
    });
});
//authorization custom policy
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("OwnerOrAdmin", policy =>
        policy.RequireAssertion(context =>
        {
            var role = context.User.FindFirst(ClaimTypes.Role)?.Value;
            var email = context.User.FindFirst(ClaimTypes.Email)?.Value;
            return role == "Admin" || (email != null && context.Resource?.ToString() == email);
        }));
});
//signalR
builder.Services.AddSignalR();



//Api Versioning
builder.Services.AddApiVersioning(options =>
{
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.ReportApiVersions = true;
});


// Configure Serilog
Log.Logger = new LoggerConfiguration()
    .Enrich.FromLogContext()
    .WriteTo.Console() // Write to terminal
    .WriteTo.File("logs/log.txt", rollingInterval: RollingInterval.Day) // File log
    .CreateLogger();

builder.Host.UseSerilog(); // Plug Serilog into ASP.NET Core

//authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateAudience = false,
                        ValidateIssuer = false,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Keys:JwtTokenKey"]))
                    };
                });


//automapper
builder.Services.AddAutoMapper(typeof(UserProfile));
builder.Services.AddAutoMapper(typeof(PostProfile));
builder.Services.AddAutoMapper(typeof(CommentProfile));


//repositories
builder.Services.AddScoped<IRepository<string, User>, UserRepository>();
builder.Services.AddScoped<IUserAuditLogRepository, UserAuditLogRepository>();
builder.Services.AddScoped<IRepository<Guid, Comment>, CommentRepository>();
builder.Services.AddScoped<IRepository<Guid, Post>, PostRepository>();
builder.Services.AddScoped<IRepository<Guid, Image>, ImageRepository>();
builder.Services.AddScoped<IRepository<Guid, Category>, CategoryRepository>();
builder.Services.AddScoped<ICommentAuditLogRepository, CommentAuditLogRepository>();
builder.Services.AddScoped<IPostAuditLogRepository, PostAuditLogRepository>();
builder.Services.AddScoped<IImageAuditLogRepository, ImageAuditLogRepository>();
builder.Services.AddScoped<IUserAuditLogRepository, UserAuditLogRepository>();
builder.Services.AddScoped<IRefreshTokenRepository, RefreshTokenRepository>();





//services
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IPostService, PostService>();
builder.Services.AddScoped<IImageService, ImageService>();
builder.Services.AddScoped<ICommentService, CommentService>();
builder.Services.AddScoped<IPasswordHasher, PasswordHasher>();
builder.Services.AddScoped<IUserValidationService, UserValidationService>();
builder.Services.AddScoped<IAuthenticationService, AuthenticationService>();
builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddScoped<ICategoryService, CategoryService>();
builder.Services.AddScoped<RefreshTokenService>();
builder.Services.AddScoped<SanitizeInputFilter>();
builder.Services.AddScoped<CommentLikeService>();
builder.Services.AddScoped<PostLikeService>();




//ratelimiting
builder.Services.AddRateLimiter(options =>
{
    options.AddPolicy("fixed", context =>
    {
        // Determine key (user email if available, else IP)
        var userEmail = context.User?.FindFirst(ClaimTypes.Email)?.Value;
        var key = !string.IsNullOrEmpty(userEmail)
            ? userEmail
            : context.Connection.RemoteIpAddress?.ToString() ?? "unknown";

        return RateLimitPartition.GetFixedWindowLimiter(key, _ => new FixedWindowRateLimiterOptions
        {
            PermitLimit = 1000,
            Window = TimeSpan.FromHours(1),
            QueueLimit = 0,
            AutoReplenishment = true
        });
    });
});








var app = builder.Build();
app.UseMiddleware<GlobalExceptionMiddleware>();

app.UseRateLimiter();



if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowFrontend");

app.Use(async (context, next) =>
{
    var stopwatch = Stopwatch.StartNew();

    try
    {
        await next(); 
        stopwatch.Stop();

        Log.Information("HTTP {Method} {Path} responded {StatusCode} in {Elapsed}ms - User: {User}",
            context.Request.Method,
            context.Request.Path,
            context.Response.StatusCode,
            stopwatch.ElapsedMilliseconds,
            context.User.Identity?.Name ?? "Anonymous");
    }
    catch (Exception ex)
    {
        stopwatch.Stop();
        Log.Error(ex, "Unhandled exception for {Method} {Path} - User: {User}",
            context.Request.Method,
            context.Request.Path,
            context.User.Identity?.Name ?? "Anonymous");
        throw; // rethrow so the exception still returns 500
    }
});
app.UseSerilogRequestLogging(); // Logs: HTTP GET /api/posts responded 200 in 44.2 ms

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapHub<PostHub>("/notification"); // Add this line



app.Run();

