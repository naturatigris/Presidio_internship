using Bank.Contexts;
using Bank.Interface;
using Bank.Models;
using Bank.Repositories;
using Bank.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers().AddJsonOptions(opts =>
{
    opts.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
    opts.JsonSerializerOptions.WriteIndented = true;
});
builder.Services.AddHttpClient();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<BankContext>(opts =>
{
    opts.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddScoped<AccountRepository>();
builder.Services.AddTransient<AccountService>(); 
builder.Services.AddScoped<TransactionRequestRepositoy>();

builder.Services.AddScoped<ITransactionService, TransactionRequestRepositoy>();


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();

app.Run();
