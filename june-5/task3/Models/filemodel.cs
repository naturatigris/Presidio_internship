using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Organization.Models
{
    public class UploadedFile
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        public string FileName { get; set; }

        public string ContentType { get; set; }

        public byte[] Data { get; set; }

        public DateTime UploadedAt { get; set; } = DateTime.UtcNow;

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [ForeignKey("Email")]
        public HREmployee HREmployee { get; set; }
    }
}
