using ChienVHShopOnline.Models;
using System.Collections.Generic;

namespace ChienVHShopOnline.Interfaces
{
    public interface IColorService
    {
        Task<IEnumerable<Color>> GetAllColorsAsync();
        Task<Color> GetColorByIdAsync(int id);
        Task CreateColorAsync(Color color);
        Task UpdateColorAsync(int id, Color color);
        Task DeleteColorAsync(int id);
}

  
}