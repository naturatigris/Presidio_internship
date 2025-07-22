using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace TrainingVideoPortal.Models.Dtos
{
    public class VideoUploadDto
    {
        [Required]
        public IFormFile File { get; set; }

        [Required]
        public string Title { get; set; }

        public string Description { get; set; }
    }
}
