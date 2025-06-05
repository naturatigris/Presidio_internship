using System.ComponentModel.DataAnnotations;

namespace Organization.Models
{
    public class Employee
    {
        [Key]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Department { get; set; }

        public string Role { get; set; }
    public byte[]? PasswordHash { get; set; }      // Encrypted password
    public byte[]? HashKey { get; set; }       // Key used for encryption

    }
}
