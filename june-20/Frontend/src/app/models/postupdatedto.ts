export interface PostUpdate {
  title?: string;
  slug?: string;
  content?: string;
  status?: string;
  views?:number;
  deleteImages?: boolean;
  images: File[]; 
}
