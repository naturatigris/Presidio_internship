import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserService } from '../Service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.html',
    styleUrl: './add-user.css',

  imports:[FormsModule,ReactiveFormsModule,CommonModule]
})
export class AddUserComponent {
  userForm: FormGroup;
  successMessage = '';

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      role: ['', Validators.required],
      state: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).then((res) => {
        console.log('User added:', res);
        this.successMessage = `User ${res.firstName} added with ID: ${res.id}`;
        this.userForm.reset();
      });
    }
  }
}
