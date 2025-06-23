using System.ComponentModel.DataAnnotations;

namespace BlogPlatform.Models
{
    public class RefreshToken
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        [Required]
        public string Token { get; set; } = null!;
        [Required]
        public string UserEmail { get; set; } = null!;
        public DateTime Expires { get; set; }
        public bool IsRevoked { get; set; } = false;
    }
}
