import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators ,AbstractControl,FormsModule,ReactiveFormsModule,ValidationErrors, ValidatorFn } from '@angular/forms';
import { UserService } from '../service/user.service';
import { UserSignUp } from '../models/usersignup';

@Component({
  selector: 'app-register',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
    selectedRole: string = 'User';
    userForm: FormGroup;
    user: UserSignUp = {
    Email: '',
    Name: '',
    Password: '',
    Role: 'User',
    AdminSecret: ''
  };


  constructor(private fb: FormBuilder,private userservice:UserService) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [null, [Validators.required, Validators.min(1)]],
      role: ['', Validators.required],
      password: ['', [Validators.required,this.Passwordstrengthvalidator(),Validators.minLength(8)]],
      confirmpassword:['',Validators.required]
        },{validators:[this.passwordchecker,this.AdminsecretValidator]});
  }
  AdminsecretValidator:ValidatorFn=(form:AbstractControl):ValidationErrors|null=>{
    const role = form.get('role')?.value;
    const adminSecret = form.get('adminSecret')?.value;

    if (role === 'Admin' && (!adminSecret || adminSecret.trim() === '')) {
      return { missingAdminSecret: true };
    }
          return null;
        
      

    }
  
Passwordstrengthvalidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (!hasUpperCase || !hasSpecialChar) {
        return { weakPassword: true };
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



  onRoleChange(event: any) {
    this.user.Role = event.target.value;
  }
    onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.userservice.register(this.user).subscribe({
      next: res => {
        console.log(res);
          alert('User registered!');

      },
      error: err => {
        console.error('Registration failed', err);
        alert('registration failed');
      }
    });

    } else {
      this.userForm.markAllAsTouched();
    }
  }



}
