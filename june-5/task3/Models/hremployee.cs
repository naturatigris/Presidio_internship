namespace Organization.Models
{
    public class HREmployee : Employee
    {
        public ICollection<UploadedFile> UploadedFiles { get; set; } = new List<UploadedFile>();

    }
}
