import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Category } from '../category/category';

@Component({
  selector: 'app-layout',
  imports: [CommonModule,RouterModule,Category],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
    currentYear = new Date().getFullYear();


}
