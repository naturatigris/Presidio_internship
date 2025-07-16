using BlogPlatform.Interfaces;
using BlogPlatform.Models;
using BlogPlatform.Models.AuditLogs;
using System.Text.Json;
using BlogPlatform.Services;

namespace BlogPlatform.Services
{
    public class ImageService : IImageService
    {
        private readonly IRepository<Guid, Image> _imageRepository;
        private readonly IImageAuditLogRepository _imageAuditLogRepository;
        //private readonly BlogStorageService _blogStorageService;


        public ImageService(IRepository<Guid, Image> imageRepository, IImageAuditLogRepository imageAuditLogRepository)
        {
            _imageRepository = imageRepository;
            _imageAuditLogRepository = imageAuditLogRepository;
               // _blogStorageService = blogStorageService;

        }

        public async Task<List<Image>> SaveImagesAsync(List<IFormFile> files, Guid postId, string performedByEmail)
        {
            var savedImages = new List<Image>();

            foreach (var file in files)
            {
                using var ms = new MemoryStream();
                await file.CopyToAsync(ms);
                ms.Position = 0;

                var content = ms.ToArray();
                ms.Position = 0;


                //var blobUrl = await _blogStorageService.UploadFileAsync(ms, $"{Guid.NewGuid()}_{file.FileName}");
                var blobUrl = "";


                var image = new Image
                {
                    Id = Guid.NewGuid(),
                    Name = file.FileName,
                    PostId = postId,
                    Content = content,
                    imageurl=blobUrl,
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
