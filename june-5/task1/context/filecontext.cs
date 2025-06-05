using FileUploadAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FileUploadAPI.Data
{
    public class FileDbContext : DbContext
    {
        public FileDbContext(DbContextOptions<FileDbContext> options) : base(options) { }

        public DbSet<FileData> Files { get; set; }
    }
}
