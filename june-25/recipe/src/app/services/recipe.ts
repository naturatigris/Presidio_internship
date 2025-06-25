import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from "rxjs";
import { RecipeModel } from '../models/recipemodel'; 

@Injectable()
export class RecipeService {
  private http = inject(HttpClient);

  constructor() {}

  getRecipe(id: number = 1): Observable<RecipeModel> {
    return this.http.get<RecipeModel>('https://dummyjson.com/recipe/' + id);
  }

  getAll(): Observable<RecipeModel[]> {
    return this.http.get<{ recipes: RecipeModel[] }>('https://dummyjson.com/recipe').pipe(
      map(response => response.recipes),
      catchError(error => {
        console.error('Failed to fetch recipes', error);
        return throwError(() => new Error('Recipe fetch failed'));
      })
    );
  }
}
