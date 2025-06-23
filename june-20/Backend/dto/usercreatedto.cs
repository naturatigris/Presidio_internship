using System.ComponentModel.DataAnnotations;

namespace BlogPlatform.Models.DTOs
{
    public class UserDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = null!;
        [Required]
        public string Name { get; set; } = null!;
        [Required]
        public string Password { get; set; } = null!;
        
        public string Role { get; set; } = "User"; 
        public string? AdminSecret { get; set; }  


}

    
}