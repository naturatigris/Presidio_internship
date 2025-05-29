using FirstAPI.Contexts;
using FirstAPI.Interfaces;
using FirstAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FirstAPI.Repositories
{
    public class DoctorSpecialityrepo : Repository<int, DoctorSpeciality>
    {
        public DoctorSpecialityrepo(ClinicContext clinicContext) : base(clinicContext)
        {
        }

        public override async Task<DoctorSpeciality> Get(int key)
        {
            var DoctorSpecialities = await _clinicContext.DoctorSpecialities.SingleOrDefaultAsync(p => p.SerialNumber == key);

            return DoctorSpecialities ?? throw new Exception("No DoctorSpeciality with teh given ID");
        }

        public override async Task<IEnumerable<DoctorSpeciality>> GetAll()
        {
            var DoctorSpecialities = _clinicContext.DoctorSpecialities;
            if (DoctorSpecialities.Count() == 0)
                throw new Exception("No DoctorSpeciality in the database");
            return (await DoctorSpecialities.ToListAsync());
        }
        

    }
}
