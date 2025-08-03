using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChienVHShopOnline.Services
{
    public class ColorService : IColorService
{
    private readonly IRepository<int, Color> _colorRepository;

    public ColorService(IRepository<int, Color> colorRepository)
    {
        _colorRepository = colorRepository;
    }

    public async Task<IEnumerable<Color>> GetAllColorsAsync() =>
        await _colorRepository.GetAll();

    public async Task<Color> GetColorByIdAsync(int id) =>
        await _colorRepository.Get(id);

    public async Task CreateColorAsync(Color color) =>
        await _colorRepository.Add(color);

    public async Task UpdateColorAsync(int id,Color color) =>
        await _colorRepository.Update(id,color);

    public async Task DeleteColorAsync(int id) =>
        await _colorRepository.Delete(id);
}

}