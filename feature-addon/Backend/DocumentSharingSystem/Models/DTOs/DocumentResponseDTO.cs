using System;

namespace DocumentSharingSystem.Models.DTOs;

public class DocumentReponseDTO
{
    public Guid Id { get; set; } = Guid.Empty;
    public string StoredFileName { get; set; } = string.Empty;
    public string OriginalFileName { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? Visibility { get; set; }
    public long? TeamId { get; set; }
    public string TeamName { get; set; } = string.Empty;
    public bool IsDeleted { get; set; } = false;
    public Guid CreatedByUserId { get; set; }
    public string CreatedByUserName { get; set; } = string.Empty;
    public string CreatedByUserEmail { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public Guid LastUpdatedByUserId { get; set; }
    public string LastUpdatedByUserName { get; set; } = string.Empty;
    public string LastUpdatedByUserEmail { get; set; } = string.Empty;
    public DateTime LastUpdatedAt { get; set; } = DateTime.UtcNow;

    public bool IsAcessRequested { get; set; } = false;
    public bool IsAdminRead { get; set; } = false;
    public bool IsUserRead { get; set; } = false;
}