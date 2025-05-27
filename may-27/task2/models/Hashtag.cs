using System.ComponentModel.DataAnnotations;

public class Hashtag
{
    [Key]
    public int Id { get; set; }

    public string Tag { get; set; } = string.Empty;

    public ICollection<TweetHashtagMapping> TweetHashtags { get; set; } = new List<TweetHashtagMapping>();
}
