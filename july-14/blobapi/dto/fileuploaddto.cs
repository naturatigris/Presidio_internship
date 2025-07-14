using System.ComponentModel.DataAnnotations;

public class FileUploadDto
{
    [Required]
    public IFormFile File { get; set; }
}
