using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class TweetHashtagMapping
{
    [Key]
    public int Id { get; set; }  

    public int TweetId { get; set; }
    [ForeignKey("TweetId")]

    public Tweet? Tweet { get; set; }

    public int HashtagId { get; set; }
    [ForeignKey("HashtagId")]

    public Hashtag? Hashtag { get; set; }
}
