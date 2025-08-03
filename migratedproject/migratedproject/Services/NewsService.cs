using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using Newtonsoft.Json;
using AutoMapper;


namespace ChienVHShopOnline.Services
{
    public class NewsService : INewsService
    {
        private readonly IRepository<int, News> _repo;

        public NewsService(IRepository<int, News> repo)
        {
            _repo = repo;
        }

        public async Task<List<News>> GetAll()
        {
            var response = await _repo.GetAll();
            return response.ToList();
        }
        public async Task<News> GetById(int id)
        {
            return await _repo.Get(id);

        }
        public async Task<List<News>> GetByUserId(int UserId)
        {
            var news = await _repo.GetAll();
            var final = news.Where(u => u.UserId == UserId).ToList();
            return final;
        }
        public async Task<News> Add(News news)
        {
            return await _repo.Add(news);

        }
        public async Task<News> Update(int id, News news)
        {
            return await _repo.Update(id, news);
        }
        public async Task<News> Delete(int id)
        {
            return await _repo.Delete(id);

        }
        public async Task<PaginationDto<News>> GetFilteredNews(int? pageNumber, int? pageSize)
        {
            var response = await _repo.GetAll();
            var count = response.Count();
            int page = pageNumber ?? 1;
            int size = pageSize ?? 5;
            var totalPages = (int)Math.Ceiling(count / (double)pageSize);

            var paginatedItems = response
                    .Skip((page - 1) * size)
                    .Take(size)
                    .ToList();
            return new PaginationDto<News>
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