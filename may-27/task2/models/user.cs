using System.ComponentModel.DataAnnotations;

public class User
{
    [Key]
    public int Id { get; set; }

    public string Username { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string Password { get; set; } = string.Empty;

    public ICollection<Tweet> Tweets { get; set; } = new List<Tweet>();
    public ICollection<Like> Likes { get; set; } = new List<Like>();
    public ICollection<Follow>? Followers { get; set; } = new List<Follow>();
    public ICollection<Follow>? Following { get; set; } = new List<Follow>();
    
}
