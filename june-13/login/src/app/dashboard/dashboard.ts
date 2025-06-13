// src/app/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login';
import { User } from '../models/credentials';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {
  user: User | null = null;
  useSession = false; // Toggle this to test sessionStorage vs localStorage

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.user = this.loginService.getUser(this.useSession);
  }
}
