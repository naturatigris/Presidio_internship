using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Services;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ChienVHShopOnline.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ColorsController : ControllerBase
    {
        private readonly IColorService _colorService;

        public ColorsController(IColorService colorService)
        {
            _colorService = colorService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Color>>> GetColors()
        {
            try
            {
                var colors = await _colorService.GetAllColorsAsync();
                return Ok(colors);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = $"An error occurred while fetching colors: {ex.Message}" });
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Color>> GetColor(int id)
        {
            try
            {
                var color = await _colorService.GetColorByIdAsync(id);
                if (color == null)
                    return NotFound(new { error = "Color not found." });

                return Ok(color);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = $"An error occurred while fetching the color: {ex.Message}" });
            }
        }

        [HttpPost]
        public async Task<ActionResult> CreateColor(ColorCreateDto dto)
        {
            try
            {
                var color = new Color
                {
                    Color1 = dto.Color
                };
                await _colorService.CreateColorAsync(color);
                return CreatedAtAction(nameof(GetColor), new { id = color.ColorId }, color);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = $"An error occurred while creating the color: {ex.Message}" });
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateColor(int id, ColorCreateDto dto)
        {
            var color = new Color
                {
                    ColorId=id,
                    Color1 = dto.Color
                };

            try
            {
                await _colorService.UpdateColorAsync(id, color);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = $"An error occurred while updating the color: {ex.Message}" });
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteColor(int id)
        {
            try
            {
                await _colorService.DeleteColorAsync(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = $"An error occurred while deleting the color: {ex.Message}" });
            }
        }
    }
}
