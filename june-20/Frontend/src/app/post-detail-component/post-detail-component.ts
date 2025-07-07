import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PostService } from '../service/post.service';
import { Post } from '../models/postmodel';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { CommentService } from '../service/comment.service';
import { Comment } from '../models/commentmodel';
import { getUserEmail, getUserRole } from '../misc/jwtdecode';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UpdateCommentDto } from '../models/updatecommentdto';
import { NgOptimizedImage } from '@angular/common'
import { formatDate } from '@angular/common';
import { PostUpdate } from '../models/postupdatedto';
import { CommentLikeService } from '../service/commentlike.service';
@Component({
  selector: 'app-post-detail-component',
  imports: [CommonModule,ReactiveFormsModule,FormsModule,NgOptimizedImage ],
  templateUrl: './post-detail-component.html',
  styleUrl: './post-detail-component.css'
})
export class PostDetailComponent implements OnInit {
  post: Post | null = null;
  editingCommentId: string | null = null;
editContent: string = '';
isAdmin: boolean = false;
postview:PostUpdate|null=null;

  constructor(private route: ActivatedRoute, private postService: PostService,private router:Router,private location: Location,private commentService:CommentService,  private commentLikeService: CommentLikeService
) {}
    goBack() {
    //this.router.navigate(['/dashboard']); 
    this.location.back();

  }
userComments: Comment[] = [];
otherComments: Comment[] = [];
activeMenuId: string | null = null;
  postcontent:string='';
commentLikes: { [commentId: string]: number } = {};
likedCommentIds: Set<string> = new Set();



loadComments(postId: string) {
  const queryParams = {
    postId,
    status: 'Available',
    pageNumber: 1,
    pageSize: 5,
    sortOrder: 'desc'
  };
    const currentUserEmail = getUserEmail();


  this.commentService.getFilteredComments(queryParams).subscribe(res => {
    console.log(res.items[0]);


    this.userComments = res.items.filter(c => c.userEmail === currentUserEmail);
    this.otherComments = res.items.filter(c => c.userEmail !== currentUserEmail);
      this.loadCommentLikes(postId); 
      console.log('Liked Comment IDs:',this.commentLikes);

  });

}
loadCommentLikes(postId: string) {
  const email = getUserEmail();
  if (!email) return;

  // ✅ 1. Fetch all user likes once
  this.commentLikeService.getLikesByUser(email).subscribe(userLikes => {
    const likedIds = userLikes.map(like => like.commentId);
    this.likedCommentIds = new Set(likedIds);
  });

  const allComments = [...this.userComments, ...this.otherComments];
  allComments.forEach(comment => {
    this.commentLikeService.getLikeCount(comment.id).subscribe(count => {
      this.commentLikes[comment.id] = count;

    });

  });
}
toggleCommentLike(commentId: string) {
  const email = getUserEmail();
  if (!email) return;

  if (this.likedCommentIds.has(commentId)) {
    this.commentLikeService.unlikeComment(commentId, email).subscribe(() => {
      this.likedCommentIds.delete(commentId);
      this.commentLikes[commentId] = (this.commentLikes[commentId] || 1) - 1;
    });
  } else {
    this.commentLikeService.likeComment(commentId, email).subscribe(() => {
      this.likedCommentIds.add(commentId);
      this.commentLikes[commentId] = (this.commentLikes[commentId] || 0) + 1;
    });
  }
}



addComment(postId?: string) {
  if (postId){
  const content = this.postcontent;
  if (!content) return;

  const email=getUserEmail();
  if(email){
  const commentDto = {
    postId,
    userEmail: email,
    content
  };

  this.commentService.addComment(commentDto).subscribe(() => {
    this.loadComments(postId);
  });}}
}
  updateComment(commentId: string, newContent: string) {
    const dto: UpdateCommentDto = { content: newContent };

    this.commentService.updateComment(commentId, dto).subscribe({
      next: (res) => console.log('Comment updated', res),
      error: (err) => console.error('Update failed', err),
    });
  }
  toggleMenu(commentId: string) {
  this.activeMenuId = this.activeMenuId === commentId ? null : commentId;
}

editComment(comment: Comment) {
  this.editingCommentId = comment.id;
  this.editContent = comment.content;
}
cancelEdit() {
  this.editingCommentId = null;
  this.editContent = '';
}

saveComment(commentId: string) {
  const trimmed = this.editContent.trim();
  if (!trimmed) return;

  this.updateComment(commentId, trimmed);
  this.editingCommentId = null;
}

deleteComment(commentId: string) {
  if (confirm('Are you sure you want to delete this comment?')) {
    this.commentService.deletecomment(commentId).subscribe(() => {
      if (this.post?.id)
      this.loadComments(this.post.id);
    });
  }}

getToday(): string {
  return formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
}

getYesterday(): string {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return formatDate(yesterday, 'yyyy-MM-dd', 'en-US');
}

formatTime(dateStr: string): string {
  const date = new Date(dateStr);
  const datePart = formatDate(date, 'yyyy-MM-dd', 'en-US');
  const timePart = formatDate(date, 'HH:mm', 'en-US');

  if (datePart === this.getToday()) {
    return `Today ${timePart}`;
  } else if (datePart === this.getYesterday()) {
    return `Yesterday ${timePart}`;
  } else {
    return formatDate(date, 'dd/MM/yyyy HH:mm', 'en-US');
  }
}

updatview(id:string,post:PostUpdate){
  this.postService.updatePost(id,post).subscribe({
      next: (res) => console.log('post updated', res),
      error: (err) => console.error('postview update failed', err),
    });
}



  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
      this.isAdmin = getUserRole() === 'Admin'; // or however you're checking


    if (postId) {
      this.postService.GetPostById(postId).subscribe({
        next: data => {this.post = data
          console.log('post views',(this.post?.views??0)+1);

          this.postview = {
          views: ((this.post?.views??0) + 1),
          deleteImages:false,

        images: [],

        };
        this.updatview(postId,this.postview);

        },
        error: err => console.error('Failed to load post', err)
      });
      this.loadComments(postId);

    }
  }

}
