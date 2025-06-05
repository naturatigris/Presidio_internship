using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Organization.Models.DTOs
{
    public class ITEmployeeDto
    {
        [EmailAddress]
        [Required]
        public string Email { get; set; }

        [Required]
        public string Name { get; set; }

        public string Department { get; set; } = "IT";
        public string Role { get; set; } = "IT Staff";

        public List<SpecializationDto> Specializations { get; set; } = new List<SpecializationDto>();
        public string Password { get; set; }  // only for creation

    }
}
