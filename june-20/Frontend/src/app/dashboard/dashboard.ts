import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../service/post.service';
import { PostQueryParams } from '../models/postquerymodel';
import { Post } from '../models/postmodel';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { PostLikeService } from '../service/postlike.service';
import { getUserEmail } from '../misc/jwtdecode';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  posts: Post[] = [];
  totalPages: number = 1;
currentPage: number = 1;
totalItems: number = 0;

  fetchedCategories:string[]=[];
      constructor(private postService: PostService,private router: Router,private categoryservice:CategoryService,  private postLikeService: PostLikeService
) {}
    filteredParams:PostQueryParams={  
      status: 'Published',
      searchTerm:'',
      sortOrder: 'asc',
      pageNumber: 1,
      pageSize: 10,
      categories:[]
}
selectedCategory: string = '';
postLikes: { [postId: string]: number } = {};
likedPostIds: Set<string> = new Set();


onCategoryChange(value: string) {
  this.filteredParams.categories = value ? [value] : [];
}


  ngOnInit() {
this.categoryservice.getAllCategoryNames().subscribe({
  next: (names) => {
    this.fetchedCategories = names;
  },
  error: (err) => {
    console.error('Failed to fetch categories', err);
  }
});

this.fetchPosts()


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

viewPost(id?: string) {
  console.log(id);
  if (!id) return; 
  this.router.navigate(['dashboard/post', id]);
}
applyFilters():void{
  this.posts = []; 

      this.postService.getFilteredPosts(this.filteredParams).subscribe({
    next: (response) => {
      this.posts = response.items;
      this.totalPages = response.totalPages;
      this.totalItems = response.totalItems;
      this.currentPage = response.currentPage;
    },
      error: err => console.error('Error fetching posts', err)

    });
  }
fetchPosts(): void {
  this.filteredParams.pageNumber = this.currentPage;

  this.postService.getFilteredPosts(this.filteredParams).subscribe({
    next: (response) => {
      this.posts = response.items;
      this.totalPages = response.totalPages;
      this.totalItems = response.totalItems;
      this.currentPage = response.currentPage;

      const email = getUserEmail();

      this.postLikeService.getLikesByUser(email!).subscribe({
        next: (likes) => {
          const likedIds = likes.map(like => like.postId);
          this.likedPostIds = new Set(likedIds);
        }
      });

      this.posts.forEach(post => {
        this.postLikeService.getLikeCount(post.id!).subscribe(count => {
          this.postLikes[post.id!] = count;
        });
      });
    },
    error: err => console.error('Error fetching posts', err)
  });
}

  nextPage(): void {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.fetchPosts();
  }
}

prevPage(): void {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.fetchPosts();
  }
}


}
