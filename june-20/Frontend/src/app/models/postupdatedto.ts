export interface PostUpdate {
  title?: string;
  slug?: string;
  content?: string;
  status?: string;
  images: File[]; 
}
