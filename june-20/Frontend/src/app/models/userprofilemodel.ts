import { CommentLike } from "./commentlikemodal";
import { Comment } from "./commentmodel";
import { PostLike } from "./postlikemodel";
import { Post } from "./postmodel";

export class UserProfile {
  constructor(
    public email: string = '',
    public name: string = '',
    public passwordHash: string = '',
    public createdAt: Date = new Date(),
    public role: string = 'User',
    public isSuspended: boolean = false,
    public suspensionReason: string | null = null,
    public suspendedUntil: Date | null = null,
    public isDeleted: boolean = false,
    public status: string = 'Active',
    public profileImage: Uint8Array | null = null,
    public bio: string | null = null,
    public location: string | null = null,
    public website: string | null = null,
    public posts: Post[] = [],
    public comments: Comment[] = [],
    public commentLikes:CommentLike[]=[],
    public postLikes:PostLike[]=[]
    
  ) {}
}
