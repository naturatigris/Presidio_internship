import { Component ,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { Home } from './home/home';
import { UserService } from './service/user.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'blogpanel';
  constructor(private userService: UserService){}
  ngOnInit(): void {
  this.userService.getUserProfile();
}

}
