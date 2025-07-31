using DocumentSharingSystem.Contexts;
using DocumentSharingSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace DocumentSharingSystem.Repositories
{
    public class InactivityAlertRepo : Repo<Guid, InactivityAlert>
    {
        public InactivityAlertRepo(DocumentSharingSystemContext context) : base(context)
        {
        }

        public override async Task<InactivityAlert> Delete(Guid id, Guid userId)
        {
            var alert = await Get(id);
            if (alert == null) throw new Exception("No inactivity alert found");
            _context.Remove(alert);
            await _context.SaveChangesAsync();
            return alert;
        }

        public override async Task<InactivityAlert> Get(Guid id)
        {
            var alert = await _context.InactivityAlerts.FindAsync(id);
            if (alert == null) throw new Exception("No inactivity alert found");
            return alert;
        }

        public override async Task<ICollection<InactivityAlert>> GetAll()
        {
            return await _context.InactivityAlerts.Include(u=>u.User).ToListAsync();
        }
    }
}
