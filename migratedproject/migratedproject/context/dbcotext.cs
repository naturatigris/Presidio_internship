using Microsoft.EntityFrameworkCore;
using ChienVHShopOnline.Models;

namespace ChienVHShopOnline.Models
{
    public partial class ChienVHShopDBEntities : DbContext
    {
        public ChienVHShopDBEntities(DbContextOptions options)
                : base(options)
        {
        }
         public  DbSet<Category> Categories { get; set; }
        public  DbSet<Color> Colors { get; set; }
        public  DbSet<Model> Models { get; set; }
        public  DbSet<News> News { get; set; }
        public  DbSet<Order> Orders { get; set; }
        public  DbSet<OrderDetail> OrderDetails { get; set; }
        public  DbSet<Product> Products { get; set; }
        public  DbSet<User> Users { get; set; }
        public  DbSet<ContactU> ContactUs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(u => u.UserId);
                entity.HasMany(u => u.News).WithOne(n => n.User).HasForeignKey(n => n.UserId);
                entity.HasMany(u => u.Products).WithOne(p => p.User).HasForeignKey(p => p.UserId);
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(p => p.ProductId);
                entity.Property(e => e.ProductId).ValueGeneratedOnAdd();
                entity.Property(e => e.ProductName).HasMaxLength(250).IsUnicode();
                entity.Property(e => e.Image).HasMaxLength(250).IsUnicode();
                entity.Property(e => e.SellStartDate).HasPrecision(3);
                entity.Property(e => e.SellEndDate).HasPrecision(3);

                entity.HasMany(p => p.OrderDetails) .WithOne(od => od.Product).HasForeignKey(od => od.ProductID);
                entity.HasOne(p => p.Category).WithMany(c => c.Products).HasForeignKey(p => p.CategoryId).OnDelete(DeleteBehavior.SetNull); 
                entity.HasOne(p => p.Color).WithMany(c => c.Products).HasForeignKey(p => p.ColorId).OnDelete(DeleteBehavior.SetNull);
                entity.HasOne(p => p.Model).WithMany(m => m.Products).HasForeignKey(p => p.ModelId).OnDelete(DeleteBehavior.SetNull);
                entity.HasOne(p => p.User).WithMany(u => u.Products).HasForeignKey(p => p.UserId).OnDelete(DeleteBehavior.SetNull);
            });
            modelBuilder.Entity<Color>(entity =>
            {
                entity.HasKey(u => u.ColorId);
                entity.Property(c => c.ColorId).ValueGeneratedOnAdd();
                entity.Property(c => c.Color1).IsRequired(false).HasMaxLength(50);

                entity.HasMany(u => u.Products).WithOne(n => n.Color).HasForeignKey(n => n.ColorId);
            });
            modelBuilder.Entity<Model>(entity =>
            {
                entity.HasKey(e => e.ModelId);
                entity.Property(e => e.ModelId).ValueGeneratedOnAdd(); 
                entity.Property(e => e.Model1).HasMaxLength(50).IsUnicode(false); 

                entity.HasMany(e => e.Products).WithOne(p => p.Model).HasForeignKey(p => p.ModelId).OnDelete(DeleteBehavior.Restrict); 
            });

            modelBuilder.Entity<ContactU>(entity =>
            {
                entity.HasKey(u => u.id);
            });
            
            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(u => u.CategoryId);
                entity.Property(c => c.CategoryId).ValueGeneratedOnAdd();
                entity.Property(c => c.Name).IsRequired(false).HasMaxLength(50).IsUnicode();
                entity.HasMany(u => u.Products).WithOne(n => n.Category).HasForeignKey(n => n.CategoryId);

            });
            modelBuilder.Entity<News>(entity =>
            {
                entity.HasKey(n => n.NewsId);
                entity.Property(n => n.NewsId).ValueGeneratedOnAdd();
                entity.Property(n => n.UserId).IsRequired(false);
                entity.Property(n => n.Title).HasMaxLength(250).IsUnicode();
                entity.Property(n => n.ShortDescription).HasMaxLength(500).IsUnicode();
                entity.Property(n => n.Image).HasMaxLength(250).IsUnicode();
                entity.Property(n => n.Content).IsUnicode();
                entity.Property(n => n.CreatedDate).HasPrecision(3);
                entity.Property(n => n.Status).IsRequired(false);
                entity.HasOne(n => n.User).WithMany(u => u.News).HasForeignKey(n => n.UserId).OnDelete(DeleteBehavior.SetNull);
            });

            
            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasKey(o => o.OrderID);
                entity.Property(o => o.OrderID).ValueGeneratedOnAdd();
                entity.Property(o => o.OrderName).HasMaxLength(50).IsUnicode();
                entity.Property(o => o.OrderDate).HasPrecision(0);
                entity.Property(o => o.PaymentType).HasMaxLength(50).IsUnicode();
                entity.Property(o => o.Status).HasMaxLength(50).IsUnicode();
                entity.Property(o => o.CustomerName).HasMaxLength(50).IsUnicode();
                entity.Property(o => o.CustomerPhone).HasMaxLength(15).IsUnicode(false);
                entity.Property(o => o.CustomerEmail).HasMaxLength(100).IsUnicode();
                entity.Property(o => o.CustomerAddress).HasMaxLength(250).IsUnicode();
                entity.HasMany(o => o.OrderDetails).WithOne(od => od.Order).HasForeignKey(od => od.OrderID).OnDelete(DeleteBehavior.Cascade);
            });
            modelBuilder.Entity<OrderDetail>(entity =>
            {
                entity.HasKey(e => new { e.OrderID, e.ProductID });
                entity.Property(e => e.Price);
                entity.Property(e => e.Quantity);
                entity.HasOne(e => e.Order).WithMany(o => o.OrderDetails).HasForeignKey(e => e.OrderID).OnDelete(DeleteBehavior.Cascade);
                entity.HasOne(e => e.Product).WithMany(p => p.OrderDetails).HasForeignKey(e => e.ProductID).OnDelete(DeleteBehavior.Cascade);
            });





    base.OnModelCreating(modelBuilder);
}
}
}
