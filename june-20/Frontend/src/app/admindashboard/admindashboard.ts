import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserProfile as User } from '../models/userprofilemodel';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Adminpostcomponent } from '../admindashboard-component/adminpostcomponent/adminpostcomponent';
import { Admindashboardanalytics } from '../admindashboard-component/admindashboardanalytics/admindashboardanalytics';
import { Adminpostview } from '../admindashboard-component/adminpostview/adminpostview';
import { PostService } from '../service/post.service';
import { CommentService } from '../service/comment.service';
import { CommentQueryParams } from '../models/commentqueryparams';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.html',
  styleUrls: ['./admindashboard.css'],
  imports:[CommonModule,ReactiveFormsModule,FormsModule,RouterModule,Adminpostcomponent,Admindashboardanalytics,Adminpostview]

})
export class Admindashboard implements OnInit {
  users: User[] = [];
  totalUsers = 0;
  totalPosts = 0;       
  totalComments = 0;    

  pageNumber = 1;
  pageSize = 10;
  totalItems = 0;

  filters = {
    role: '',
    status: ''
  };
  confirmDelete: boolean = false;
  userToDelete: any = null;



  constructor(private userService: UserService,private postService:PostService,private commentService:CommentService) {}

  ngOnInit(): void {
    this.loadUsers();
    this.postcount();
    this.commentcount();

  }
  postcount(){
this.postService.getAllPosts().subscribe({
  next:res=>{this.totalPosts=res.length;
  },
    error: err => {
    console.error('Error fetching total posts:', err);
  }

})

  }
    commentcount(){
this.commentService.getFilteredComments({} as CommentQueryParams).subscribe({
  next:res=>{this.totalComments=res.totalCount;
  },
    error: err => {
    console.error('Error fetching total posts:', err);
  }

})

  }


deleteAccount(email: string) {
  this.userToDelete = this.users.find(u => u.email === email);
  this.confirmDelete = true;
}

cancelDelete() {
  this.confirmDelete = false;
  this.userToDelete = null;
}

confirmDeleteUser() {
  if (this.userToDelete) {
    this.userService.DeleteUser(this.userToDelete.email).subscribe(() => {
      this.loadUsers(); 
      this.confirmDelete = false;
      this.userToDelete = null;
    });
  }
}

loadUsers() {
  this.userService.getFilteredUsers(
    this.filters.role,
    this.filters.status,
    'asc',
    this.pageNumber,
    this.pageSize
  ).subscribe({
    next: res => {
      this.users = res.items;
      this.totalItems = res.totalItems;
      this.totalUsers = res.totalItems;
    },
    error: err => {
      console.error('Error loading users:', err);
      this.users = []; // clear previous data
      this.totalItems = 0;
    }
  });
}

  applyFilters() {
    this.pageNumber = 1;
    this.loadUsers();
  }

  nextPage() {
    if ((this.pageNumber * this.pageSize) < this.totalItems) {
      this.pageNumber++;
      this.loadUsers();
    }
  }

  prevPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.loadUsers();
    }
  }
}
