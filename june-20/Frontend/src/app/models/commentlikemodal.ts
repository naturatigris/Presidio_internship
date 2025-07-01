import { UserProfile } from "./userprofilemodel";
import { Comment } from "./commentmodel";

export interface CommentLike {
  id?: string;
  commentId: string;
  userEmail: string;
  likedAt?: Date;
  comment?: Comment;
  user?: UserProfile;
}
