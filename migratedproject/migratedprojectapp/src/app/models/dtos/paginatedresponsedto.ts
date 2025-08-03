export interface PaginationResult<T> {
  list: T[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
}
