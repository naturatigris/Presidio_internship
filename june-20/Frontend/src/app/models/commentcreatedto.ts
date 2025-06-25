// models/comment-create-dto.ts
export interface CommentCreateDto {
  postId: string;
  userEmail: string;
  content: string;
  status?: string; 
}
