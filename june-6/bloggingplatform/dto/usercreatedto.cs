namespace BlogPlatform.Models.DTOs
{
    public class UserDto
    {
        public string Email { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Role { get; set; } = "User"; 
        public string? AdminSecret { get; set; }  


}

    
}