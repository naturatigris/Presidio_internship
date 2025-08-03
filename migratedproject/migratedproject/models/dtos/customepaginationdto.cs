namespace ChienVHShopOnline.Models
{
    public class PaginationDto<T>
    {
        public IEnumerable<T> List { get; set; }
        public int CurrentPage { get; set; }
        public int TotalPages { get; set; }
        public int PageSize { get; set; }

        public int TotalCount { get; set; }
    }
}
