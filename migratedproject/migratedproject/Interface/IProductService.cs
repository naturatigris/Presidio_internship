using ChienVHShopOnline.Models;
using System.Collections.Generic;

namespace ChienVHShopOnline.Interfaces
{ 
   public interface IProductService
{
    Task<IEnumerable<Product>> GetAllAsync();
    Task<IEnumerable<Product>> GetByCategoryAsync(int categoryId);
    Task<Product> GetByIdAsync(int id);
} 
}