using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Tweet
{
    [Key]
    public int Id { get; set; }

    public string Content { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public int UserId { get; set; }


    [ForeignKey("UserId")]
    public User? User { get; set; } 

    public ICollection<Like> Likes { get; set; } = new List<Like>();
    public ICollection<TweetHashtagMapping> TweetHashtags { get; set; } = new List<TweetHashtagMapping>();
}
