import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { UserLogin } from '../models/userlogin';
import { UserLoginResponse } from '../models/userlogin';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5147/api/v1/login';

  constructor(private http: HttpClient) {}

  login(user: UserLogin): Observable<string> {
    return this.http.post<UserLoginResponse>(`${this.apiUrl}`, user).pipe(
      tap(response => {
          console.log('Login Response:', response); // <-- debug log

        if (response.token) {

          localStorage.setItem('token', response.token);
          localStorage.setItem('email',response.email);
        }
      }),
      map(response => 'Login successful')
    );
  }
  }

