using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Services;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace ChienVHShopOnline.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _service;
        private readonly ILogger<ProductController> _logger;

        public ProductController(IProductService service, ILogger<ProductController> logger)
        {
            _service = service;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetAll([FromQuery] int? category)
        {
            try
            {
                if (category.HasValue)
                {
                    var filtered = await _service.GetByCategoryAsync(category.Value);
                    return Ok(filtered);
                }

                var all = await _service.GetAllAsync();
                return Ok(all);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred in GetAll method");
                return StatusCode(500, new { error = "An error occurred while retrieving products." });
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetById(int id)
        {
            try
            {
                var product = await _service.GetByIdAsync(id);
                if (product == null)
                    return NotFound(new { message = "Product not found." });

                return Ok(product);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while retrieving product with ID {id}");
                return StatusCode(500, new { error = "An error occurred while retrieving the product." });
            }
        }
    }
}
