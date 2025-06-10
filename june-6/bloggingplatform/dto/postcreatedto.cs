using System.ComponentModel.DataAnnotations;

namespace BlogPlatform.Models.DTOs
{
    public class Postto
    {
        [Required]
        [EmailAddress]
        public string UserEmail { get; set; } = null!;

        [Required]
        [StringLength(150, ErrorMessage = "Title can't exceed 150 characters.")]
        public string Title { get; set; } = null!;
        
        [Required]
        public string Slug { get; set; } = null!;
        [Required]
        [MinLength(10, ErrorMessage = "Content must be at least 10 characters long.")]
        public string Content { get; set; } = null!;

        public string Status { get; set; } = "Published";
        public List<IFormFile> Images { get; set; } = new List<IFormFile>();

    }
}
