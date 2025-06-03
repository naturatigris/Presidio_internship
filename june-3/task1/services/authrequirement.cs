using Microsoft.AspNetCore.Authorization;

namespace FirstAPI.Requirements
{
    public class ExperienceRequirement : IAuthorizationRequirement
    {
        public int MinimumYears { get; }
        public ExperienceRequirement(int _MinimumYears)
         { MinimumYears = _MinimumYears; }
    }
}