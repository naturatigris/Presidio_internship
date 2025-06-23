using System.ComponentModel.DataAnnotations;

namespace BlogPlatform.Models.DTOs
{
    public class UpdateCommentDto
    {
        [Required]
        public string Content { get; set; } = null!;
    }
}
