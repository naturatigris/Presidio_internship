import { CommentLike } from "./commentlikemodal";
import { Post } from "./postmodel";
import { UserProfile } from "./userprofilemodel";

export interface Comment {
  id: string;
  postId: string;
  userEmail: string;
  content: string;
  status: string;
  createdAt: string;
  iseditied: boolean; 
  post:Post;
  user:UserProfile;
  likes:CommentLike;
}
