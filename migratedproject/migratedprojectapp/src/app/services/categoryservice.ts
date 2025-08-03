import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PaginationResult } from '../models/dtos/paginatedresponsedto';
import { CategoryModel } from '../models/category';

export interface Category {
  categoryId: number;
  name: string;
}

export interface CategoryCreateDto {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:5268/api/Category'; 

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }
  getPagedCategories(pagenumber:number,pagesize:number): Observable<PaginationResult<CategoryModel>> {
    return this.http.get<PaginationResult<CategoryModel>>(`${this.baseUrl}/paged`).pipe(
      catchError(this.handleError)
    );
  }

  getCategory(id: number): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createCategory(category: CategoryCreateDto): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(this.baseUrl, category).pipe(
      catchError(this.handleError)
    );
  }

  updateCategory(id: number, category: CategoryCreateDto): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, category).pipe(
      catchError(this.handleError)
    );
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg = 'An unknown error occurred!';
    if (typeof ErrorEvent !== 'undefined' && error.error instanceof ErrorEvent) {
  errorMsg = `Client-side error: ${error.error.message}`;
}

    else if (error.error instanceof ErrorEvent) {
      errorMsg = `Client-side error: ${error.error.message}`;
    } else if (error.error && typeof error.error === 'string') {
      errorMsg = `Server error: ${error.error}`;
    } else if (error.status) {
      errorMsg = `Error ${error.status}: ${error.message}`;
    }
    return throwError(() => new Error(errorMsg));
  }
}
