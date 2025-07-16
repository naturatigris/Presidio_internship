// redirect.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getUserRole } from './misc/jwtdecode';

@Component({
  selector: 'app-redirect',
  template: ''
})
export class RedirectComponent {
  constructor(private router: Router) {
    const role = getUserRole(); 
    if (role === 'Admin') {
      this.router.navigate(['/dashboard/admin']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}
