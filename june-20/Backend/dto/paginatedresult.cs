using BlogPlatform.Models;
namespace BlogPlatform.Models.Dtos
{
    public class PaginatedPostResult
    {
        public List<Post> Items { get; set; }
        public int TotalItems { get; set; }
    }
}