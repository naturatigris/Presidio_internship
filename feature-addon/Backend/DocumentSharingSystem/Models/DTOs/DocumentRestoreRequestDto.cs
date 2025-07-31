namespace DocumentSharingSystem.Models.DTOs;

public class RestoreRequestDto
{
    public Guid DocumentId { get; set; }
    public Guid UserId { get; set; }
    public string Reason { get; set; } = "";
}
