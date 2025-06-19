import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,AbstractControl,FormsModule,ReactiveFormsModule,ValidationErrors, ValidatorFn } from '@angular/forms';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.html',
    styleUrl: './add-user.css',

  imports:[FormsModule,ReactiveFormsModule,CommonModule]
})
export class AddUserComponent {
  userForm: FormGroup;
  successMessage = '';
  bannedwords=['admin','root'];

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      fullname: ['', [Validators.required, this.bannedUsernameValidator()]],
      age: [null, [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', [Validators.required,this.Passwordstrengthvalidator(),Validators.minLength(6)]],
      confirmpassword:['',Validators.required]
    },{validators:this.passwordchecker});
  }
    bannedUsernameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.bannedwords.some(word => control.value?.toLowerCase().includes(word)) ? { bannedWord: true } : null;
    };
  }
Passwordstrengthvalidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const pass = control.value;

    if (pass && !/^[A-Za-z0-9]+$/.test(pass)) {
      return { invalidCharacters: true };
    }
    return null;
  };
}
passwordchecker: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
        const password = form.get('password')?.value;
        const confirmPassword = form.get('confirmpassword')?.value;
        if (password !== confirmPassword) {
          console.log(password==confirmPassword);
            return { passwordMismatch: true };
        }
        return null;
    }



  onSubmit() {
    if (this.userForm.valid) {
      const { fullname,age,gender,role, password } = this.userForm.value;

      const userval=new UserModel(0,fullname,age,gender,role,password);
      this.userService.addUser(userval);
      this.userForm.reset();
      alert('user added');
    
    }
  }
}
