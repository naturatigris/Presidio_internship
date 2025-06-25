import { Component ,OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../Service/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
  username$:any;
  usrname:string|null = "";
  name: string | null = null;

  constructor(private userService:UserService,private route: ActivatedRoute)
  {
    
  }
    ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('un');
  }


}
