using ChienVHShopOnline.Models;
using ChienVHShopOnline.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;

namespace ChienVHShopOnline.Services
{
    public class ContactUsService : IContactUsService
    {
        private readonly IRepository<int, ContactU> _repository;
        private readonly IHttpClientFactory _httpClientFactory;
        private const string secretKey = "6LfQaJErAAAAAIEkelybDPk0083HnLMgKV4Uy5bZ";

        public ContactUsService(IRepository<int, ContactU> repository, IHttpClientFactory httpClientFactory)
        {
            _repository = repository;
            _httpClientFactory = httpClientFactory;
        }

        public async Task<string> SubmitContactAsync(ContactUsCreateDto dto)
        {
            // var client = _httpClientFactory.CreateClient();
            // var response = await client.GetStringAsync(
            //     $"https://www.google.com/recaptcha/api/siteverify?secret={secretKey}&response={dto.CaptchaToken}");

            // var captchaResult = JsonConvert.DeserializeObject<CaptchaResponse>(response);

            // if (!captchaResult.Success)
            // {
            //     if (captchaResult.ErrorCodes?.Any() == true)
            //     {
            //         return captchaResult.ErrorCodes[0] switch
            //         {
            //             "missing-input-secret" => "Missing secret parameter",
            //             "invalid-input-secret" => "Invalid or malformed secret",
            //             "missing-input-response" => "Missing response parameter",
            //             "invalid-input-response" => "Invalid or malformed response",
            //             _ => "Captcha validation failed"
            //         };
            //     }
            //     return "Captcha failed. Try again.";
            // }

            var contact = new ContactU
            {
                name = dto.Name,
                email = dto.Email,
                phone = dto.Phone,
                content = dto.Content
            };

            await _repository.Add(contact);
            return "Submitted successfully!";
        }
        public async Task<List<ContactU>> GetAllAsync()
        {
           var result = await _repository.GetAll(); 
            return result.ToList();
        }

        public async Task<ContactU> GetByIdAsync(int id)
        {
            return await _repository.Get(id);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var contact = await _repository.Get(id);
            if (contact == null)
                return false;

            await _repository.Delete(id);
            return true;
        }
        public async Task<bool> UpdateContact(ContactU contactus)
        {
            if (contactus == null)
                return false;

            await _repository.Update(contactus.id,contactus);
            return true;
            
        }

}
}
