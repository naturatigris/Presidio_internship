using DocumentSharingSystem.Models;

public class DocumentRestoreRequest
{
    public Guid Id { get; set; }
    public Guid DocumentId { get; set; }
    public Document Document { get; set; }

    public Guid RequestedByUserId { get; set; }
    public User RequestedByUser { get; set; }

    public DateTime RequestedAt { get; set; } = DateTime.UtcNow;
    public string Reason { get; set; }

    public String Status { get; set; } = "Pending";

    public DateTime? ReviewedAt { get; set; }
    public Guid? ReviewedByUserId { get; set; }
    public User? ReviewedByUser { get; set; }
    public bool IsAdminRead { get; set; } = false;
    public bool IsUserRead { get; set; } = false;
}