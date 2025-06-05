using System.ComponentModel.DataAnnotations;

namespace Organization.Models
{
    public class Specialization
    {
        public  Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        public string Name { get; set; }

        // Navigation property
        [EmailAddress]
        public string ITEmployeeEmail { get; set; }
        public ITEmployee ITEmployee { get; set; }
    }
}
