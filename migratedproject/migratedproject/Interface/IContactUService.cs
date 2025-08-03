using ChienVHShopOnline.Models;
using System.Collections.Generic;

namespace ChienVHShopOnline.Interfaces
{
    public interface IContactUsService
    {
        Task<string> SubmitContactAsync(ContactUsCreateDto dto);
        Task<List<ContactU>> GetAllAsync();
        Task<ContactU> GetByIdAsync(int id);
        Task<bool> DeleteAsync(int id);
        Task<bool> UpdateContact(ContactU contactus);
    }

}