import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:5147/api/v1/category';

  constructor(private http: HttpClient) {}
  getAllCategoryNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/names`);
  }

  }

