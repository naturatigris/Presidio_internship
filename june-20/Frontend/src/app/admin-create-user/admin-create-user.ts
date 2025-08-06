import { Component ,EventEmitter,Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';
import { UserService } from '../service/user.service';
import { UserSignUp } from '../models/usersignup';

@Component({
  selector: 'app-admin-create-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './admin-create-user.html',
  styleUrl: './admin-create-user.css'
})
export class AdminCreateUser {
  @Output() closeModal = new EventEmitter<void>();
  userForm: FormGroup;

  user: UserSignUp = {
    Email: '',
    Name: '',
    Password: '',
    Role: 'User',
    AdminSecret: 'secret123'
  };

  constructor(private fb: FormBuilder, private userservice: UserService) {
    this.userForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        role: ['User', Validators.required],
        password: ['', [Validators.required, this.Passwordstrengthvalidator(), Validators.minLength(8)]],
        confirmpassword: ['', Validators.required],
        adminSecret: [this.user.AdminSecret]
      },
      {
        validators: [this.passwordchecker, this.AdminsecretValidator]
      }
    );
  }

  AdminsecretValidator: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
    const role = form.get('role')?.value;
    const adminSecret = form.get('adminSecret')?.value;
    if (role === 'Admin' && (!adminSecret || adminSecret.trim() === '')) {
      return { missingAdminSecret: true };
    }
    return null;
  };

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
      return { passwordMismatch: true };
    }
    return null;
  };

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      console.log('User Form Submitted:', formData);
      this.userservice.register(formData).subscribe({
        next: res => {
          alert('User registered!');
          this.userForm.reset();
        },
        error: err => {
          alert('Registration failed');
        }
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  close() {
    this.closeModal.emit();
  }
}
