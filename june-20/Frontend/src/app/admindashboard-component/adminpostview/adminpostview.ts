import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../service/post.service';
import { PostQueryParams } from '../../models/postquerymodel';
import { Post } from '../../models/postmodel';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../service/category.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-adminpostview',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './adminpostview.html',
  styleUrl: './adminpostview.css'
})
export class Adminpostview {
    posts: Post[] = [];
  totalPages: number = 1;
currentPage: number = 1;
totalItems: number = 0;

  fetchedCategories:string[]=[];
      constructor(private postService: PostService,private router: Router,private categoryservice:CategoryService) {}
    filteredParams:PostQueryParams={  
      searchTerm:'',
      sortOrder: 'asc',
      pageNumber: 1,
      pageSize: 10,
      categories:[]
}
selectedCategory: string = '';

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

  this.postService.DeletePost(id).subscribe({
    next: () => {
      this.posts = this.posts.filter(post => post.id !== id);
    },
    error: err => {
      console.error('Error deleting post:', err);
      alert('Failed to delete the post.');
    }
  });
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
