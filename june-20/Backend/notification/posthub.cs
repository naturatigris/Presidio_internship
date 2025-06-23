using Microsoft.AspNetCore.SignalR;
using BlogPlatform.Models.DTOs;

namespace BlogPlatform.Hubs
{
public class PostHub : Hub
{
    public async Task BroadcastPost(Postto post)
    {
        try
        {
            await Clients.All.SendAsync("ReceivePost", post);
        }
        catch (Exception ex)
        {
            Console.WriteLine("SignalR Hub Error: " + ex.Message);
        }
    }
}
}
