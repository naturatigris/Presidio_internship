using System;
using DocumentSharingSystem.Misc;

namespace DocumentSharingSystem.Models.DTOs;

public class UserAddServiceDTO
{
    public string Name { get; set; } = string.Empty;
    [RoleValidation]
    public string Role { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public long? TeamId { get; set; }
    public string? Password { get; set; }
    public Guid? LastUpdatedByUserId { get; set; }
    public DateTime? LastloginAt{ get; set; }
}
