using ChienVHShopOnline.Models;
using System.Collections.Generic;

namespace ChienVHShopOnline.Interfaces
{
  public interface ICategoryService
  {
    Task<IEnumerable<Category>> GetAllCategoriesAsync();
    Task<Category> GetCategoryByIdAsync(int id);
    Task AddCategoryAsync(Category category);
    Task UpdateCategoryAsync(int id, Category category);
    Task DeleteCategoryAsync(int id);
    Task<PaginationDto<Category>> GetFilteredCategory(int? pageNumber, int? pageSize);

}
  
}