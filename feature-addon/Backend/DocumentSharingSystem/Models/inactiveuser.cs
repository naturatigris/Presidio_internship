using DocumentSharingSystem.Models;

public class InactivityAlert
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid UserId { get; set; }               
    public User User { get; set; }               

    public DateTime AlertedAt { get; set; }        
    public int DaysInactive { get; set; }         

    public bool IsDismissed { get; set; } = false; 
    public DateTime? DismissedAt { get; set; }     
    public Guid? DismissedByUserId { get; set; }   
    public User? DismissedByUser { get; set; }    

    public bool IsArchived { get; set; } = false;  
    public DateTime? ArchivedAt { get; set; }      
}
