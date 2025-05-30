using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Follow
{
    [Key]
    public int Id { get; set; }  

    public int FollowerId { get; set; }
    [ForeignKey("FollowerId")]

    public User? Follower { get; set; }
    public int FolloweeId { get; set; }
    [ForeignKey("FolloweeId")]

    public User? Followee { get; set; }
}
