var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// ✅ Add CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyHeader()
              .AllowAnyMethod()
              .AllowAnyOrigin(); // For dev only! Use WithOrigins(...) in production
    });
});

// Add Razorpay HttpClient (optional best practice)
builder.Services.AddHttpClient();

var app = builder.Build();

// Use CORS
app.UseCors();

// Use Routing + Authorization if needed
app.UseRouting();
app.UseAuthorization();

// Map Controllers
app.MapControllers();

app.Run();
