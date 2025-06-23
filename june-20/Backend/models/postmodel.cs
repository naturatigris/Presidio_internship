using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlogPlatform.Models
{
    public class Post
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        [EmailAddress]

        public string UserEmail { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Slug { get; set; }

        [Required]
        public string Content { get; set; }

        public string Status { get; set; } = "Published"; // (Draft, Published, Deleted)
        public bool IsDeleted { get; set; } = false;

        public User User { get; set; }
        public ICollection<Comment> Comments { get; set; } = new List<Comment>();
        public ICollection<Category> Categories { get; set; } = new List<Category>();

        public ICollection<Image> Images { get; set; } = new List<Image>();
    }
}
