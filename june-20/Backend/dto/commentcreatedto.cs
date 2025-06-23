using System.ComponentModel.DataAnnotations;

namespace BlogPlatform.Models.DTOs
{
    public class CommentDto
    {
        [Required]
        public Guid PostId { get; set; }

        [Required]
        [EmailAddress]
        public string UserEmail { get; set; } = null!;

        [Required]
        public string Content { get; set; } = null!;

        public string Status { get; set; } = "Available";

    }
}
