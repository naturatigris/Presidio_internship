namespace Organization.Models.DTOs
{
    public class HREmployeeDto
    {
        public string Email { get; set; }  // Add this for primary key mapping
        public string Name { get; set; }
        public string Password { get; set; }  // only for creation

        public string Department { get; set; } = "HR";
        public string Role { get; set; } = "Admin";
    }
}
