using System.Text;
using FirstAPI.Contexts;
using FirstAPI.Interfaces;
using FirstAPI.Misc;
using FirstAPI.Models;
using FirstAPI.Requirements;
using FirstAPI.Repositories;
using FirstAPI.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Npgsql.Replication.PgOutput.Messages;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.Google;
using log4net;
using log4net.Config;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(opt =>
{
    opt.SwaggerDoc("v1", new OpenApiInfo { Title = "Clinic API", Version = "v1" });
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
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
});
builder.Services.AddControllers(options =>
{
    options.Filters.Add<CustomExceptionFilter>();
})
.AddJsonOptions(opts =>
{
    opts.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
    opts.JsonSerializerOptions.WriteIndented = true;
});


builder.Services.AddDbContext<ClinicContext>(opts =>
{
    opts.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("YearsOfExperienceCheck", policy =>
        policy.Requirements.Add(new ExperienceRequirement(3)));
});

builder.Services.AddSingleton<IAuthorizationHandler, ExperienceRequirementHandler>();

#region  Repositories
builder.Services.AddTransient<IRepository<int, Doctor>, DoctorRepository>();
builder.Services.AddTransient<IRepository<int, Patient>, PatinetRepo>();
builder.Services.AddTransient<IRepository<int, Speciality>, SpecialityRepo>();
builder.Services.AddTransient<IRepository<string, Appointmnet>, AppointmnetRepo>();
builder.Services.AddTransient<IRepository<int, DoctorSpeciality>, DoctorSpecialityrepo>();
builder.Services.AddTransient<IRepository<string, User>, UserRepository>();
#endregion

#region Services
builder.Services.AddTransient<IDoctorService, DoctorServiceWithTransaction>();
builder.Services.AddTransient<IOtherContextFunctionities, OtherFuncinalitiesImplementation>();
builder.Services.AddTransient<IEncryptionService, EncryptionService>();
builder.Services.AddTransient<ITokenService, TokenService>();
builder.Services.AddTransient<IAuthenticationService, AuthenticationService>();
builder.Services.AddTransient<IPatientService, PatientService>();
builder.Services.AddTransient<IAppointmentService, AppointmentService>();




#endregion
#region AuthenticationFilter
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;     
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme; // use JWT also for challenges
})
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
})
.AddGoogle("Google", options =>
{
    options.ClientId = builder.Configuration["Authentication:Google:ClientId"];
    options.ClientSecret = builder.Configuration["Authentication:Google:ClientSecret"];
    options.CallbackPath = "/signin-google";
});

#endregion


#region  Misc
builder.Services.AddAutoMapper(typeof(UserProfile));
#endregion
builder.Logging.AddLog4Net();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();

