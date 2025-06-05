using Microsoft.EntityFrameworkCore;
using Organization.Models;

namespace Organization.Contexts
{
    public class OrganizationContext : DbContext
    {
        public OrganizationContext(DbContextOptions<OrganizationContext> options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<HREmployee> HREmployees { get; set; }
        public DbSet<ITEmployee> ITEmployees { get; set; }
        public DbSet<Specialization> Specializations { get; set; }
        public DbSet<UploadedFile> UploadedFiles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure Email as the key for Employee and its derived types
            modelBuilder.Entity<Employee>()
                        .HasKey(e => e.Email);

            // Configure the TPH inheritance - set derived types base on Employee
            modelBuilder.Entity<HREmployee>()
                        .HasBaseType<Employee>();

            modelBuilder.Entity<ITEmployee>()
                        .HasBaseType<Employee>();

            // Configure Specialization foreign key relationship using email as FK
            modelBuilder.Entity<Specialization>()
                        .HasOne(s => s.ITEmployee)
                        .WithMany(e => e.Specializations)
                        .HasForeignKey(s => s.ITEmployeeEmail)
                        .IsRequired();

            // Optional: To avoid EF creating separate tables for derived types (TPH)
            modelBuilder.Entity<Employee>()
                        .HasDiscriminator<string>("EmployeeType")
                        .HasValue<Employee>("Employee")
                        .HasValue<HREmployee>("HR")
                        .HasValue<ITEmployee>("IT");
                        
            modelBuilder.Entity<HREmployee>()
                .HasMany(hr => hr.UploadedFiles)
                .WithOne(file => file.HREmployee)
                .HasForeignKey(file => file.Email)
                .OnDelete(DeleteBehavior.Cascade); // Optional: cascade delete files when HR employee deleted

        }
    }
}
