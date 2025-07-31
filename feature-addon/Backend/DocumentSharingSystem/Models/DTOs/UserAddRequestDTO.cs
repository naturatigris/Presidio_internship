using System;
using DocumentSharingSystem.Misc;

namespace DocumentSharingSystem.Models.DTOs;

public class UserAddRequestDTO
{
    public string Name { get; set; } = string.Empty;
    [RoleValidation]
    public string Role { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public long TeamId { get; set; }
    public string Password { get; set; } = string.Empty;
}
