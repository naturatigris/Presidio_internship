export interface Comment {
  id: string;
  content: string;
  postId: string;
  userEmail: string;
  createdAt?: Date;
}
