using Ganss.Xss;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Net;

public class SanitizeInputFilter : IAsyncActionFilter
{
    private readonly HtmlSanitizer _sanitizer;

    public SanitizeInputFilter()
    {
        _sanitizer = new HtmlSanitizer();
        _sanitizer.AllowedTags.Clear(); // Disallow all tags
    }

    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
        foreach (var key in context.ActionArguments.Keys.ToList())
        {
            var argument = context.ActionArguments[key];
            if (argument == null) continue;

            // Handle string parameters (primitives)
            if (argument is string strValue)
            {
                var decoded = WebUtility.UrlDecode(strValue);
                var sanitized = _sanitizer.Sanitize(decoded);

                if (sanitized != decoded)
                {
                    context.Result = new BadRequestObjectResult(
                        $"Invalid input in parameter '{key}': possible XSS content."
                    );
                    return;
                }

                context.ActionArguments[key] = sanitized;
            }
            // Handle complex objects (models)
            else
            {
                var props = argument.GetType().GetProperties()
                    .Where(p => p.PropertyType == typeof(string) && p.CanRead && p.CanWrite);

                foreach (var prop in props)
                {
                    var rawValue = prop.GetValue(argument) as string;
                    if (rawValue == null) continue;

                    var decoded = WebUtility.UrlDecode(rawValue);
                    var sanitized = _sanitizer.Sanitize(decoded);

                    if (sanitized != decoded)
                    {
                        context.Result = new BadRequestObjectResult(
                            $"Invalid input in property '{prop.Name}': possible XSS content."
                        );
                        return;
                    }

                    prop.SetValue(argument, sanitized);
                }
            }
        }

        await next();
    }
}
