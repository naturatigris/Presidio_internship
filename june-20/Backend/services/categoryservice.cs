using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.DTOs;
using System.Text.Json;

namespace BlogPlatform.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IRepository<Guid, Category> _categorytRepo;

        public CategoryService(IRepository<Guid, Category> categorytRepo)
        {
            _categorytRepo = categorytRepo;
        }

        public async Task<Category> GetCategoryByName(string name)
        {
            var categories = await _categorytRepo.GetAll();
            return categories.FirstOrDefault(c => c.Name.ToLower() == name);

        }
        public async Task<Category> AddCategory(Category category)
        {
            return await _categorytRepo.Add(category);
        }

        public async Task<List<string>> GetAllCategoryNames()
        {
            var categories = await _categorytRepo.GetAll(); // ✔️ Await the task
            var categoryNames = categories.Select(c => c.Name);         // ✔️ Now safe to use LINQ
            return categoryNames.ToList();
    }




    }
}
