import { Post } from "./postmodel";

export interface PaginatedResponse<T> {
  items: Post[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}
