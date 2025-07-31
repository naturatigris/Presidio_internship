import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlertService, InactivityAlert } from '../services/inactive.alert';
import { switchMap } from 'rxjs';
import { DocumentRestoreService } from '../services/documentrestore.service';
import { DocumentRestoreRequestModel } from '../models/document.request.model';

@Component({
  selector: 'app-notification',
  imports: [Navbar,MatCardModule,MatButtonModule, MatIconModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class Notification {
  currentUser : UserModel | null = null;
  notifications : {user : string, message : string}[] =[]
  alerts : InactivityAlert[] =[]

  constructor(private userService : UserService,private notifyService : NotificationService ,private alertservice:AlertService,private documentrestoreservice:DocumentRestoreService){
   

  }
  ngOnInit(): void {
    this.userService.user$.subscribe({
      next: (data: any) => {
        this.currentUser = data;

        if (this.currentUser) {
          this.alertservice.getActiveAlerts(this.currentUser, this.currentUser.id);
        }
      }
    });

    this.notifyService.notification$.subscribe({
      next: (data: any) => {
        this.notifications = data;
      }
    });

    this.alertservice.alerts$.subscribe({
      next: (data: any) => {
        this.alerts = Array.isArray(data?.$values) ? data.$values : [];
        console.log('alerts', this.alerts);
      }
    });
  }
    dismissAlert(alertId: string): void {
  if (!this.currentUser) return;

  this.alertservice.dismissAlert(this.currentUser, alertId, this.currentUser.id).subscribe({
    next: () => {
        this.alerts = this.alerts.filter(alert => alert.id !== alertId);

      this.alertservice.getActiveAlerts(this.currentUser!, this.currentUser!.id);
    }
  });
}

  dismissNotification(index: number): void {
    this.notifications.splice(index, 1);
  }
  
}
