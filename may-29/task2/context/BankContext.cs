using Microsoft.EntityFrameworkCore;
using Bank.Models;

namespace Bank.Contexts
{
    public class BankContext : DbContext
    {
        public BankContext(DbContextOptions options) : base(options) { }

        public DbSet<Account> accounts { get; set; }
        public DbSet<Transaction> transactions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Account>()
                .HasKey(a => a.Id);

            modelBuilder.Entity<Transaction>()
                .HasKey(t => t.Id);
            modelBuilder.Entity<Transaction>()
            .Property(t => t.Id)
            .HasDefaultValueSql("gen_random_uuid()");


            modelBuilder.Entity<Transaction>()
                .HasOne(t => t.SourceAccount)
                .WithMany()
                .HasForeignKey(t => t.SourceAccountId)
                .OnDelete(DeleteBehavior.Restrict); 

            modelBuilder.Entity<Transaction>()
                .HasOne(t => t.DestinationAccount)
                .WithMany()
                .HasForeignKey(t => t.DestinationAccountId)
                .OnDelete(DeleteBehavior.Restrict); 
        }
    }
}
