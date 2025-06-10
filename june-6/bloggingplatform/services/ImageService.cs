using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.AuditLogs;
using System.Text.Json;

namespace BlogPlatform.Services
{
    public class ImageService : IImageService
    {
        private readonly IRepository<Guid, Image> _imageRepository;
        private readonly IImageAuditLogRepository _imageAuditLogRepository;

        public ImageService(IRepository<Guid, Image> imageRepository, IImageAuditLogRepository imageAuditLogRepository)
        {
            _imageRepository = imageRepository;
            _imageAuditLogRepository = imageAuditLogRepository;
        }

        public async Task<List<Image>> SaveImagesAsync(List<IFormFile> files, Guid postId, string performedByEmail)
        {
            var savedImages = new List<Image>();

            foreach (var file in files)
            {
                using var ms = new MemoryStream();
                await file.CopyToAsync(ms);

                var image = new Image
                {
                    Id = Guid.NewGuid(),
                    Name = file.FileName,
                    PostId = postId,
                    Content = ms.ToArray(),
                    UploadedAt = DateTime.UtcNow
                };

                await _imageRepository.Add(image);

                await _imageAuditLogRepository.AddAsync(new ImageAuditLog
                {
                    ImageId = image.Id,
                    Action = "Created",
                    PerformedBy = performedByEmail,
                    Changes = JsonSerializer.Serialize(new { image.Name, image.PostId })
                });

                savedImages.Add(image);
            }

            return savedImages;
        }
        public async Task<List<Image>> UpdateImagesAsync(List<IFormFile> newFiles, Guid postId, string performedByEmail)
        {
            var existing = await _imageRepository.GetAll();
            var toDelete = existing.Where(i => i.PostId == postId).ToList();

            foreach (var img in toDelete)
            {
                await _imageRepository.Delete(img.Id);
                await _imageAuditLogRepository.AddAsync(new ImageAuditLog
                {
                    ImageId = img.Id,
                    Action = "Deleted",
                    PerformedBy = performedByEmail
                });
            }

            return await SaveImagesAsync(newFiles, postId, performedByEmail);
        }

        public async Task DeleteImagesByPostIdAsync(Guid postId, string performedByEmail)
        {
            var images = await _imageRepository.GetAll();
            var toDelete = images.Where(i => i.PostId == postId).ToList();

            foreach (var img in toDelete)
            {
                if (img.IsDeleted == true)
                {
                    continue;
                }
                else
                {
                    img.IsDeleted = true;
                    await _imageRepository.Update(img.Id,img);
                    await _imageAuditLogRepository.AddAsync(new ImageAuditLog
                    {
                        ImageId = img.Id,
                        Action = "Deleted",
                        PerformedBy = performedByEmail
                    });
                }
            }
        }

    }
}
