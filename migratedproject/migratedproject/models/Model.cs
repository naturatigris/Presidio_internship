

namespace ChienVHShopOnline.Models
{
    using System;
    using System.Collections.Generic;
    
    public  class Model
    {
    
    
        public int ModelId { get; set; }
        public string Model1 { get; set; }
    
        public  ICollection<Product> Products { get; set; }=new HashSet<Product>();
    }
}
