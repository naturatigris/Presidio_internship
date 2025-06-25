import { Component } from '@angular/core';
import { Recipies } from './recipies/recipies';



@Component({
  selector: 'app-root',
  imports: [Recipies],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'recipe';
}
