export interface PostQueryParams {
  userEmail?: string;
  status?: string;
  searchTerm?: string;
  sortOrder?: 'asc' | 'desc';
  pageNumber?: number;
  pageSize?: number;
  categories?: string[];
}
