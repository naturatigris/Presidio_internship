using System.Collections.Generic;

namespace Organization.Models
{
    public class ITEmployee : Employee
    {
        public ICollection<Specialization> Specializations { get; set; } = new List<Specialization>();
    }
}
