import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../service/post.service';
import { PostQueryParams } from '../models/postquerymodel';
import { Post } from '../models/postmodel';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  posts: Post[] = [];
      constructor(private postService: PostService) {}

  ngOnInit() {
    const filterParams: PostQueryParams = {
      userEmail: 'sandhya123@gmail.com',
      status: 'Published',
      pageNumber: 1,
      pageSize: 10,
      categories: ['technology']
    };

    this.postService.getFilteredPosts(filterParams).subscribe({
      next: data => this.posts = data,
      error: err => console.error('Error fetching posts', err)
    });
}
}
