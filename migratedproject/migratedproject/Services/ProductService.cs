using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChienVHShopOnline.Services
{
    public class ProductService : IProductService
{
    private readonly IRepository<int, Product> _repository;

    public ProductService(IRepository<int, Product> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<Product>> GetAllAsync()
    {
        return await _repository.GetAll();
    }

     public async Task<IEnumerable<Product>> GetByCategoryAsync(int categoryId)
    {
            var products = await _repository.GetAll();
            var response = products.Where(c => c.CategoryId == categoryId);
            return response.ToList();
        

    }

    public async Task<Product> GetByIdAsync(int id)
    {
        return await _repository.Get(id);
    }
}

}