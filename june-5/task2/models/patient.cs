using System.ComponentModel.DataAnnotations;
using FirstAPI.Misc; 

namespace FirstAPI.Models
{
    public class Patient
    {
        public int Id { get; set; }
        [Required]
        [NameValidation(ErrorMessage = "Name must contain only letters and spaces.")]

        public string Name { get; set; } = string.Empty;
        public int Age { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public ICollection<Appointmnet>? Appointmnets { get; set; }
        public User? User { get; set; }
    }

}