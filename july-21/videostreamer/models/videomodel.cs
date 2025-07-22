namespace TrainingVideoPortal.Models
{
    public class TrainingVideo
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime UploadDate { get; set; }
        public string BlobUrl { get; set; }
    }
}
