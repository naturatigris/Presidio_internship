using TrainingVideoPortal.Models;

namespace TrainingVideoPortal.Interfaces
{
    public interface IVideoRepository
    {
        Task<IEnumerable<TrainingVideo>> GetAllAsync();
        Task AddAsync(TrainingVideo video);
            Task<TrainingVideo?> GetByIdAsync(Guid id);

    }
}
