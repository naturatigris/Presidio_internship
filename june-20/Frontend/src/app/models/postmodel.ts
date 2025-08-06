import { UserProfile } from "./userprofilemodel";
import { Category } from "./categorymodel";
import { Comment } from "./commentmodel";
import { Image } from "./imagemodel";
import { PostLike } from "./postlikemodel";
export interface Post {
  id?: string;  // optional since it’s generated server-side

  userEmail: string;
  title: string;
  slug: string;
  content: string;
  status?: string;         // default to "Published" if not provided
  isDeleted?: boolean;
  createdAt?:Date;
  views?:number;
  user?: UserProfile;             
  comments?: Comment[];
  categories?: Category[];
  images?: Image[];
  postLikes?:PostLike[];
}
