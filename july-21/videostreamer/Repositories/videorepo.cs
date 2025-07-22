using TrainingVideoPortal.contexts;
using TrainingVideoPortal.Interfaces;
using TrainingVideoPortal.Models;
using Microsoft.EntityFrameworkCore;

namespace TrainingVideoPortal.Repositories
{
    public class VideoRepository : IVideoRepository
    {
        private readonly AppDbContext _context;

        public VideoRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TrainingVideo>> GetAllAsync()
        {
            return await _context.TrainingVideos
                .OrderByDescending(v => v.UploadDate)
                .ToListAsync();
        }
         public async Task<TrainingVideo?> GetByIdAsync(Guid id)
    {
        return await _context.TrainingVideos.FirstOrDefaultAsync(v => v.Id == id);
    }

        public async Task AddAsync(TrainingVideo video)
        {
            await _context.TrainingVideos.AddAsync(video);
            await _context.SaveChangesAsync();
        }
    }
}
