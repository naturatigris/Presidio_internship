import { Component, Output, EventEmitter,OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { UserProfile } from '../models/userprofilemodel';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule,CommonModule,NgOptimizedImage],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit{
  isSidebarOpen = false;
    user: UserProfile | null = null;
      profileImageSrc: SafeUrl = 'https://images.unsplash.com/photo-1620053580376-3de604e91953?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww';


    @Output() toggle = new EventEmitter<boolean>();
  constructor(private userService: UserService,private sanitizer: DomSanitizer,private router:Router) {}


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
        this.toggle.emit(this.isSidebarOpen);

  }
  dropdownOpen: boolean = false;

toggleDropdown() {
  this.dropdownOpen = !this.dropdownOpen;
}

viewProfile() {
  this.router.navigate(['/profile']); 
}

viewHistory() {
  this.router.navigate(['/history']); 
}

    ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user;
            if (user?.profileImage) {
        this.profileImageSrc = this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${user.profileImage}`);
      }

    });

  }
    private arrayBufferToBase64(buffer: Uint8Array): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    bytes.forEach(b => binary += String.fromCharCode(b));
    return window.btoa(binary);
  }
logout() {
  localStorage.removeItem('token');
  sessionStorage.removeItem('email');
  localStorage.clear();  
  this.router.navigate(['/login']);  
}




}
