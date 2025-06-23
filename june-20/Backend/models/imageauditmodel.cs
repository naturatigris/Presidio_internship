using System;
using System.ComponentModel.DataAnnotations;

namespace BlogPlatform.Models.AuditLogs
{
    public class ImageAuditLog
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        public Guid ImageId { get; set; }

        [Required]
        public string Action { get; set; }

        public string? PerformedBy { get; set; }

        public DateTime PerformedAt { get; set; } = DateTime.UtcNow;

        public string? Changes { get; set; }
    }
}
