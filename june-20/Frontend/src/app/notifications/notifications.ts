import { Component, OnInit } from '@angular/core';
import { NotificationService, UINotification } from '../service/notification.service';
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
posts: UINotification<Post>[] = [];
comments: UINotification<Comment>[] = [];

  constructor(private notificationService: NotificationService,private router:Router,private postService:PostService,private commentService:CommentService) {}
viewpost(postId: string) {
  this.router.navigate(['dashboard/post', postId]);
}
  ngOnInit(): void {
  this.notificationService.posts$.subscribe(posts => {
    this.posts = posts.filter(n => !n.read); // show only unread
  });

  this.notificationService.comments$.subscribe(comments => {
    this.comments = comments.filter(n => !n.read);;
  });
  }
  markPostAsRead(postId: string) {
  this.notificationService.markPostAsRead(postId);
  
  this.router.navigate(['dashboard/post', postId]);
}

markCommentAsRead(postId: string) {
  this.notificationService.markCommentAsRead(postId);
  this.router.navigate(['dashboard/post', postId]);
}
get unreadPosts() {
  return this.posts.filter(p => !p.read);
}

get unreadComments() {
  return this.comments.filter(c => !c.read);
}

}
