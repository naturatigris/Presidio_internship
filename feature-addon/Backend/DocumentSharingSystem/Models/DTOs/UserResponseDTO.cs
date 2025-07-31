namespace DocumentSharingSystem.Models
{
    public class UserResponseDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public long? TeamId { get; set; }
        public string TeamName { get; set; } = string.Empty;
        public bool IsDeleted { get; set; } = false;

        public Guid CreatedByUserId { get; set; } = Guid.Empty;
        public string CreatedByUserName { get; set; } = string.Empty;
        public string CreatedByUserEmail { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public Guid LastUpdatedByUserId { get; set; } = Guid.Empty;
        public string LastUpdatedByUserName { get; set; } = string.Empty;
        public string LastUpdatedByUserEmail { get; set; } = string.Empty;
        public DateTime LastUpdatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? LastloginAt { get; set; } 

    }
}