using System;
using System.ComponentModel.DataAnnotations;

namespace BlogPlatform.Models.AuditLogs
{
    public class UserAuditLog
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        public string Action { get; set; } // e.g., Created, Updated, Deleted

        [Required]
        public string TargetEmail { get; set; }

        public string? PerformedBy { get; set; } 

        public DateTime PerformedAt { get; set; } = DateTime.UtcNow;

        public string? Changes { get; set; } // JSON diff or snapshot
    }
}
