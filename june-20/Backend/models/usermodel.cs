using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlogPlatform.Models
{
    public class User
    {
        [Key]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public string Role { get; set; } = "User"; // (Admin, User)

        public bool IsSuspended { get; set; } = false;

        public string? SuspensionReason { get; set; }

        public DateTime? SuspendedUntil { get; set; }

        public bool IsDeleted { get; set; } = false;

        public string Status { get; set; } = "Active";
        public byte[]? ProfileImage { get; set; }
        public string? Bio { get; set; }
        public string? Location { get; set; }
        public string? Website { get; set; }


        public ICollection<Post> Posts { get; set; } = new List<Post>();
        public ICollection<Comment> Comments { get; set; } = new List<Comment>();
        public ICollection<PostLike> PostLikes { get; set; } = new List<PostLike>();
        public ICollection<CommentLike> CommentLikes { get; set; } = new List<CommentLike>();


    }
}
