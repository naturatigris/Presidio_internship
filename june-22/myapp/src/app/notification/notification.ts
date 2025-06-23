import { Component } from '@angular/core';
import { NotificationService } from '../Service/notification.service';


@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class Notification {
    username = '';
  message = '';

  constructor(public notifyService: NotificationService) {}

  ngOnInit(): void {
    this.notifyService.startConnection();
  }

  send(): void {
    if (this.username && this.message) {
      this.notifyService.sendMessage(this.username, this.message);
      this.message = '';
    }
  }


}
