import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../services/categoryservice';
import { RouterModule} from '@angular/router';
import { CategoryModel } from '../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [RouterModule,CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class Category implements OnInit {
  categorylist:CategoryModel[]=[];
    currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 1;

  constructor(private categoryservice:CategoryService){}
ngOnInit(): void {
    this.loadcategories(this.currentPage);
}
loadcategories(page: number){
  this.categoryservice.getPagedCategories(page,this.pageSize).subscribe({
    next:(value) =>{
    this.categorylist = value.list;
    this.currentPage = value.currentPage??1;
    this.totalPages = value.totalPages??5;    
  },error:(err) =>{
      console.log(err);
    },
  })

}


deleteCategory(id: number) {
    if (confirm('Are you sure you want to delete this?')) {
      this.categoryservice.deleteCategory(id).subscribe({
        next: () => this.loadcategories(this.currentPage),
        error: (err) => console.error('Delete failed:', err)
      });
    }
  }

  goToPage(page: number): void {
  if (page >= 1 && page <= this.totalPages) {
    this.loadcategories(page);
  }
  }

}
