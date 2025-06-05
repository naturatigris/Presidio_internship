using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Organization.Hubs
{
    public class NotificationHub : Hub
    {
        public override async Task OnConnectedAsync()
        {
            await Clients.Caller.SendAsync("Connected", $"You are connected with connection ID: {Context.ConnectionId}");
        }

    }
}
