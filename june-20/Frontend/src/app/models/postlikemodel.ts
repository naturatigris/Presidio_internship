import { Post } from "./postmodel";
import { UserProfile } from "./userprofilemodel";
export interface PostLike {
  id?: string;              
  postId: string;
  userEmail: string;
  likedAt?: Date;
  post?: Post;
  user?: UserProfile;
}
