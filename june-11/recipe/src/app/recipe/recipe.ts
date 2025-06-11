import { Component, inject, Input } from '@angular/core';
import { RecipeService } from '../services/recipe';
import { CurrencyPipe } from '@angular/common';
import { RecipeModel } from '../models/recipemodel';
@Component({
  selector: 'app-recipe',
  imports: [CurrencyPipe],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css'
})
export class Recipe {
  @Input() recipe:RecipeModel|null = new RecipeModel();
private RecipeService = inject(RecipeService);

  constructor(){

  }

}
