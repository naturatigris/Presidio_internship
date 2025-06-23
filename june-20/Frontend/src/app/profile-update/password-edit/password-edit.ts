import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-password-edit',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './password-edit.html',
  styleUrl: './password-edit.css'
})
export class PasswordEdit {
    @Input() showpasswordmodal: boolean = false;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<{ currentPassword: string|null, newPassword: string|null }>();
  passwordForm: FormGroup;


  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  passwordMismatch: boolean = false;
  constructor(private fb: FormBuilder) {
  this.passwordForm = this.fb.group({
    currentPassword: ['', Validators.required],
    password: ['', [Validators.required, this.passwordStrengthValidator()]],
    confirmpassword: ['', Validators.required]
  }, { validators: this.passwordChecker });
}
passwordStrengthValidator(): ValidatorFn {
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

passwordChecker: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmpassword')?.value;

  if (password !== confirmPassword) {
    return { passwordMismatch: true };
  }
  return null;
};


onSubmit() {
  if (this.passwordForm.valid) {
    const { currentPassword, password } = this.passwordForm.value;
    this.currentPassword=currentPassword;
    this.newPassword=password;
this.save.emit({
  currentPassword: this.currentPassword || null,
  newPassword: this.newPassword || null
});
  }
}

  onCancel() {
    this.close.emit();
  }


}
