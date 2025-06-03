using FirstAPI.Models;
using FirstAPI.Models.DTOs.DoctorSpecialities;


namespace FirstAPI.Interfaces
{
    public interface IPatientService
    {
        public Task<Patient> GetPatByName(string name);
        public Task<(Patient, string)> AddPatient(PatientAddRequestDto pat);
    }
}