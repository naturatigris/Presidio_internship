using System;

namespace DocumentSharingSystem.Models.DTOs;

public class LoginRequestDTO
{
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}
