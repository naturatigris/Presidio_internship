export interface PostQueryParams {
  userEmail?: string;
  status?: string;
  searchTerm?: string;
  sortOrder?: 'asc' | 'desc';
  viewOrder?:string;
  pageNumber?: number;
  pageSize?: number;
  categories?: string[];
}
