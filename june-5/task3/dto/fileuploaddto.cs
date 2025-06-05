using System.ComponentModel.DataAnnotations;

namespace Organization.Models.DTOs
{
    public class FileUploadDto
    {
        public string FileName { get; set; }

        public string ContentType { get; set; }

        public byte[] Data { get; set; }
        [EmailAddress]
        public string Email{ get; set; }
    }
}
