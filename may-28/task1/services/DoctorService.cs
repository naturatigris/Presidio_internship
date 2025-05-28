using FirstAPI.Interfaces;
using System.Linq;
using FirstAPI.Models;
using FirstAPI.Models.DTOs.DoctorSpecialities;

namespace FirstAPI.Services
{
    public class DoctorService : IDoctorService
    {
        private readonly IRepository<int, Doctor> _doctorRepository;
        private readonly IRepository<int, Speciality> _specialityRepository;
        private readonly IRepository<int, DoctorSpeciality> _doctorSpecialityRepository;

        public DoctorService(IRepository<int, Doctor> doctorRepository,
                            IRepository<int, Speciality> specialityRepository,
                            IRepository<int, DoctorSpeciality> doctorSpecialityRepository)
        {

            _doctorRepository = doctorRepository;
            _doctorSpecialityRepository = doctorSpecialityRepository;
            _specialityRepository = specialityRepository;
        }
        public async Task<Doctor> GetDoctByName(string name) {
            var result = await _doctorRepository.GetAll();
            return result.FirstOrDefault(d => d.Name.Equals(name, StringComparison.OrdinalIgnoreCase));
        }
        public async Task<ICollection<Doctor>> GetDoctorsBySpeciality(string speciality) {
            var result1 = await _doctorSpecialityRepository.GetAll();
            var result2 = await _specialityRepository.GetAll();
            int? id = result2.Where(s => s.Name.Equals(speciality, StringComparison.OrdinalIgnoreCase)).Select(s => s.Id).FirstOrDefault();
            if (id == 0)
                throw new Exception("no such speciality in the hospital");

            return result1.Where(d => d.SerialNumber == id).Select(d => d.Doctor)
            .Distinct().ToList();
        }
        //extra function
        public async Task<ICollection<DoctorSpeciality>> GetSpecialitiesByDoctor(int doctorId, ICollection<SpecialityAddRequestDto> specialityDtos)
        {
            var doctor = await _doctorRepository.Get(doctorId);
            if (doctor == null)
                throw new Exception("No such doctor in the hospital");

            var specialities = await _specialityRepository.GetAll();
            var doctorSpecialities = await _doctorSpecialityRepository.GetAll();

            foreach (var specialityDto in specialityDtos)
            {
                var existingSpeciality = specialities
                    .FirstOrDefault(s => s.Name.Equals(specialityDto.Name, StringComparison.OrdinalIgnoreCase));

                if (existingSpeciality == null)
                {
                    existingSpeciality = new Speciality
                    {
                        Name = specialityDto.Name,
                        Status = "Active"
                    };
                    await _specialityRepository.Add(existingSpeciality);
                }

                bool alreadyExists = doctorSpecialities.Any(ds =>
                    ds.DoctorId == doctor.Id && ds.SpecialityId == existingSpeciality.Id);

                if (!alreadyExists)
                {
                    var newDoctorSpeciality = new DoctorSpeciality
                    {
                        DoctorId = doctor.Id,
                        SpecialityId = existingSpeciality.Id,
                        SerialNumber = doctor.Id
                    };

                    await _doctorSpecialityRepository.Add(newDoctorSpeciality);
                }
            }

            var updatedDoctorSpecialities = await _doctorSpecialityRepository.GetAll();
            return updatedDoctorSpecialities.Where(ds => ds.DoctorId == doctor.Id).ToList();
        }


        
        public async Task<Doctor> AddDoctor(DoctorAddRequestDto doctor)
        {
            int id = await GenerateId();
            Doctor d = new Doctor
            {
                Id = id,
                Name = doctor.Name,
                Status = "Active",
                YearsOfExperience = doctor.YearsOfExperience,
                DoctorSpecialities =  await GetSpecialitiesByDoctor(id,doctor.Specialities),
                Appointmnets = null
            };
            return await _doctorRepository.Add(d);

        }
        public async Task<int> GenerateId()
            {
                var doctors = await _doctorRepository.GetAll();

                if (doctors == null || !doctors.Any())
                {
                    return 101;
                }

                int maxId = doctors.Max(d => d.Id);
                return maxId + 1;
            }


    }
}