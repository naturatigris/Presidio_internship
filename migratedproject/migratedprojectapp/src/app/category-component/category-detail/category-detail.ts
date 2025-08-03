import { Component } from '@angular/core';
import { CategoryService } from '../../services/categoryservice';
import { CategoryModel } from '../../models/category';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-category-detail',
  imports: [CommonModule,RouterModule],
  templateUrl: './category-detail.html',
  styleUrl: './category-detail.css'
})
export class CategoryDetail {
  category:CategoryModel|null=null;
    constructor(private categoryservice:CategoryService,private location:Location,private router:ActivatedRoute){
    const id = Number(this.router.snapshot.paramMap.get('id'));
      this.categoryservice.getCategory(id).subscribe({
        next:(data)=>{
          this.category=data;
        },
        error:(err)=>{console.log(err);}
      })
}
 goBack(): void {
  this.location.back();
}


}
