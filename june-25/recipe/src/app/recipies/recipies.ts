import { Component,signal, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe';
import { Recipe } from '../recipe/recipe';
import { RecipeModel } from '../models/recipemodel';


@Component({
  selector: 'app-recipies',
  imports: [Recipe],
  templateUrl: './recipies.html',
  styleUrl: './recipies.css'
})
export class Recipies implements OnInit{
recipies = signal<RecipeModel[]>([]);  
  error = signal<string | null>(null);

    constructor(private RecipeService:RecipeService){

  }
  ngOnInit(): void {
    this.RecipeService.getAll().subscribe({
      next: (data: RecipeModel[]) => {
        this.recipies.set(data);
      },
      error: (err) => {
        this.error.set('Failed to fetch recipes.');
      }
    });
    
  }




}
