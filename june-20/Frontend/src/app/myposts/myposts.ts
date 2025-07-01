import { Component,OnInit } from '@angular/core';
import { Post } from '../models/postmodel';
import { PostService } from '../service/post.service';
import { PostQueryParams } from '../models/postquerymodel';
import { getUserEmail } from '../misc/jwtdecode';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostLikeService } from '../service/postlike.service';


@Component({
  selector: 'app-myposts',
  imports: [CommonModule],
  templateUrl: './myposts.html',
  styleUrl: './myposts.css'
})
export class Myposts implements OnInit {
  activeTab: 'published' | 'drafts' = 'published';

  publishedposts: Post[] = [];
    drafts: Post[] = [];
    ptotalPages: number = 1;
pcurrentPage: number = 1;
ptotalItems: number = 0;
dtotalPages: number = 1;
dcurrentPage: number = 1;
dtotalItems: number = 0;
postLikes: { [postId: string]: number } = {};
likedPostIds: Set<string> = new Set();






      filteredParams:PostQueryParams={  
        userEmail:'',
        searchTerm:'',
        status:'Published',
        sortOrder: 'asc',
        pageNumber: 1,
        pageSize: 10,
        categories:[]
  }
        filteredParamsDrafts:PostQueryParams={  
        userEmail:'',
        searchTerm:'',
        status:'Draft',
        sortOrder: 'asc',
        pageNumber: 1,
        pageSize: 10,
        categories:[]
  }

  constructor(private postservice:PostService,private router:Router,private postLikeService: PostLikeService){}
  viewPost(id?: string) {
  console.log(id);
  if (!id) return; 
  this.router.navigate(['dashboard/post', id]);
}
  editPost(id?: string) {
  console.log(id);
  if (!id) return; 
  this.router.navigate(['myposts/edit', id]);
}
DeletePost(id?: string): void {  
  if (!id) return;

  const confirmDelete = confirm('Are you sure you want to delete this post?');
  if (!confirmDelete) return;

  this.postservice.DeletePost(id).subscribe({
    next: () => {
      this.publishedposts = this.publishedposts.filter(post => post.id !== id);
    },
    error: err => {
      console.error('Error deleting post:', err);
      alert('Failed to delete the post.');
    }
  });
}
togglePostLike(postId: string) {
  const email = localStorage.getItem('email');
  if (!email) return;

  if (this.likedPostIds.has(postId)) {
    this.postLikeService.unlikePost(postId, email).subscribe(() => {
      this.likedPostIds.delete(postId);
      this.postLikes[postId] = (this.postLikes[postId] || 1) - 1;
    });
  } else {
    this.postLikeService.likePost(postId, email).subscribe(() => {
      this.likedPostIds.add(postId);
      this.postLikes[postId] = (this.postLikes[postId] || 0) + 1;
    });
  }
}




  ngOnInit(): void {
    const email=getUserEmail();
    if(email){
    this.filteredParams.userEmail=email;
    this.filteredParamsDrafts.userEmail=email;
  }
  //for published posts
    this.postservice.getFilteredPosts(this.filteredParams).subscribe({      
    next: (response) => {
      this.publishedposts = response.items;
      this.ptotalPages = response.totalPages;
      this.ptotalItems = response.totalItems;
      this.pcurrentPage = response.currentPage;
            const email = getUserEmail();

      this.postLikeService.getLikesByUser(email!).subscribe({
        next: (likes) => {
          const likedIds = likes.map(like => like.postId);
          this.likedPostIds = new Set(likedIds);
        }
      });

      this.publishedposts.forEach(post => {
        this.postLikeService.getLikeCount(post.id!).subscribe(count => {
          this.postLikes[post.id!] = count;
        });
      });

    },
      error: err => console.error('Error fetching posts', err)

    });
    //for drafts
      this.postservice.getFilteredPosts(this.filteredParamsDrafts).subscribe({      
    next: (response) => {
      this.drafts = response.items;
      this.ptotalPages = response.totalPages;
      this.ptotalItems = response.totalItems;
      this.pcurrentPage = response.currentPage;
    },
      error: err => console.error('Error fetching posts', err)

    });

  }
}
