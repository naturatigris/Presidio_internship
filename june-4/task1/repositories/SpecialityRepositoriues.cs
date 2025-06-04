using FirstAPI.Contexts;
using FirstAPI.Interfaces;
using FirstAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FirstAPI.Repositories
{
    public class SpecialityRepo : Repository<int, Speciality>
    {
        public SpecialityRepo(ClinicContext clinicContext) : base(clinicContext)
        {
        }

        public override async Task<Speciality> Get(int key)
        {
            var Specialities = await _clinicContext.Specialities.SingleOrDefaultAsync(p => p.Id == key);

            return Specialities ?? throw new Exception("No Speciality with teh given ID");
        }

        public override async Task<IEnumerable<Speciality>> GetAll()
        {
            var Specialities = _clinicContext.Specialities;
            if (Specialities.Count() == 0)
                throw new Exception("No Specialities in the database");
            return (await Specialities.ToListAsync());
        }
        

    }
}
