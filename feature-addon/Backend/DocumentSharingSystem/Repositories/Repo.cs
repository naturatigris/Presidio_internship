using System;
using System.Threading.Tasks;
using DocumentSharingSystem.Contexts;
using DocumentSharingSystem.Interfaces;

namespace DocumentSharingSystem.Repositories;

public abstract class Repo<K,T> : IRepo<K,T> where T : class
{
    protected readonly DocumentSharingSystemContext _context;
    public Repo(DocumentSharingSystemContext DocumentSharingSystemContext)
    {
        _context = DocumentSharingSystemContext;
    }

    public abstract Task<T> Get(K id);
    public abstract Task<ICollection<T>> GetAll();

    public virtual async Task<T> Add(T item)
    {
        await _context.AddAsync(item);
        await _context.SaveChangesAsync();
        return item;
    }

    public virtual async Task<T> Update(K id, T item)
    {
        T? listitem = await Get(id);
        if (listitem == null) throw new Exception("No user found");
        typeof(T).GetProperty("Id")?.SetValue(item, id);
        _context.Entry(listitem).CurrentValues.SetValues(item);
        await _context.SaveChangesAsync();
        return item;
    }

    public virtual async Task<T> Delete(K id, Guid userId)
    {
        T? listitem = await Get(id);
        if (listitem == null) throw new Exception("No user found");
        // _context.Remove(listitem);
        var entity = _context.Entry(listitem);

        typeof(T).GetProperty("IsDeleted")?.SetValue(listitem, true);
        typeof(T).GetProperty("LastUpdatedByUserId")?.SetValue(listitem, userId);
        typeof(T).GetProperty("LastUpdatedAt")?.SetValue(listitem, DateTime.UtcNow);

        entity.CurrentValues.SetValues(listitem);
        await _context.SaveChangesAsync();
        
        return listitem;
    }

}
