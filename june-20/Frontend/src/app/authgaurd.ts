import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { getUserRole } from './misc/jwtdecode';
import { UserService } from './service/user.service';
import { UserProfile } from './models/userprofilemodel';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user:UserProfile|null=null;
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private userservice:UserService
  ) {}

  canActivate(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      this.userservice.user$.subscribe(user => {
      this.user = user;
            
      });
      
      if (token && !this.user?.isSuspended) return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    const role = getUserRole();

    if (token && role === 'Admin') {
      return true;
    }

    this.router.navigate(['/login']); 
    return false;
  }
}
