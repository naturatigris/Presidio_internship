import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSignUp } from '../models/usersignup';
import { UserProfile } from '../models/userprofilemodel';
import { getUserEmail } from '../misc/jwtdecode';
import { BehaviorSubject } from 'rxjs';
import { UpdateUserDto } from '../models/userupdatemodel';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5147/api/v1/users';
  
  email:string='';
    private userSubject = new BehaviorSubject<UserProfile | null>(null);
  public user$ = this.userSubject.asObservable();


  constructor(private http: HttpClient) {}

  register(user: UserSignUp): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }
getUserProfile(): void {
  if (typeof window !== 'undefined' && localStorage.getItem('token')) {
    const email = localStorage.getItem('email');
    const useemail=getUserEmail();
    console.log('Decoded email:', useemail,localStorage.getItem('token'));  // Verify this

    if (!email) return;


    this.email = email;
    this.http.get<UserProfile>(`${this.apiUrl}/get/${email}`)
      .subscribe({
        next: user => this.userSubject.next(user),
        error: err => console.error("Failed to fetch user profile", err)
      });
  }
}
convertToFormData(update: UpdateUserDto, profileImage?: File): FormData {
  const formData = new FormData();

  for (const key in update) {
    const value = update[key as keyof UpdateUserDto];
    if (value !== null && value !== undefined) {
      if (value instanceof Date) {
        formData.append(key, value.toISOString());
      } else {
        formData.append(key, value.toString());
      }
    }
  }

  if (profileImage){
    formData.append('profileImage', profileImage);
  }

  return formData;
}

updateUserSection(email: string, updateDto: UpdateUserDto, profileImage?: File): Observable<any> {
  const formData = this.convertToFormData(updateDto, profileImage);
  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  return this.http.put(`${this.apiUrl}/${email}`, formData);
}
DeleteUser(email:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${email}`);

}
}
