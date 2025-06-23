import { Component ,OnInit} from '@angular/core';
import { UserProfile } from '../models/userprofilemodel';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  imports: [FormsModule,CommonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings implements OnInit{
    user: UserProfile | null = null;
      username: string = 'johndoe';
  email: string = 'john.doe@example.com';
  password: string = '';

    profileVisible: boolean = true;
    notificationsEnabled: boolean = true;
    confirmDelete: boolean = false;
    constructor(private userservice:UserService,private router: Router){}

  onSubmit() {
    console.log('Form submitted');
  }

  deleteAccount() {
    
    if (this.confirmDelete) {
      if (this.user){
        this.email=this.user?.email}
      this.userservice.DeleteUser(this.email).subscribe({
        next: (res) => {
          alert('Account deleted successfully!');
          this.router.navigate(['/login']); 
        },
        error: (err) => {
          alert('Failed to delete account: ' + err.message);
        }
      });
    } else {
      this.confirmDelete = true;
    }
  }
  
  ngOnInit(): void {
          this.userservice.user$.subscribe(user => {
      this.user = user;
      }

    );


  }

}
