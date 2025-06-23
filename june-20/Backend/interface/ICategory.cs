
using BlogPlatform.Models;

namespace BlogPlatform.Interfaces
{
    public interface ICategoryService
    {
        public Task<Category> GetCategoryByName(string name);
        public Task<Category> AddCategory(Category category);
        public Task<List<string>> GetAllCategoryNames();

    }
}