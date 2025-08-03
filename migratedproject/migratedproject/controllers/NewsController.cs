using ChienVHShopOnline.Models;
using ChienVHShopOnline.Services;
using Microsoft.AspNetCore.Mvc;
using ChienVHShopOnline.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace ChienVHShopOnline.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewsController : ControllerBase
    {
        private readonly INewsService _service;
        private readonly ILogger<NewsController> _logger;

        public NewsController(INewsService service, ILogger<NewsController> logger)
        {
            _service = service;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<News>>> GetAll()
        {
            try
            {
                return Ok(await _service.GetAll());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in GetAll()");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<News>> GetById(int id)
        {
            try
            {
                var news = await _service.GetById(id);
                return news == null ? NotFound() : Ok(news);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error in GetById({id})");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<News>>> GetByUserId(int userId)
        {
            try
            {
                return Ok(await _service.GetByUserId(userId));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error in GetByUserId({userId})");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] NewsCreateDto dto)
        {
            try
            {

                var news = new News
                {
                    UserId = dto.UserId,
                    Title = dto.Title,
                    ShortDescription = dto.ShortDescription,
                    Image = dto.Image,
                    Content = dto.Content,
                    Status = dto.Status,
                    CreatedDate = DateTime.UtcNow
                };

                await _service.Add(news);
                return CreatedAtAction(nameof(GetById), new { id = news.NewsId }, news);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in Create()");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<News>> Update(int id, [FromBody] NewsCreateDto dto)
        {
            try
            {
                var oldnews = await _service.GetById(id);

                var news = new News
                {
                    NewsId = id,
                    UserId = dto.UserId ?? oldnews.UserId,
                    Title = dto.Title ?? oldnews.Title,
                    ShortDescription = dto.ShortDescription ?? oldnews.ShortDescription,
                    Image = dto.Image ?? oldnews.Image,
                    Content = dto.Content ?? oldnews.Content,
                    Status = dto.Status ?? oldnews.Status,
                    CreatedDate=oldnews.CreatedDate
                };

                var response = await _service.Update(id, news);
                return response;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error in Update({id})");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<News>> Delete(int id)
        {
            try
            {
                var response = await _service.Delete(id);
                return response;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error in Delete({id})");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("paged")]
        public async Task<IActionResult> GetFilteredNews([FromQuery] int? pageNumber, [FromQuery] int? pageSize)
        {
            try
            {
                var result = await _service.GetFilteredNews(pageNumber, pageSize);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in GetFilteredNews()");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
