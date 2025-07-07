import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Login } from './login';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


describe('Login', () => {
let component: Login;
  let fixture: ComponentFixture<Login>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;
  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['login']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, CommonModule,Login],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form with email and password', () => {
    expect(component.userForm.contains('email')).toBeTrue();
    expect(component.userForm.contains('password')).toBeTrue();
  });

  it('should make email and password controls required', () => {
    const form = component.userForm;
    expect(form.get('email')?.valid).toBeFalse();
    expect(form.get('password')?.valid).toBeFalse();
  });

it('should call AuthService.login and navigate on successful login', fakeAsync(() => {
  spyOn(localStorage, 'getItem').and.returnValue('fakeToken');
  spyOn(window, 'alert');

  component.userForm.setValue({ email: 'test@example.com', password: '123456' });

  mockAuthService.login.and.returnValue(of('Login Successfull'));

  component.onSubmit();
  tick();

  expect(mockAuthService.login).toHaveBeenCalledWith({
    Email: 'test@example.com',
    Password: '123456'
  });

  expect(window.alert).toHaveBeenCalledWith('Login successful');
  expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
}));

  it('should show error alert on failed login', fakeAsync(() => {
    spyOn(window, 'alert');
    component.userForm.setValue({ email: 'fail@example.com', password: 'wrongpass' });

    mockAuthService.login.and.returnValue(throwError(() => new Error('Login Failed')));

    component.onSubmit();
    tick();

    expect(window.alert).toHaveBeenCalledWith('Login failed.InValid EmailId or Password.');
  }));
});
