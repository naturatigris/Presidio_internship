using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using BlogPlatform.Interfaces;
using BlogPlatform.Services;

[ApiController]
[Route("api/v{version:apiVersion}/category")]
[ApiVersion("1.0")]
public class CategoryController : ControllerBase
{
    private readonly ICategoryService _categoryService;

    public CategoryController(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    [HttpGet("names")]
    public async Task<IActionResult> GetAllCategoryNames()
    {
        var categoryNames = await _categoryService.GetAllCategoryNames();
        return Ok(categoryNames);
    }
}
