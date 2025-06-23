import { Post } from "./postmodel";

export interface Image {
  id?: string;             // Optional for creation (generated server-side)
  postId: string;

  name: string;            // Original file name
  content?: ArrayBuffer;   // Optional if not directly handled in the client
  isDeleted?: boolean;

  uploadedAt?: string;     // ISO string format if received from server
  post?: Post;              // Can be strongly typed as `Post` if needed
}
