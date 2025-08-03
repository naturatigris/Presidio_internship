using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Models;
using Microsoft.EntityFrameworkCore;

namespace ChienVHShopOnline.Repositories
{
    public class ContactURepository : Repository<int, ContactU>
    {
        public ContactURepository(ChienVHShopDBEntities context) : base(context)
        {
        }

        public override async Task<ContactU> Get(int key)
        {
            return await _Context.ContactUs.FindAsync(key);


        }

        public override async Task<IEnumerable<ContactU>> GetAll()
        {
            return await _Context.ContactUs.ToListAsync();
        }
    }
}
