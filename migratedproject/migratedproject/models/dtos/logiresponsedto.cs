namespace ChienVHShopOnline.Models
{
    public class UserLoginResponse
    {
        public int Id { get; set; }
        public string Token { get; set; }
        public string RefreshToken{ get; set; }
    }
}
