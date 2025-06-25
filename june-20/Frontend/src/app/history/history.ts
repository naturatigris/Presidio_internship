import { Component,OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { CommentService } from '../service/comment.service';
import { Post } from '../models/postmodel';
import { Comment } from '../models/commentmodel';
import { PostQueryParams } from '../models/postquerymodel';
import { getUserEmail } from '../misc/jwtdecode';
import { CommentQueryParams } from '../models/commentqueryparams';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-history',
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrl: './history.css'
})
export class History implements OnInit{
    activeTab: 'Posts' | 'Comments' = 'Posts';
    posts:Post[]=[];
    comments:Comment[]=[];
    ptotalPages: number = 1;
    pcurrentPage: number = 1;
    ptotalItems: number = 0;

    filteredParams:PostQueryParams={  
            userEmail:'',
            searchTerm:'',
            status:'Published',
            sortOrder: 'asc',
            pageNumber: 1,
            pageSize: 10,
            categories:[]
      }
   queryParams:CommentQueryParams = {
    userEmail:'',
    status: 'Available',
    pageNumber: 1,
    pageSize: 5,
    sortOrder: 'desc'
  };

    
    constructor(private postservice:PostService,private commentservice:CommentService){}

ngOnInit(): void {
      const email=getUserEmail();
      if(email){
      this.filteredParams.userEmail=email;
      this.queryParams.userEmail=email;
    }
      this.postservice.getFilteredPosts(this.filteredParams).subscribe({      
    next: (response) => {
      this.posts = response.items;
      this.ptotalPages = response.totalPages;
      this.ptotalItems = response.totalItems;
      this.pcurrentPage = response.currentPage;
    },
      error: err => console.error('Error fetching posts', err)

    });

  this.commentservice.getFilteredComments(this.queryParams).subscribe({
    next:(res)=>{
      this.comments=res.items;
    },
      error: err => console.error('Error fetching posts', err)
  });

  
  
}
}
