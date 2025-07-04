import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserLogin, UserLoginResponse } from '../models/userlogin';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  const mockLoginData: UserLogin = {
    Email: 'test@example.com',
    Password: 'password123'
  };

const refreshToken = 'mock-refresh-token';
const mockResponse: UserLoginResponse = {
  token: 'mock-jwt-token',
  email: 'test@example.com',
  refreshToken 
};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    localStorage.clear();
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login and store token and email in localStorage', () => {
    service.login(mockLoginData).subscribe(message => {
      expect(message).toBe('Login successful');
      expect(localStorage.getItem('token')).toBe(mockResponse.token);
      expect(localStorage.getItem('email')).toBe(mockResponse.email);
    });

    const req = httpMock.expectOne('http://localhost:5147/api/v1/login');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
