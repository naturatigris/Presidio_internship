namespace BlogPlatform.Models{ 

public class Category
{
        public Guid Id { get; set; } = new Guid();

    public string Name { get; set; } = string.Empty;

    public ICollection<Post> Posts { get; set; } = new List<Post>();
}
}