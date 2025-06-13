// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../models/credentials';
import { LoginService } from '../Services/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  user: User = { UserName: '', Password: '' };
  useSession: boolean = false;
  errorMsg = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login(username: string, password: string, useSession: boolean) {
    this.user.UserName=username;
    this.user.Password=password;
    this.useSession=useSession;
    if (this.loginService.login(this.user)) {
      this.loginService.saveUser(this.user, this.useSession);
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMsg = 'Invalid credentials';
    }
  }
}
