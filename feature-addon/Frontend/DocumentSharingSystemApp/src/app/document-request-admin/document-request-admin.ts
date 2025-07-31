import { Component, OnInit, signal } from '@angular/core';
import { DocumentRestoreService, rquestdocumentsresponse } from '../services/documentrestore.service';
import { UserService } from '../services/user.service';
import { Store } from '@ngxs/store';
import { UserModel } from '../models/user.model';
import { CurrentUserState } from '../current-user/current-user.state';
import { Navbar } from '../navbar/navbar';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { DocumentRestoreRequestModel } from '../models/document.request.model';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-document-request-admin',
  standalone: true,
  imports: [
    Navbar,
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule
  ],
  templateUrl: './document-request-admin.html',
  styleUrl: './document-request-admin.css'
})
export class DocumentRequestAdmin implements OnInit {
  requests = new MatTableDataSource<DocumentRestoreRequestModel>([]);
  totalRequests = 0;
  currentUser: UserModel | null = null;

  tabs = ['Pending', 'Closed'];
  activeTab = signal(this.tabs[0]);

  displayedColumns = ['requestedBy', 'document', 'reason', 'requestedAt', 'status', 'actions'];

  constructor(
    private documentRestoreService: DocumentRestoreService,
    private store: Store,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.store.select(CurrentUserState.getUser).subscribe(user => {
      this.currentUser = user;
      if (!this.currentUser) {
        this.userService.getCurrentUserDetails().subscribe({
          next: data => {
            this.currentUser = data;
            if (this.currentUser) {
              this.loadRequest(this.activeTab().toLowerCase());
            }
          }
        });
      } else {
        this.loadRequest(this.activeTab().toLowerCase());
      }
    });
  }

  loadRequest(type: string) {
  if (!this.currentUser) return;

  this.documentRestoreService.getFilteredRequests(type, 1, 6, this.currentUser).subscribe({
    next: (data:any) => {
this.requests = new MatTableDataSource<DocumentRestoreRequestModel>(data.data.$values);
      this.totalRequests = data.totalRecords;
            console.log(data.data.$values,this.totalRequests)

    },
    error: err => {
      console.error('Failed to fetch document restore requests:', err);
    }
  });
}

onPageChange(event: PageEvent) {
  const type = this.activeTab().toLowerCase();
  this.documentRestoreService.getFilteredRequests(type, event.pageIndex + 1, event.pageSize, this.currentUser!).subscribe({
    next: (data) => {
      this.requests = new MatTableDataSource<DocumentRestoreRequestModel>(data.data); // Fix here
      this.totalRequests = data.totalRecords;
    }
  });
}


  setTab(value: string) {
    this.activeTab.set(value);
    this.loadRequest(value.toLowerCase());
  }


  getStatusColor(status: string): 'warn' | 'accent' | 'primary' {
    switch (status.toLowerCase()) {
      case 'pending': return 'warn';
      case 'approved': return 'primary';
      case 'rejected': return 'accent';
      default: return 'primary';
    }
  }

approveRequest(req: DocumentRestoreRequestModel) {
  this.documentRestoreService.approveRequest(this.currentUser!, req.id, this.currentUser?.id!)
    .pipe(
      finalize(() => {
        this.loadRequest(this.activeTab().toLowerCase()); // Refetch after approval
      })
    )
    .subscribe({
      next: () => console.log('Request approved'),
      error: err => console.error('Approval failed', err)
    });
}

rejectRequest(req: DocumentRestoreRequestModel) {
  this.documentRestoreService.rejectRequest(this.currentUser!, req.id, this.currentUser?.id!) // Assuming this method exists
    .pipe(
      finalize(() => {
        this.loadRequest(this.activeTab().toLowerCase()); // Refetch after rejection
      })
    )
    .subscribe({
      next: () => console.log('Request rejected'),
      error: err => console.error('Rejection failed', err)
    });
}}
