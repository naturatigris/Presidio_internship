import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PaginationResult } from '../models/dtos/paginatedresponsedto';
import { CategoryModel } from '../models/category';
import { ColorCreateDto, ColorModel } from '../models/color';



@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private baseUrl = 'http://localhost:5268/api/Colors'; 

  constructor(private http: HttpClient) {}

  getAllColors(): Observable<ColorModel[]> {
    return this.http.get<ColorModel[]>(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }
  

  getColor(id: number): Observable<ColorModel> {
    return this.http.get<ColorModel>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createColor(color: ColorCreateDto): Observable<ColorModel> {
    return this.http.post<ColorModel>(this.baseUrl, color).pipe(
      catchError(this.handleError)
    );
  }

  updateColor(id: number, color: ColorCreateDto): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, color).pipe(
      catchError(this.handleError)
    );
  }

  deleteColor(id: number): Observable<void> {
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
