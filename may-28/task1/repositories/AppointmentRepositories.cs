using FirstAPI.Contexts;
using FirstAPI.Interfaces;
using FirstAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FirstAPI.Repositories
{
    public class AppointmnetRepo : Repository<int, Appointmnet>
    {
        protected AppointmnetRepo(ClinicContext clinicContext) : base(clinicContext)
        {
        }

        public override async Task<Appointmnet> Get(int key)
        {
        var Appointmnet = await _clinicContext.Appointmnets.SingleOrDefaultAsync(p => p.AppointmnetNumber == key.ToString());

            return Appointmnet ?? throw new Exception("No Appointmnet with teh given ID");
        }

        public override async Task<IEnumerable<Appointmnet>> GetAll()
        {
            var Appointmnets = _clinicContext.Appointmnets;
            if (Appointmnets.Count() == 0)
                throw new Exception("No Appointmnets in the database");
            return (await Appointmnets.ToListAsync());
        }
        

    }
}
