using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlogPlatform.Models
{
    public class Comment
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        public Guid PostId { get; set; }

        [Required]
        public string UserEmail { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [Required]
        public string Content { get; set; }

        public string Status { get; set; } = "Available"; // (Available, Deleted)
        public bool IsDeleted { get; set; } = false;
        public bool iseditied { get; set; } = false;

        public Post Post { get; set; }
        public User User { get; set; }
        public ICollection<CommentLike> Likes { get; set; } = new List<CommentLike>();

    }
}
