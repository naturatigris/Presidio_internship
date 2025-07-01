using System;
using System.ComponentModel.DataAnnotations;

namespace BlogPlatform.Models
{
    public class CommentLike
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        public Guid CommentId { get; set; }

        [Required]
        public string UserEmail { get; set; }

        public DateTime LikedAt { get; set; } = DateTime.UtcNow;

        public Comment Comment { get; set; }
        public User User { get; set; }
    }
}
