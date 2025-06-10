namespace BlogPlatform.Models.DTOs
{
    public class CommentQueryParamsDto
    {
        public string? UserEmail { get; set; }
        public Guid? PostId{ get; set; }
        public string? Status { get; set; }
        public string? SortOrder { get; set; } = "asc";
        public int? PageNumber { get; set; }
        public int? PageSize { get; set; }
    }
}
