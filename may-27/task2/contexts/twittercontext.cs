using Microsoft.EntityFrameworkCore;

public class TwitterDbContext : DbContext
{
    public TwitterDbContext(DbContextOptions<TwitterDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<Tweet> Tweets { get; set; }
    public DbSet<Like> Likes { get; set; }
    public DbSet<Hashtag> Hashtags { get; set; }
    public DbSet<TweetHashtagMapping> TweetHashtags { get; set; }
    public DbSet<Follow> Follows { get; set; }
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);

    modelBuilder.Entity<Follow>()
        .HasOne(f => f.Follower)
        .WithMany(u => u.Following)
        .HasForeignKey(f => f.FollowerId)
        .OnDelete(DeleteBehavior.Restrict);

    modelBuilder.Entity<Follow>()
        .HasOne(f => f.Followee)
        .WithMany(u => u.Followers)
        .HasForeignKey(f => f.FolloweeId)
        .OnDelete(DeleteBehavior.Restrict);
}


}
