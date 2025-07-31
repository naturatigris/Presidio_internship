namespace DocumentSharingSystem.Models.DTOs;

public class DocumentUploadDTO
{
    public string? Description { get; set; }
    public long TeamID { get; set; } = 0;
    public string Visibility { get; set; } = string.Empty;

    public bool? IsAccessRequested { get; set; }
    public IFormFile? formFile { get; set; }
}