import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { UserService } from '../services/user.service';
import { Store } from '@ngxs/store';
import { CurrentUserState } from '../current-user/current-user.state';
import { UserModel } from '../models/user.model';
import { DocumentRestoreService } from '../services/documentrestore.service';
import { DocumentRequestModal } from '../document-request-modal/document-request-modal';
import { MatCardModule } from '@angular/material/card';
import { DocumentRestoreRequestModel } from '../models/document.request.model';


@Component({
  selector: 'app-document-request-user',
  imports: [Navbar,CommonModule,MatCardModule],
  templateUrl: './document-request-user.html',
  styleUrl: './document-request-user.css'
})
export class DocumentRequestUser implements OnInit{
  currentUser:UserModel|null=null;
  requests:DocumentRestoreRequestModel[]=[];
  constructor(private userService:UserService,private store:Store,private documentRestoreService:DocumentRestoreService){}
  ngOnInit(): void {
    this.store.select(CurrentUserState.getUser).subscribe(user => {
          this.currentUser = user;
          if (!this.currentUser) {
            this.userService.getCurrentUserDetails().subscribe({
              next: data => {
                this.currentUser = data;
                if (this.currentUser) {
                  this.loadrequest();
                }
              }
            });
          } else {
            this.loadrequest();
          }
        });
    
  }
  loadrequest(){
    this.documentRestoreService.getRequestByUserId(this.currentUser!).subscribe({
      next:(data:any)=>{
      this.requests = data?.$values ?? [];
      console.log(this.requests);

      },error(err) {
        console.log("error fetching the requests",err);
      },
    })

  }
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'status-approved';
      case 'rejected':
        return 'status-rejected';
      case 'pending':
        return 'status-pending';
      default:
        return '';
    }

}
}