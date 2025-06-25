import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PostService } from '../service/post.service';
import { Post } from '../models/postmodel';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { CommentService } from '../service/comment.service';
import { Comment } from '../models/commentmodel';
import { getUserEmail } from '../misc/jwtdecode';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UpdateCommentDto } from '../models/updatecommentdto';
import { NgOptimizedImage } from '@angular/common'
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

  constructor(private route: ActivatedRoute, private postService: PostService,private router:Router,private location: Location,private commentService:CommentService) {}
    goBack() {
    //this.router.navigate(['/dashboard']); 
    this.location.back();

  }
userComments: Comment[] = [];
otherComments: Comment[] = [];
activeMenuId: string | null = null;
  postcontent:string='';
//commentInputs: { [postId: string]: string } = {};



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
    this.userComments = res.items.filter(c => c.userEmail === currentUserEmail);
    this.otherComments = res.items.filter(c => c.userEmail !== currentUserEmail);
  });
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





  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');

    if (postId) {
      this.postService.GetPostById(postId).subscribe({
        next: data => this.post = data,
        error: err => console.error('Failed to load post', err)
      });
      this.loadComments(postId);

    }
  }

}
