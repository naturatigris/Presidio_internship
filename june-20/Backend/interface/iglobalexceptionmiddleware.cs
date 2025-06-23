namespace BlogPlatform.Middleware
{
    public interface IGlobalExceptionMiddleware
    {
        Task Invoke(HttpContext context);
    }
}
