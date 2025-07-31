import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentRestoreService } from '../services/documentrestore.service';
import { DocumentRequestModal } from '../document-request-modal/document-request-modal';
import { DocumentRestoreRequestModel } from '../models/document.request.model';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Store } from '@ngxs/store';
import { CurrentUserState } from '../current-user/current-user.state';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-requestdetail',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './requestdetail.html',
  styleUrl: './requestdetail.css'
})
export class Requestdetail {
   @Input() documentId: string = '';
  @Output() close = new EventEmitter<void>();

  currentUser: UserModel | null = null;
  request: DocumentRestoreRequestModel | null = null;

  constructor(
    private documentRestoreService: DocumentRestoreService,
    private userService: UserService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.select(CurrentUserState.getUser).subscribe(user => {
      this.currentUser = user;

      if (!this.currentUser) {
        this.userService.getCurrentUserDetails().subscribe({
          next: (data: UserModel | null) => {
            this.currentUser = data;
            if (!this.currentUser) {
              console.log("User not logged in.");
              return;
            }
            this.loadRequest();
          }
        });
      } else {
        this.loadRequest();
      }
    });
  }

  loadRequest(): void {
    if (!this.documentId || !this.currentUser) return;

    this.documentRestoreService.getRequestByDocumentId(this.documentId, this.currentUser).subscribe({
      next: (data: DocumentRestoreRequestModel | null) => {
        console.log("documentstatus",data);
        this.request = data;
      },
      error: (err) => {
        console.error('Failed to fetch document restore request:', err);
      }
    });
  }

  onClose(): void {
    this.close.emit();
  }}
