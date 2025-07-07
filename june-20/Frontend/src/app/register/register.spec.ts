import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Register } from './register';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';

describe('Register Component', () => {
  let component: Register;
  let fixture: ComponentFixture<Register>;
  let mockUserService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj('UserService', ['register']);

    await TestBed.configureTestingModule({
      imports: [Register,ReactiveFormsModule, FormsModule, CommonModule],
      providers: [{ provide: UserService, useValue: mockUserService }]
    }).compileComponents();

    fixture = TestBed.createComponent(Register);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create form with all controls', () => {
    const form = component.userForm;
    expect(form.contains('name')).toBeTrue();
    expect(form.contains('email')).toBeTrue();
    expect(form.contains('role')).toBeTrue();
    expect(form.contains('password')).toBeTrue();
    expect(form.contains('confirmpassword')).toBeTrue();
    expect(form.contains('adminSecret')).toBeTrue();
  });

  it('should make name and password required', () => {
    const form = component.userForm;
    form.get('name')?.setValue('');
    form.get('password')?.setValue('');
    expect(form.get('name')?.valid).toBeFalse();
    expect(form.get('password')?.valid).toBeFalse();
  });

  it('should show validation error if passwords do not match', () => {
    const form = component.userForm;
    form.get('password')?.setValue('StrongPass@1');
    form.get('confirmpassword')?.setValue('Mismatch@1');
    fixture.detectChanges();
    expect(form.errors?.['passwordMismatch']).toBeTrue();
  });

  it('should show error if Admin role is selected but no adminSecret', () => {
    const form = component.userForm;
    form.get('role')?.setValue('Admin');
    form.get('adminSecret')?.setValue('');
    form.get('password')?.setValue('StrongPass@1');
    form.get('confirmpassword')?.setValue('StrongPass@1');
    fixture.detectChanges();
    expect(form.errors?.['missingAdminSecret']).toBeTrue();
  });

  it('should call userService.register on valid form submit', fakeAsync(() => {
    spyOn(window, 'alert');
    mockUserService.register.and.returnValue(of('User created'));

    const form = component.userForm;
    form.get('name')?.setValue('Test User');
    form.get('email')?.setValue('test@example.com');
    form.get('role')?.setValue('User');
    form.get('password')?.setValue('StrongPass@1');
    form.get('confirmpassword')?.setValue('StrongPass@1');
    form.get('adminSecret')?.setValue('');

    component.user = {
      Name: 'Test User',
      Email: 'test@example.com',
      Password: 'StrongPass@1',
      Role: 'User',
      AdminSecret: ''
    };

    component.onSubmit();
    tick();

    expect(mockUserService.register).toHaveBeenCalledWith(component.user);
    expect(window.alert).toHaveBeenCalledWith('User registered!');
  }));

  it('should show alert on registration error', fakeAsync(() => {
    spyOn(window, 'alert');
    mockUserService.register.and.returnValue(throwError(() => new Error('Failed')));

    const form = component.userForm;
    form.get('name')?.setValue('Test User');
    form.get('email')?.setValue('test@example.com');
    form.get('role')?.setValue('User');
    form.get('password')?.setValue('StrongPass@1');
    form.get('confirmpassword')?.setValue('StrongPass@1');

    component.onSubmit();
    tick();

    expect(window.alert).toHaveBeenCalledWith('registration failed');
  }));
});
