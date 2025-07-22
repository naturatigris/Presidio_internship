using Microsoft.EntityFrameworkCore;
using TrainingVideoPortal.Models;

namespace TrainingVideoPortal.contexts
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }

        public DbSet<TrainingVideo> TrainingVideos { get; set; }
    }
}
