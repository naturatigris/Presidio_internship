using System;
using System.ComponentModel.DataAnnotations;

namespace BlogPlatform.Models.DTOs
{
    public class UpdateUserDto
    {
        public string Name { get; set; }
        public string Status { get; set; }
        public string Password { get; set; }
    }
public class AdminUpdateUserDto : UpdateUserDto
{
    public string Role { get; set; }
    public bool? IsSuspended { get; set; }
    public string SuspensionReason { get; set; }
    public DateTime? SuspendedUntil { get; set; }
}

}
