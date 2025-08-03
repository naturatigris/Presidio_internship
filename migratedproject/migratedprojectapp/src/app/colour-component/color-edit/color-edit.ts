import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router ,RouterModule} from '@angular/router';
import { ColorService } from '../../services/colorservice';
import { ColorCreateDto, ColorModel } from '../../models/color';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-color-edit',
  imports: [RouterModule,CommonModule,ReactiveFormsModule],
  templateUrl: './color-edit.html',
  styleUrl: './color-edit.css'
})
export class ColorEdit implements OnInit {
  colorForm!: FormGroup;
  formSubmitted = false;
  colorId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private colorservice: ColorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.colorId = Number(this.route.snapshot.paramMap.get('id'));

    this.colorForm = this.fb.group({
      name: ['', Validators.required],
    });

    this.colorservice.getColor(this.colorId).subscribe({
      next: (category) => {
        this.colorForm.patchValue({
          name: category.color1,
        });
      },
      error: (err) => console.error(err),
    });
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.colorForm.valid) {
      const updatedCategory: ColorCreateDto = {
        color: this.colorForm.value.name,
      };

      this.colorservice.updateColor(this.colorId, updatedCategory).subscribe({
        next: () => this.router.navigate(['']),
        error: (err) => console.error(err),
      });
    }
  }
}
