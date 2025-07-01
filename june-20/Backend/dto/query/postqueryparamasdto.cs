namespace BlogPlatform.Models.DTOs
{
    public class PostQueryParamsDto
    {
        public string? UserEmail { get; set; }
        public string? Status { get; set; }
        public string? SearchTerm { get; set; }
        public string? SortOrder { get; set; } = "asc";
        public int? PageNumber { get; set; }
        public int? PageSize { get; set; }

        public List<string>? Categories { get; set; }
        public string? viewOrder{ get; set; }
}

}