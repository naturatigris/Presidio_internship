using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Organization.Models;
using Organization.Interfaces;
using System.Linq.Expressions;

namespace Organization.Services
{
    public class EncryptionService : IEncryptionService
    {
        public Task<EncryptModel> EncryptData(EncryptModel data)
        {
            try
            {
                if (data == null || string.IsNullOrEmpty(data.Data))
                    throw new ArgumentNullException(nameof(data), "Data to encrypt cannot be null or empty");

                byte[] salt;

                // If HashKey (salt) is provided, use it; otherwise generate new salt
                if (data.HashKey != null && data.HashKey.Length > 0)
                {
                    salt = data.HashKey;
                }
                else
                {
                    salt = new byte[16];
                    using (var rng = RandomNumberGenerator.Create())
                    {
                        rng.GetBytes(salt);
                    }
                }

                // Hash password with salt using PBKDF2
                using var pbkdf2 = new Rfc2898DeriveBytes(data.Data, salt, 10000, HashAlgorithmName.SHA256);
                byte[] hashedPassword = pbkdf2.GetBytes(32); // 256-bit hash

                return Task.FromResult(new EncryptModel
                {
                    Data = data.Data,
                    HashKey = salt,
                    EncryptedData = hashedPassword
                });
            }
            catch(Exception e)
            {
                throw new("ency"+e.Message); 
            }
        }
    }
}
