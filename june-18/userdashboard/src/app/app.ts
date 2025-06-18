import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './users/users';
import { Navbarr } from './navbarr/navbarr';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Users,Navbarr],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'userdashboard';
}
