using System.Threading.Tasks;
using AutoMapper;
using FirstAPI.Interfaces;
using FirstAPI.Misc;
using FirstAPI.Models;
using FirstAPI.Models.DTOs.DoctorSpecialities;


namespace FirstAPI.Services
{
    public class PatientService : IPatientService
    {
    private readonly IRepository<int, Patient> _patientRepository;
    private readonly IRepository<string, User> _userRepository;
    private readonly IEncryptionService _encryptionService;
    private readonly ITokenService _tokenService; // your JWT token generator
    private readonly IMapper _mapper;
    public PatientService(
        IRepository<int, Patient> patientRepository,
        IRepository<string, User> userRepository,
        IEncryptionService encryptionService,
        ITokenService tokenService,
        IMapper mapper)
    {
        _patientRepository = patientRepository;
        _userRepository = userRepository;
        _encryptionService = encryptionService;
        _tokenService = tokenService;
        _mapper = mapper;
    }

    public async Task<(Patient, string )> AddPatient (PatientAddRequestDto dto)
    {
        var user = new User
        {
            Username = dto.Email,
            Role = "Patient"
        };

        var encryptedData = await _encryptionService.EncryptData(new EncryptModel
        {
            Data = dto.Password
        });

        user.Password = encryptedData.EncryptedData;
        user.HashKey = encryptedData.HashKey;

        user = await _userRepository.Add(user);

        var patient = new Patient
        {
            Name = dto.Name,
            Age = dto.Age,
            Email = user.Username,  // link by email
            Phone = dto.Phone,
            User = user
        };

        patient = await _patientRepository.Add(patient);

        var token = await _tokenService.GenerateToken(user);

    return (patient, token);
    }

        public Task<Patient> GetPatByName(string name)
        {
            throw new NotImplementedException();
        }

    }
}