import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CategoryService } from '../../services/categoryservice';
import { CategoryCreateDto } from '../../models/category';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-create',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './category-create.html',
  styleUrl: './category-create.css'
})
export class CategoryCreate {
    categoryForm: FormGroup;
    category:CategoryCreateDto|null=null;


  constructor(private categoryservice:CategoryService,private fb: FormBuilder,private location:Location){
      this.categoryForm = this.fb.group({
          name: ['', Validators.required]});
    }
onSubmit() {
    if (this.categoryForm.invalid) return;
    this.category={
      name:this.categoryForm.value.name
    }


    this.categoryservice.createCategory(this.category).subscribe({
      next: () => {alert('Category created successfully!');
        this.categoryForm.reset();
      },
      error: err => console.error('Error:', err)
    });
  }
  goBack(): void {
  this.location.back();
}

}
