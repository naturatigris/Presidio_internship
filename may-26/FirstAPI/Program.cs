var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();                      // Generates the Swagger JSON
    app.UseSwaggerUI();                   // Serves Swagger UI at /swagger
}

// Configure the HTTP request pipeline.


app.MapControllers();

app.Run();
