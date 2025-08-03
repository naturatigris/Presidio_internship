

namespace ChienVHShopOnline.Models
{
    using System;
    using System.Collections.Generic;
    
    public  class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    
        public  ICollection<News> News { get; set; }=new HashSet<News>();
        public  ICollection<Product> Products { get; set; }=new HashSet<Product>();
    }
}
