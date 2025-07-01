using System;
using System.ComponentModel.DataAnnotations;

namespace BlogPlatform.Models
{
    public class PostLike
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        public Guid PostId { get; set; }

        [Required]
        public string UserEmail { get; set; }

        public DateTime LikedAt { get; set; } = DateTime.UtcNow;

        public Post Post { get; set; }
        public User User { get; set; }
    }
}
