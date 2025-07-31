namespace DocumentSharingSystem.Models.Dtos
{
    public class DocumentRestoreRequestDto
    {
        public Guid Id { get; set; }
        public Guid DocumentId { get; set; }
        public string OriginalFileName { get; set; } = string.Empty;

        public Guid RequestedByUserId { get; set; }
        public string RequestedByUserName { get; set; }

        public DateTime RequestedAt { get; set; }
        public string Reason { get; set; }

        public string Status { get; set; }

        public DateTime? ReviewedAt { get; set; }
        public Guid? ReviewedByUserId { get; set; }
        public string? ReviewedByUserName { get; set; }
    }
}
