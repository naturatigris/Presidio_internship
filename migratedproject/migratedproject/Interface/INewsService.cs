using ChienVHShopOnline.Models;

namespace ChienVHShopOnline.Interfaces
{
    public interface INewsService
    {
        Task<List<News>> GetAll();
        Task<News> GetById(int id);
        Task<List<News>> GetByUserId(int userId);
        Task<News> Add(News news);
        Task<News> Update(int id, News news);
        Task<News> Delete(int id);
        Task<PaginationDto<News>> GetFilteredNews(int? pageNumber, int? pageSize);

    }
}