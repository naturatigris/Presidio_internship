using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChienVHShopOnline.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _service;

        public CategoryController(ICategoryService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var categories = await _service.GetAllCategoriesAsync();
                return Ok(categories);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while fetching categories: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var category = await _service.GetCategoryByIdAsync(id);
                if (category == null)
                    return NotFound($"Category with ID {id} not found.");

                return Ok(category);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while fetching the category: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CategoryCreateDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var category = new Category
                {
                    Name = dto.Name
                };
                await _service.AddCategoryAsync(category);
                return CreatedAtAction(nameof(Get), new { id = category.CategoryId }, category);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while creating the category: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] CategoryCreateDto dto)
        {


            try
            {
                var category = new Category
                {
                    CategoryId = id,
                    Name = dto.Name
                }; await _service.UpdateCategoryAsync(id, category);
                return NoContent();
            }
            catch (KeyNotFoundException)
            {
                return NotFound($"Category with ID {id} not found.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while updating the category: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _service.DeleteCategoryAsync(id);
                return NoContent();
            }
            catch (KeyNotFoundException)
            {
                return NotFound($"Category with ID {id} not found.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while deleting the category: {ex.Message}");
            }
        }
        [HttpGet("paged")]
        public async Task<ActionResult<PaginationDto<Category>>> GetPagedCategory(int? pageNumber, int? pageSize)
        {
            var result = await _service.GetFilteredCategory(pageNumber, pageSize);
            return Ok(result);
        }
    }
}
