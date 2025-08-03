using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChienVHShopOnline.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IRepository<int, Category> _repository;

        public CategoryService(IRepository<int, Category> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Category>> GetAllCategoriesAsync()
        {
            return await _repository.GetAll();
        }

        public async Task<Category> GetCategoryByIdAsync(int id)
        {
            return await _repository.Get(id);
        }

        public async Task AddCategoryAsync(Category category)
        {
            await _repository.Add(category);
        }

        public async Task UpdateCategoryAsync(int id, Category category)
        {
            await _repository.Update(id, category);
        }

        public async Task DeleteCategoryAsync(int id)
        {
            var category = await _repository.Get(id);
            if (category != null)
            {
                await _repository.Delete(id);
            }
        }
     public async Task<PaginationDto<Category>> GetFilteredCategory(int? pageNumber, int? pageSize)
        {
            var response = await _repository.GetAll();
            var count = response.Count();
            int page = pageNumber ?? 1;
            int size = pageSize ?? 5;
            var totalPages = (int)Math.Ceiling(count / (double)size);

            var paginatedItems = response
                    .Skip((page - 1) * size)
                    .Take(size)
                    .ToList();
            return new PaginationDto<Category>
            {
                List = paginatedItems,
                CurrentPage = pageNumber??1,
                PageSize = pageSize??5,
                TotalPages = totalPages,

                TotalCount =count

            };

        }
}
 
}