using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Razor.Compilation;
using System.ComponentModel.DataAnnotations;

namespace BlogPlatform.Models.DTOs
{
    public class PostUpdateDto
    {
        public string? Title { get; set; }

        public string? Slug { get; set; }

        public string? Content { get; set; }
        public bool deleteImages = false;

        public int? Views{ get; set; }

        public string? Status { get; set; } = "Published";

        public List<IFormFile> Images { get; set; } = new();
    }
}
