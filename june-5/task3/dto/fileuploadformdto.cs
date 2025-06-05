using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace Organization.Models.DTOs
{
    public class FileUploadForm
    {
        [Required]
        public IFormFile File { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
