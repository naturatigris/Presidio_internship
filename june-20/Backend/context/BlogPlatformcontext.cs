using Microsoft.EntityFrameworkCore;
using BlogPlatform.Models; 
using BlogPlatform.Models.AuditLogs;


namespace BlogPlatform.Contexts
{
    public class BlogPlatformContext : DbContext
    {
        public BlogPlatformContext(DbContextOptions<BlogPlatformContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<UserAuditLog> UserAuditLogs { get; set; }
        public DbSet<PostAuditLog> PostAuditLogs { get; set; }
        public DbSet<CommentAuditLog> CommentAuditLogs { get; set; }
        public DbSet<ImageAuditLog> ImageAuditLogs { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
        public DbSet<Category> Categories { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // USER
            modelBuilder.Entity<User>()
                .HasKey(u => u.Email);

            modelBuilder.Entity<User>()
                .Property(u => u.Email)
                .IsRequired();

            modelBuilder.Entity<User>()
                .HasMany(u => u.Posts)      // specify the navigation property here
                .WithOne(p => p.User)
                .HasForeignKey(p => p.UserEmail)
                .HasPrincipalKey(u => u.Email)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<User>()
                .HasMany<Comment>(u => u.Comments)
                .WithOne(c => c.User)
                .HasForeignKey(c => c.UserEmail)
                .OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<User>()
                .Property(u => u.Role)
                .HasDefaultValue("User");

            modelBuilder.Entity<User>()
                .Property(u => u.IsSuspended)
                .HasDefaultValue(false);
            modelBuilder.Entity<User>()
            .Property(u => u.Bio)
            .HasMaxLength(500);

            modelBuilder.Entity<User>()
                .Property(u => u.ProfileImage)
                .HasColumnType("bytea");




            // POST
            modelBuilder.Entity<Post>()
                .HasKey(p => p.Id);

            modelBuilder.Entity<Post>()
                .Property(p => p.UserEmail)
                .IsRequired();

            modelBuilder.Entity<Post>()
                .HasMany(p => p.Images)
                .WithOne(i => i.Post)
                .HasForeignKey(i => i.PostId)
                .OnDelete(DeleteBehavior.Cascade);


            modelBuilder.Entity<Post>()
                .HasMany(p => p.Comments)
                .WithOne(c => c.Post)
                .HasForeignKey(c => c.PostId)
                .OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<Post>()
                .HasMany(p => p.Categories)
                .WithMany(c => c.Posts)
                .UsingEntity(j => j.ToTable("PostCategories")); // Optional: Name the join table



            // IMAGE
            modelBuilder.Entity<Image>()
                .HasKey(i => i.Id);

            modelBuilder.Entity<Image>()
                .Property(i => i.Content)
                .IsRequired();

            // COMMENT
            modelBuilder.Entity<Comment>()
                .HasKey(c => c.Id);

            modelBuilder.Entity<Comment>()
                .Property(c => c.UserEmail)
                .IsRequired();
            //REFRESH TOKEN
            modelBuilder.Entity<RefreshToken>()
            .HasIndex(r => r.Token)
            .IsUnique();

        }
    }
}
