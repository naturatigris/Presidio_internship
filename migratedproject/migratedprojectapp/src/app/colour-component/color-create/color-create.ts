import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ColorService } from '../../services/colorservice';
import { ColorCreateDto } from '../../models/color';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
@Component({
  selector: 'app-color-create',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './color-create.html',
  styleUrl: './color-create.css'
})
export class ColorCreate {
      colorForm: FormGroup;
      color:ColorCreateDto|null=null;
      constructor(private colorservice:ColorService,private fb: FormBuilder,private location:Location){
            this.colorForm = this.fb.group({
                name: ['', Validators.required]});
          }
      onSubmit() {
          if (this.colorForm.invalid) return;
          this.color={
            color:this.colorForm.value.name
          }
      
      
          this.colorservice.createColor(this.color).subscribe({
            next: () => {alert('Category created successfully!');
              this.colorForm.reset();
            },
            error: err => console.error('Error:', err)
          });
        }
        goBack(): void {
        this.location.back();
      }
  

}
