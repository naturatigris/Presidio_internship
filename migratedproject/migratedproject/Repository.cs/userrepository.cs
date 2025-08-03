using ChienVHShopOnline.Interfaces;
using ChienVHShopOnline.Models;
using Microsoft.EntityFrameworkCore;

namespace ChienVHShopOnline.Repositories
{
    public class UserRepository : Repository<int, User>
    {
        public UserRepository(ChienVHShopDBEntities context) : base(context)
        {
        }

        public override async Task<User> Get(int key)
        {
            var user = await _Context.Users.SingleOrDefaultAsync(u => u.UserId == key);


            return user;
        }

        public override async Task<IEnumerable<User>> GetAll()
        {
            var users = await _Context.Users.ToArrayAsync();
            return  users;
        }
    }
}
