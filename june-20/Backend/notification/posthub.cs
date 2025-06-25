using Microsoft.AspNetCore.SignalR;
using BlogPlatform.Models.DTOs;
using BlogPlatform.Models;

namespace BlogPlatform.Hubs
{
    public class PostHub : Hub
    {
        public async Task BroadcastPost(Post post)
        {
            try
            {
                await Clients.All.SendAsync("ReceivePost", post);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error broadcasting post: " + ex.Message);
            }
        }

        public async Task BroadcastComment(Comment comment)
        {
            try
            {
                await Clients.All.SendAsync("ReceiveComment", comment);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error broadcasting comment: " + ex.Message);
            }
        }
    }
}
