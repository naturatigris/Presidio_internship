import { Post } from "./postmodel";
import { UserProfile } from "./userprofilemodel";

export interface Comment {
  id: string;
  postId: string;
  userEmail: string;
  content: string;
  status: string;
  createdAt: string;
  post:Post;
  user:UserProfile;
}
