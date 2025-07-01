namespace BlogPlatform.Models.DTOs{

    public class PaginatedUserResult
    {
        public IEnumerable<User> Items { get; set; } = new List<User>();
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public int TotalItems { get; set; }
    }
}