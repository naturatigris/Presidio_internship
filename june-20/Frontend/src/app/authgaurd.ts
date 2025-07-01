import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { getUserRole } from './misc/jwtdecode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      if (token) return true;
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

    this.router.navigate(['/login']); // or redirect to homepage
    return false;
  }
}
