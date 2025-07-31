using System;
using System.Threading.Tasks;
using DocumentSharingSystem.Contexts;
using DocumentSharingSystem.Interfaces;
using DocumentSharingSystem.Misc;
using DocumentSharingSystem.Models;
using DocumentSharingSystem.Models.DTOs;
using Microsoft.AspNetCore.SignalR;

namespace DocumentSharingSystem.Services;

public class InactivityalertService
{
    private readonly IRepo<Guid, InactivityAlert> _alertRepo;
    private readonly DocumentSharingSystemContext _context;
    private readonly ILogger<AuthenticationService> _logger;
    private readonly IHubContext<NotificationHub> _notificationHub;
    private readonly UserService _userService;

    public InactivityalertService(IRepo<Guid, InactivityAlert> alertRepo, IHubContext<NotificationHub> notificationHub, DocumentSharingSystemContext context, ILogger<AuthenticationService> logger, UserService userService)
    {
        _alertRepo = alertRepo;
        _notificationHub = notificationHub;
        _context = context;
        _logger = logger;
        _userService = userService;
    }

    public async Task<int?> UserActivity(Guid UserID)
    {
        var alerts = await _alertRepo.GetAll();
        var user = await _userService.GetUser(UserID);
        var val = await _context.GetDaysBetweenLoginsAsync(UserID);

        var latestAlert = alerts.Where(u => u.UserId == UserID && u.IsDismissed != true).OrderByDescending(u => u.AlertedAt).FirstOrDefault();
        _logger.LogInformation("Days between last two logins for user {Days}", val);
        if (val <= -30)
        {


            if (latestAlert != null)
            {
                latestAlert.DismissedAt = DateTime.UtcNow;
                latestAlert.IsDismissed = true;
                latestAlert.DismissedByUserId = user.Id;
            


            }
            var newAlert = new InactivityAlert
            {
                Id = Guid.NewGuid(),
                UserId = UserID,
                User=user,
                AlertedAt = DateTime.UtcNow,
                DaysInactive = val ?? 0,
                IsDismissed = false,
                IsArchived = false
            };

            await _alertRepo.Add(newAlert);




        }
        return val;

    }

    public async Task<bool> DismissAlertAsync(Guid alertId, Guid dismissedByUserId)
    {
        try
        {
            var alert = await _alertRepo.Get(alertId);
            if (alert == null)
            {
                _logger.LogWarning("No alert found with ID {AlertId}", alertId);
                return false;
            }

            alert.IsDismissed = true;
            alert.DismissedAt = DateTime.UtcNow;
            alert.DismissedByUserId = dismissedByUserId;

            await _alertRepo.Update(alertId, alert);

            _logger.LogInformation("Alert {AlertId} dismissed by user {UserId}", alertId, dismissedByUserId);
            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error dismissing alert {AlertId}", alertId);
            return false;
        }
    }
    public async Task<IEnumerable<InactivityAlert>> GetActiveAlertsForUserAsync(Guid userId)
    {
        var alerts = await _alertRepo.GetAll();
        return alerts.Where(a => a.UserId == userId && !a.IsDismissed);
    }


}





