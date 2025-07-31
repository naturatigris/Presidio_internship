using System;
using Microsoft.EntityFrameworkCore;
using DocumentSharingSystem.Models;
using System.Threading.Tasks;
using DocumentSharingSystem.Models.DTOs;

namespace DocumentSharingSystem.Contexts;

public class DocumentSharingSystemContext : DbContext
{
    public DocumentSharingSystemContext(DbContextOptions options) : base(options)
    {

    }
    public DbSet<User> users { get; set; }
    public DbSet<Document> documents { get; set; }
    public DbSet<DocumentTableLog> documents_table_logs { get; set; }
    public DbSet<UserTableLog> users_table_logs { get; set; }
    public DbSet<RefreshToken> refresh_tokens { get; set; }
    public DbSet<Team> teams { get; set; }
    public DbSet<InactivityAlert> InactivityAlerts { get; set; }
    public DbSet<DocumentRestoreRequest> DocumentRestoreRequests { get; set; }



    public async Task<PaginationDataDTO<User>> UsersPagination_Admin(int pageNo, int pageSize)
    {
        return new PaginationDataDTO<User>
        {
            Data = await this.Set<User>().FromSqlInterpolated($"SELECT * FROM users order by \"CreatedAt\" OFFSET {pageSize * (pageNo - 1)} LIMIT {pageSize}").ToListAsync(),
            TotalRecords = await this.Set<User>().CountAsync()
        };
    }
    public async Task<PaginationDataDTO<Document>> DocumentsPagination_Admin(int pageNo, int pageSize)
    {
        return new PaginationDataDTO<Document>
        {
            Data = await this.Set<Document>().FromSqlInterpolated($"SELECT * FROM Documents order by \"CreatedAt\" OFFSET {pageSize * (pageNo - 1)} LIMIT {pageSize}").ToListAsync(),
            TotalRecords = await this.Set<Document>().CountAsync()
        }; 
    }
    public async Task<PaginationDataDTO<User>> UsersPagination(int pageNo, int pageSize)
    {
        return new PaginationDataDTO<User>
        {
            Data = await this.Set<User>().FromSqlInterpolated($"SELECT * FROM users where \"IsDeleted\"=false order by \"CreatedAt\" OFFSET {pageSize * (pageNo - 1)} LIMIT {pageSize}").ToListAsync(),
            TotalRecords = await this.Set<User>().CountAsync(u => !u.IsDeleted)
        };
    }
    public async Task<PaginationDataDTO<Document>> DocumentsPagination(int pageNo, int pageSize)
    {
        return new PaginationDataDTO<Document>
        {
            Data = await this.Set<Document>().FromSqlInterpolated($"SELECT * FROM Documents where \"IsDeleted\"=false order by \"CreatedAt\" OFFSET {pageSize * (pageNo - 1)} LIMIT {pageSize}").ToListAsync(),
            TotalRecords = await this.Set<Document>().CountAsync(d => !d.IsDeleted)
        }; 
    }
public async Task<int?> GetDaysBetweenLoginsAsync(Guid userId)
{
    var conn = this.Database.GetDbConnection();
    await conn.OpenAsync();

    using var cmd = conn.CreateCommand();
    cmd.CommandText = @"
        SELECT DATE_PART('day',
            MAX(CASE WHEN rn = 1 THEN lastloginat END) -
            MAX(CASE WHEN rn = 2 THEN lastloginat END)
        ) AS days_between_logins
        FROM (
            SELECT 
                ""ModifiedUserId"",
                (regexp_match(""OldValue"", 'LastloginAt=([^;]+);'))[1]::timestamp AS lastloginat,
                ROW_NUMBER() OVER (
                    PARTITION BY ""ModifiedUserId"" 
                    ORDER BY ""ModifiedAt"" DESC
                ) AS rn
            FROM users_table_logs
            WHERE ""OldValue"" ILIKE '%LastloginAt=%'
        ) AS ranked
        WHERE ""ModifiedUserId"" = @userId
            AND lastloginat IS NOT NULL
            AND lastloginat != '-infinity'
            AND rn <= 2
        GROUP BY ""ModifiedUserId""
        HAVING COUNT(*) = 2;
    ";

    var param = cmd.CreateParameter();
    param.ParameterName = "@userId";
    param.Value = userId;
    param.DbType = System.Data.DbType.Guid;
    cmd.Parameters.Add(param);

    var result = await cmd.ExecuteScalarAsync();
    return result != DBNull.Value ? Convert.ToInt32(result) : (int?)null;
}


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Document>().HasOne(d => d.CreatedByUser)
                                        .WithMany(u => u.CreatedDocuments)
                                        .HasForeignKey(d => d.CreatedByUserId)
                                        .HasConstraintName("FK_Documents_Users_Creation")
                                        .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<User>().HasOne(d => d.CreatedByUser)
                                        .WithMany(u => u.CreatedUsers)
                                        .HasForeignKey(d => d.CreatedByUserId)
                                        .HasConstraintName("FK_Users_Users_Creation")
                                        .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Document>().HasMany(d => d.UpdatedLogs)
                                        .WithOne(ut => ut.ModifiedDocument)
                                        .HasForeignKey(d => d.ModifiedDocumentId)
                                        .HasConstraintName("FK_DocumentTableLog_Document")
                                        .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<User>().HasOne(u => u.Team)
                                        .WithMany(t => t.TeamMembers)
                                        .HasForeignKey(u => u.TeamId)
                                        .HasConstraintName("FK_Team_User")
                                        .OnDelete(DeleteBehavior.Restrict);
        modelBuilder.Entity<Document>().HasOne(d => d.Team)
                                        .WithMany(t => t.TeamDocuments)
                                        .HasForeignKey(d => d.TeamId)
                                        .HasConstraintName("FK_Team_Document")
                                        .OnDelete(DeleteBehavior.Restrict);
        modelBuilder.Entity<Team>().HasOne(t => t.CreatedByUser)
                                        .WithMany(u => u.CreatedTeams)
                                        .HasForeignKey(t => t.CreatedByUserId)
                                        .HasConstraintName("FK_Team_Document")
                                        .OnDelete(DeleteBehavior.Restrict);


        modelBuilder.Entity<DocumentTableLog>().HasOne(dtl => dtl.ModifiedByUser)
                                            .WithMany(u => u.UpdatedDocumentLogs)
                                            .HasForeignKey(dtl => dtl.ModifiedByUserId)
                                            .HasConstraintName("FK_DocumentTableLog_User")
                                            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<UserTableLog>().HasOne(utl => utl.ModifiedByUser)
                                            .WithMany(u => u.UpdatedUserLogs)
                                            .HasForeignKey(utl => utl.ModifiedByUserId)
                                            .HasConstraintName("FK_UserTableLog_User_ModifiedBy")
                                            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<UserTableLog>().HasOne(utl => utl.ModifiedUser)
                                            .WithMany(u => u.UpdatedByUserLogs)
                                            .HasForeignKey(utl => utl.ModifiedUserId)
                                            .HasConstraintName("FK_UserTableLog_User_Modified")
                                            .OnDelete(DeleteBehavior.Restrict);
        modelBuilder.Entity<InactivityAlert>().HasOne(i => i.User)
                                            .WithMany(u => u.InactivityAlerts)
                                            .HasForeignKey(i => i.UserId)
                                            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<InactivityAlert>().HasOne(i => i.DismissedByUser)
                                            .WithMany()
                                            .HasForeignKey(i => i.DismissedByUserId)
                                            .OnDelete(DeleteBehavior.Restrict);


        modelBuilder.Entity<User>().HasIndex(u => u.Email).IsUnique();
        modelBuilder.Entity<RefreshToken>().HasKey(rt => rt.UserId);
        modelBuilder.Entity<DocumentRestoreRequest>().HasKey(e => e.Id);
        modelBuilder.Entity<DocumentRestoreRequest>().HasOne(e => e.Document)
                                            .WithMany() 
                                            .HasForeignKey(e => e.DocumentId)
                                            .OnDelete(DeleteBehavior.Cascade);

         modelBuilder.Entity<DocumentRestoreRequest>().HasOne(e => e.RequestedByUser)
                                            .WithMany() 
                                            .HasForeignKey(e => e.RequestedByUserId)
                                            .OnDelete(DeleteBehavior.Restrict);

         modelBuilder.Entity<DocumentRestoreRequest>().HasOne(e => e.ReviewedByUser)
                                            .WithMany() 
                                            .HasForeignKey(e => e.ReviewedByUserId)
                                            .OnDelete(DeleteBehavior.Restrict);




    }
}
