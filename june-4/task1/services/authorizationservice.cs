using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using FirstAPI.Services;
using FirstAPI.Requirements;

namespace FirstAPI.Services
{
    public class ExperienceRequirementHandler : AuthorizationHandler<ExperienceRequirement>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, ExperienceRequirement requirement)
        {
            var experienceClaim = context.User.FindFirst("YearsOfExperience");
            if (experienceClaim != null && int.TryParse(experienceClaim.Value, out int years))
            {
                if (years >= requirement.MinimumYears)
                {
                    context.Succeed(requirement);
                }
            }

            return Task.CompletedTask;
        }
    }
}