using FirstAPI.Models;
namespace FirstAPI.Interfaces
{
    public interface IPatientRepository
    {
        Patient GetById(int id);
        IEnumerable<Patient> GetAll();
        void Add(Patient patient);
        void Update(Patient patient);
        void Delete(int id);
    }


}
