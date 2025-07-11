import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PasswordEdit } from './password-edit';

describe('PasswordEdit Component', () => {
  let component: PasswordEdit;
  let fixture: ComponentFixture<PasswordEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule,PasswordEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize form with empty fields', () => {
    expect(component.passwordForm.value).toEqual({
      currentPassword: '',
      password: '',
      confirmpassword: ''
    });
  });

  it('should mark form invalid if required fields are empty', () => {
    component.passwordForm.markAllAsTouched();
    expect(component.passwordForm.valid).toBeFalse();
  });

  it('should detect weak password', () => {
    component.passwordForm.patchValue({
      currentPassword: 'abc',
      password: 'weakpass!',
      confirmpassword: 'weakpass!'
    });
    expect(component.passwordForm.get('password')?.errors?.['weakPassword']).toBeTrue();
  });

  it('should detect mismatched passwords', () => {
    component.passwordForm.patchValue({
      currentPassword: 'Password@123',
      password: 'Password@123',
      confirmpassword: 'Different@123'
    });
    expect(component.passwordForm.errors?.['passwordMismatch']).toBeTrue();
  });

  it('should emit save event with correct data when form is valid', () => {
    spyOn(component.save, 'emit');

    component.passwordForm.patchValue({
      currentPassword: 'OldPass@1',
      password: 'NewPass@1',
      confirmpassword: 'NewPass@1'
    });

    component.onSubmit();

    expect(component.passwordForm.valid).toBeTrue();
    expect(component.save.emit).toHaveBeenCalledWith({
      currentPassword: 'OldPass@1',
      newPassword: 'NewPass@1'
    });
  });

  it('should emit close event when onCancel is called', () => {
    spyOn(component.close, 'emit');
    component.onCancel();
    expect(component.close.emit).toHaveBeenCalled();
  });
});
