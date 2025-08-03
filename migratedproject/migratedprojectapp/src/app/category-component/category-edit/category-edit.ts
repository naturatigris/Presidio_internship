import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router ,RouterModule} from '@angular/router';
import { CategoryService } from '../../services/categoryservice';
import { CategoryModel } from '../../models/category';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category-edit',
  imports: [RouterModule,CommonModule,ReactiveFormsModule],
  templateUrl: './category-edit.html',
  styleUrl: './category-edit.css'
})
export class CategoryEdit implements OnInit {
  categoryForm!: FormGroup;
  formSubmitted = false;
  categoryId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));

    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
    });

    this.categoryService.getCategory(this.categoryId).subscribe({
      next: (category) => {
        this.categoryForm.patchValue({
          name: category.name,
        });
      },
      error: (err) => console.error(err),
    });
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.categoryForm.valid) {
      const updatedCategory: CategoryModel = {
        categoryId: this.categoryId,
        name: this.categoryForm.value.name,
      };

      this.categoryService.updateCategory(this.categoryId, updatedCategory).subscribe({
        next: () => this.router.navigate(['']),
        error: (err) => console.error(err),
      });
    }
  }
}

