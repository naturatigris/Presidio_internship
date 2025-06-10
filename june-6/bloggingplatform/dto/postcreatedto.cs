using System.ComponentModel.DataAnnotations;

namespace BlogPlatform.Models.DTOs
{
    public class Postto
    {
        [Required]
        [EmailAddress]
        public string UserEmail { get; set; } = null!;

        [Required]
        public string Title { get; set; } = null!;

        [Required]
        public string Slug { get; set; } = null!;
        [Required]
        public string Content { get; set; } = null!;

        public string Status { get; set; } = "Published";
        public List<IFormFile> Images { get; set; } = new List<IFormFile>();

    }
}
