using System.Threading.Tasks;

namespace BlogPlatform.Interfaces
{
    public interface IUserValidationService
    {
        Task ValidateUserEmail(string email);
    }
}
