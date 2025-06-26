import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../service/notification.service';
import { Post } from '../models/postmodel';
import { Comment } from '../models/commentmodel';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommentService } from '../service/comment.service';
import { PostService } from '../service/post.service';
@Component({
  selector: 'app-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications implements OnInit {
  posts: Post[] = [];
  comments: Comment[] = [];

  constructor(private notificationService: NotificationService,private router:Router,private postService:PostService,private commentService:CommentService) {}
viewpost(postId: string) {
  this.router.navigate(['dashboard/post', postId]);
}
  ngOnInit(): void {
  this.notificationService.posts$.subscribe(posts => {
    this.posts = posts;
  });

  this.notificationService.comments$.subscribe(comments => {
    this.comments = comments;
  });
  }
//   private loadRecentData() {
//     if(this.postService){
//   this.postService.getFilteredPosts({
//     pageNumber: 1,
//     pageSize: 5,
//     sortOrder: 'desc'
//   }).subscribe(res => {
//     this.commentService.getFilteredComments({
//       pageNumber: 1,
//       pageSize: 5,
//       sortOrder: 'desc'
//     }).subscribe(cres => {
//       this.notificationService.loadInitial(res.items, cres.items);
//     });
//   });}
// }

}
